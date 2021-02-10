import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import userEvent from '@testing-library/user-event';
import { getPage, initTestHelpers } from 'next-page-tester';

initTestHelpers();

describe('Navigation by Link', () => {
  it('should route to selected page in navbar', async () => {
    const { page } = await getPage({
      route: '/index',
    });
    render(page);

    userEvent.click(screen.getByTestId('blog-nav'));
    expect(await screen.findByText('BlogPage')).toBeInTheDocument();

    userEvent.click(screen.getByTestId('comment-nav'));
    expect(await screen.findByText('Hello CommentPage')).toBeInTheDocument();

    userEvent.click(screen.getByTestId('context-nav'));
    expect(await screen.findByText('Hello ContextPage')).toBeInTheDocument();

    userEvent.click(screen.getByTestId('task-nav'));
    expect(await screen.findByText('Hello TaskPage')).toBeInTheDocument();

    userEvent.click(screen.getByTestId('home-nav'));
    expect(await screen.findByText('Hello Nextjs')).toBeInTheDocument();
  });
});
