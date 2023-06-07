import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import MainLayout from '../layouts/Main';
import About from '../views/About';
import CatFacts from '../views/CatFacts';
import Contact from '../views/Contact';

const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route index element={<CatFacts />} />
        <Route path="*" element={<Navigate replace to="/" />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

export default Router;
