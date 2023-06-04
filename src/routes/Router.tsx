import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import About from '../views/About';
import CatFacts from '../views/CatFacts';
import Contact from '../views/Contact';
import Home from '../views/Home';

const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route index element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path="/catfacts" element={<CatFacts />} />
      <Route path="*" element={<Navigate replace to="/" />} />
    </Routes>
  </BrowserRouter>
);

export default Router;
