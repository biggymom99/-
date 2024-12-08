import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Signup from './components/Signup';
import Login from './components/Login';
import SignUpForm from './components/SignupForm';
import LoginForm from './components/LoginForm';

const App: React.FC = () => {
  return (
    <Router>
        <Routes>
          <Route path="/signup" Component={Signup} />
          <Route path="/login" Component={Login} />
          <Route path="/" element={
          <div className="flex items-center justify-center h-screen">
            <h1 className="text-3xl font-bold">홈페이지</h1>
          </div>
        } />
        </Routes>
    </Router>
  );
};

export default App;