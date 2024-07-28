import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import Booking from './components/Booking';
import Appointments from './components/Appointments';
import Home from './components/Home';
import NotFound from './components/NotFound';

const App = () => (
  <Router>
    <div>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/history" element={<Appointments />} />
          <Route element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  </Router>
);

export default App;
