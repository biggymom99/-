import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Join from './components/Join';
import Login from './components/Login';

const App: React.FC = () => {
  return (
    <Router>
        <Routes>
          <Route path="/join" Component={Join} />
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