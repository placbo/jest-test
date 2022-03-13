import React, { useEffect, useState } from 'react';
import { mockError } from './api-mocks/mockdata';
import axios from 'axios';

const randomId = Math.floor(Math.random() * 50);
const url = `https://swapi.dev/api/people/${randomId}/`;

const PersonComponent = () => {
  const [data, setData] = useState({ name: '' });
  const [loadingError, setLoadingError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const loadPerson = async () => {
      setIsLoading(true);
      setLoadingError('');
      try {
        const response = await axios.get(url);
        setData(response.data);
      } catch (error) {
        setLoadingError(mockError.message);
      } finally {
        setIsLoading(false);
      }
    };
    loadPerson().then();
  }, [url]);

  return (
    <div>
      <h2>Random person from Star Wars:</h2>
      {isLoading ? (
        <p data-testid="loading">loading</p>
      ) : loadingError ? (
        <p data-testid="fetch_error">{loadingError}</p>
      ) : (
        <pre data-testid="data_name">{data.name}</pre>
      )}
    </div>
  );
};

export default PersonComponent;
