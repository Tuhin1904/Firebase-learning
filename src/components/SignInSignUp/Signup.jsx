import { useState } from "react";
import Input from "../Input";
import "./styles.css";

const Signup = () => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const handleSubmit = () => {};
  return (
    <div className="signup-wrapper">
      <h4>
        Sign Up <span className="fin-header">Fin-tracker.</span>
      </h4>
      <form onSubmit={handleSubmit}>
        <Input
          label="Full Name"
          placeholder="Enter Full Name"
          state={userName}
          setState={setUserName}
          type="text"
        />
        <Input
          label="Email"
          placeholder="Enter Email"
          state={email}
          setState={setEmail}
          type="email"
        />
        <Input
          label="Password"
          placeholder="Enter Password"
          state={password}
          setState={setPassword}
          type="password"
        />
        <Input
          label="Confirm Password"
          placeholder="Enter Password"
          state={confirmPass}
          setState={setConfirmPass}
          type="password"
        />
        <button className="btn">Submit</button>
        <p style={{ textAlign: "center" }}>or</p>
      </form>

      <button className="btn btn-dark">Submit</button>
    </div>
  );
};

export default Signup;
