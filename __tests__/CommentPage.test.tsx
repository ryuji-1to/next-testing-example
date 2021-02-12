import { render, screen, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { SWRConfig, cache } from 'swr';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import CommentPage from '../pages/comment-page';

const server = setupServer(
  rest.get(
    'https://jsonplaceholder.typicode.com/comments?_limit=10',
    (_req, res, ctx) => {
      return res(
        ctx.status(200),
        ctx.json([
          {
            postId: 1,
            id: 1,
            name: 'A',
            email: 'dummya@gmail.com',
            body: 'test body a',
          },
          {
            postId: 2,
            id: 2,
            name: 'B',
            email: 'dummyb@gmail.com',
            body: 'test body b',
          },
        ])
      );
    }
  )
);

beforeAll(() => server.listen());
afterEach(() => {
  server.resetHandlers();
  cleanup();
  //   cache.clear();
});
afterAll(() => server.close());

describe('Comment page with useSWR', () => {
  it('Should render the value fetched  by useSWR', async () => {
    render(
      <SWRConfig value={{ dedupingInterval: 0 }}>
        <CommentPage />
      </SWRConfig>
    );
    expect(await screen.findByText('1 : test body a')).toBeInTheDocument();
    expect(screen.getByText('2 : test body b')).toBeInTheDocument();
  });
  it('should render error', async () => {
    server.use(
      rest.get(
        'https://jsonplaceholder.typicode.com/comments?_limit=10',
        (req, res, ctx) => {
          return res(ctx.status(400));
        }
      )
    );
    render(
      <SWRConfig value={{ dedupingInterval: 0 }}>
        <CommentPage />
      </SWRConfig>
    );
    expect(await screen.findByText('error')).toBeInTheDocument();
  });
});
