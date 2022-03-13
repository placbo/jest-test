import axios from 'axios';
import { getAllStarships } from './apis';

// jest.mock('axios');
// const mockedAxios = axios as jest.Mocked<typeof axios>;
// mockedAxios.get.mockResolvedValue({ data: { name: 'Mock Jedi' } });

describe('Component: apis', () => {
  it('empty test', async () => {
    //TODO: Må slå av mock-msw-server
    expect(getAllStarships()).toContain('PCB');
  });
});
