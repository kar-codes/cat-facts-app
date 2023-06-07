import { useEffect } from 'react';

import { Box, Button, Typography } from '@mui/material';
import { useNavigate } from 'react-router';

import CatImages from '../components/UI/CatImages';
import { useAppDispatch, useAppSelector } from '../store';
import { catFactsSelector } from '../store/reducers/slices/catFacts/selectors';
import { getCatFacts } from '../store/reducers/slices/catFacts/thunks';

const CatFact = () => {
  const dispatch = useAppDispatch();
  const { data, status } = useAppSelector(catFactsSelector);

  useEffect(() => {
    !data && dispatch(getCatFacts());
  }, [data]);

  const navigate = useNavigate();

  const handleGoToAbout = () => {
    navigate('/about');
  };

  return (
    <Box>
      <Typography>Cat Fact Of The Day</Typography>
      <Typography>{data}</Typography>
      <Button variant="outlined" onClick={handleGoToAbout}>
        Learn More
      </Button>
      <CatImages />
    </Box>
  );
};

export default CatFact;
