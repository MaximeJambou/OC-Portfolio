import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import "../src/styles/main.scss";

import Home from './pages/Home/Home';
import About from './pages/About/About';
import ProjectPage from './pages/ProjectPage/ProjectPage';
import NotFound from './pages/NotFound/NotFound';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';


function App() {
  return(
    <Router>
      <Header/>
      <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/a-propos" element={<About />} />
        <Route path="/projet/:id" element={<ProjectPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      </main>
      <Footer/>
    </Router>
  );
}

export default App;
