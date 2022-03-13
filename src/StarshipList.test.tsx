import { render, screen } from '@testing-library/react';
import { mockStarships } from './api-mocks/mockdata';
import StarshipList from './StarshipList';

describe('Component: StarShipList', () => {
  it('displays returned tasks on successful fetch', async () => {
    render(<StarshipList />);

    //TODO: how to mock getAllStarships() ???

    // expect(screen.getByTestId('starships_loading')).toBeInTheDocument();
    // const name = await screen.findByTestId('starships_name_0');
    // expect(name).toBeInTheDocument();
    // expect(name.textContent).toContain(mockStarships[0].name);
  });
});
