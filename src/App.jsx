import './App.css';
import Header from './components/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import SignupPage from './pages/Signup';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <BrowserRouter>
      <ToastContainer />
      <Header />
      <Routes>
        <Route element={<SignupPage />} path='/' />
        <Route element={<Dashboard />} path='/dashboard' />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
