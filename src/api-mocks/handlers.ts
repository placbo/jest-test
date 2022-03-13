import { rest } from 'msw';
import { mockError, mockPerson } from './mockdata';

const people_url = `https://swapi.dev/api/people/*`;
// handlers:
const peopleHandler = rest.get(people_url, async (req, res, ctx) => res(ctx.json(mockPerson))); //restContext.delay(10),
export const handlers = [peopleHandler];

// exceptions:
export const peopleHandlerException = rest.get('*', async (req, res, ctx) => res(ctx.status(500), ctx.json(mockError)));
