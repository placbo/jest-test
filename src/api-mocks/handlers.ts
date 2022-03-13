import { rest } from 'msw';

const baseUrl = 'http://localhost:5000/api';

const mockTasks = [
  { id: 0, name: 'Task Zero', completed: false },
  { id: 1, name: 'Task One', completed: true },
];

const getTasksPath = `${baseUrl}/tasks`;

const tasksHandler = rest.get(getTasksPath, async (req, res, ctx) => res(ctx.json(mockTasks)));

export const tasksHandlerException = rest.get(getTasksPath, async (req, res, ctx) =>
  res(ctx.status(500), ctx.json({ message: 'Deliberately broken request' }))
);

export const handlers = [tasksHandler];
