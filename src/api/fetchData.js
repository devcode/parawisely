import { useQuery } from 'react-query';

const travelPlace = () => {
  const {isLoading, error, data} = useQuery('travelPlace', () =>
    fetch('http://parawisely-backend.test/api/travel-place').then(res =>
      res.json()
    )
  );
};
