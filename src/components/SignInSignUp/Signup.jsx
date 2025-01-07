import { useState } from 'react';
import Input from '../Input';
import './styles.css';
import { auth, createUserWithEmailAndPassword, db, doc, setDoc, signInWithEmailAndPassword } from '../../firebase';
import { toast } from 'react-toastify';

const Signup = () => {
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPass, setConfirmPass] = useState('');
  const [loading, setLoading] = useState(false);
  const [loginForm, setLoginForm] = useState(false);

  const handleSubmit = (e) => {
    setLoading(true);
    e.preventDefault();
    if (userName !== '' && email !== '' && password !== '' && confirmPass !== '') {
      if (password == confirmPass) {
        createUserWithEmailAndPassword(auth, email, password)
          .then((userCred) => {
            const user = userCred.user;
            console.log(user, 'user');
            setLoading(false);
            toast.success('User Created!');
            createDoc(user);
            setLoginForm(true);
          })
          .catch((error) => {
            console.log(error);
            setLoading(false);
          });
      } else {
        toast.error('Passwords must match!');
        setLoading(false);
      }
    } else {
      toast.error('All fields are required!');
      setLoading(false);
    }
  };

  const signIn = (e) => {
    e.preventDefault();
    if (email !== '' && password !== '') {
      signInWithEmailAndPassword(auth, email, password)
        .then((userRes) => {
          const user = userRes.user;
          console.log('user', user);
          toast.success('User Logged In!');
        })
        .catch((err) => console.log(err));
    }
  };
  const createDoc = async (user) => {
    try {
      await setDoc(doc(db, 'users', user.uid), {
        name: user.displayName ? user.displayName : name,
        email: user.email,
        photoURL: user.photoURL,
        createdAt: new Date(),
      });
      toast.success('Doc Created!');
    } catch (err) {
      console.log(err);
      toast.error('Doc Creation failed!');
    }
  };
  return (
    <>
      {loginForm ? (
        <>
          <div className='signup-wrapper'>
            <h4>
              Sign In <span className='fin-header'>Fin-tracker.</span>
            </h4>
            <form onSubmit={signIn}>
              <Input label='Email' placeholder='Enter Email' state={email} setState={setEmail} type='text' />
              <Input
                label='Password'
                placeholder='Enter Password'
                state={password}
                setState={setPassword}
                type='password'
              />
              <button type='submit' className='btn'>
                {!loading ? 'Login' : 'Loading...'}
              </button>
            </form>
            <p style={{ textAlign: 'center', color: 'blue', cursor: 'pointer' }} onClick={() => setLoginForm(false)}>
              Go Back to signup ?
            </p>
          </div>
        </>
      ) : (
        <div className='signup-wrapper'>
          <h4>
            Sign Up <span className='fin-header'>Fin-tracker.</span>
          </h4>
          <form onSubmit={handleSubmit}>
            <Input
              label='Full Name'
              placeholder='Enter Full Name'
              state={userName}
              setState={setUserName}
              type='text'
            />
            <Input label='Email' placeholder='Enter Email' state={email} setState={setEmail} type='email' />
            <Input
              label='Password'
              placeholder='Enter Password'
              state={password}
              setState={setPassword}
              type='password'
            />
            <Input
              label='Confirm Password'
              placeholder='Enter Password'
              state={confirmPass}
              setState={setConfirmPass}
              type='password'
            />
            <button type='submit' className='btn'>
              {!loading ? 'Signup using Email and Password' : 'Loading...'}
            </button>
            <p style={{ textAlign: 'center' }}>or</p>
          </form>

          <button className='btn btn-dark'>SignUp using Google</button>
          <p style={{ textAlign: 'center' }}>
            Already have an account ?{' '}
            <span style={{ color: 'blue', cursor: 'pointer' }} onClick={() => setLoginForm(true)}>
              Login
            </span>
          </p>
        </div>
      )}
    </>
  );
};

export default Signup;
