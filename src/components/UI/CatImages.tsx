import { useEffect, useMemo } from 'react';

import { Box } from '@mui/material';

import { useAppDispatch, useAppSelector } from '../../store';
import { catImagesSelector } from '../../store/reducers/slices/catImages/selectors';
import { getCatImages } from '../../store/reducers/slices/catImages/thunks';

let isMounted = false;

const CatImages = () => {
  const dispatch = useAppDispatch();
  const { data = [] } = useAppSelector(catImagesSelector);

  const photo = useMemo(() => {
    const randomNumber = Math.round(data.length * Math.random());
    return data?.[randomNumber];
  }, [data]);

  useEffect(() => {
    if (!isMounted) {
      isMounted = true;
      dispatch(getCatImages());
    }
  }, []);

  if (!photo) return null;

  return (
    <Box mt={4}>
      <img
        src={photo.src.portrait}
        srcSet={photo.src.original}
        alt={photo.alt}
        loading="lazy"
        width={180}
        height={240}
      />
    </Box>
  );
};

export default CatImages;
