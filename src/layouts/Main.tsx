import { Container } from '@mui/material';
import { Outlet } from 'react-router-dom';

import Footer from '../components/UI/Footer';
import Header from '../components/UI/Header';

const Main = () => (
  <>
    <Header />

    <Container maxWidth="sm">
      <Outlet />
    </Container>

    <Footer />
  </>
);

export default Main;
