import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import PrivateRoute from './components/PrivateRoute';
import About from './components/About';
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import Dashboard from './pages/Dashboard';

const App = (props) => {
  return (
    <Router>
      <Routes>
        <Route path="/signIn" element={<SignIn></SignIn>} />
        <Route path="/signUp" element={<SignUp></SignUp>} />
        <Route path="/" element={<Dashboard></Dashboard>}></Route>
        <Route exact path='/about' element={<PrivateRoute />}>
          <Route exact path='/about' element={<About />} />
        </Route>
      </Routes>
    </Router >
  );
}

export default App;

