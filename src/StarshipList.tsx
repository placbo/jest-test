import React, { useEffect, useState } from 'react';
import { mockError } from './api-mocks/mockdata';
import { getAllStarships } from './apis';
import { StarshipType } from './types';

const PersonComponent = () => {
  const [data, setData] = useState<StarshipType[]>([]);
  const [loadingError, setLoadingError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const loadStarAllShips = async () => {
      setIsLoading(true);
      setLoadingError('');
      try {
        const response = await getAllStarships();
        setData(response.data.results);
      } catch (error) {
        setLoadingError(mockError.message);
      } finally {
        setIsLoading(false);
      }
    };
    loadStarAllShips().then();
  }, []);

  return (
    <div>
      <h2>Starships in Star Wars:</h2>
      {isLoading ? (
        <p data-testid="loading">loading</p>
      ) : loadingError ? (
        <p data-testid="fetch_error">{loadingError}</p>
      ) : (
        data.map((starship, index) => (
          <pre data-testid={`starships_name_${index}`} key={index}>
            {starship.name}
          </pre>
        ))
      )}
    </div>
  );
};

export default PersonComponent;
