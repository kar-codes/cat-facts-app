import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const handleGoToAbout = () => {
    navigate('/about');
  };

  return (
    <div>
      <h2>HOME</h2>
      <p>here goes stuff</p>
      <button onClick={handleGoToAbout}>About</button>
    </div>
  );
};

export default Home;
