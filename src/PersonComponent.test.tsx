import { render, screen } from '@testing-library/react';
import { peopleHandlerException } from './api-mocks/handlers';
import { mswServer } from './api-mocks/msw-server';
import PersonComponent from './PersonComponent';
import { mockError, mockPerson } from './api-mocks/mockdata';

describe('Component: PersonComponent', () => {
  it('displays returned tasks on successful fetch', async () => {
    render(<PersonComponent />);
    expect(screen.findByTestId('person_loading')).toBeInTheDocument();
    const name = await screen.findByTestId('person_name');
    expect(name).toBeInTheDocument();
    expect(name.textContent).toContain(mockPerson.name);
  });

  it('displays error message when fetching raises error', async () => {
    mswServer.use(peopleHandlerException);
    render(<PersonComponent />);
    const errorDisplay = await screen.findByTestId('person_fetch_error');
    expect(errorDisplay).toBeInTheDocument();
    expect(errorDisplay.textContent).toContain(mockError.message);
  });
});
