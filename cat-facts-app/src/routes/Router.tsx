import CatFacts from '../views/CatFacts'
import Home from '../views/Home'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route index element={<Home/>} />
      <Route path='/catfacts' element={<CatFacts/>}/>
      <Route path="*" element={<Navigate replace to="/" />} />
    </Routes>
  </BrowserRouter>
)

export default Router;
