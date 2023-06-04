import { useEffect } from 'react';

import { useAppDispatch, useAppSelector } from '../store';
import { catFactsSelector } from '../store/reducers/slices/catFacts/selectors';
import { getCatFacts } from '../store/reducers/slices/catFacts/thunks';

const CatFact = () => {
  const dispatch = useAppDispatch();
  const { data, status } = useAppSelector(catFactsSelector);

  console.log({ data, status });

  useEffect(() => {
    !data && dispatch(getCatFacts());
  }, [data]);

  return (
    <div>
      <h2>CatFact</h2>
      <p>Fact of the day</p>
      <p>{data}</p>
    </div>
  );
};

export default CatFact;
