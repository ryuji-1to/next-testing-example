import Head from 'next/head';
import Link from 'next/link';

type TITLE = {
  title: string;
};

const PAGES = [
  {
    href: '/',
    testId: 'home-nav',
    pageName: 'Home',
  },
  {
    href: '/blog-page',
    testId: 'blog-nav',
    pageName: 'Blog',
  },
  {
    href: '/comment-page',
    testId: 'comment-nav',
    pageName: 'Comment',
  },
  {
    href: '/context-page',
    testId: 'context-nav',
    pageName: 'Context',
  },
  {
    href: '/task-page',
    testId: 'task-nav',
    pageName: 'Todos',
  },
];

const Layout: React.FC<TITLE> = ({ children, title = 'Next.js' }) => {
  return (
    <div className="flex justify-center items-center flex-col min-h-screen font-mono">
      <Head>
        <title>{title}</title>
      </Head>
      <header>
        <nav className="bg-gray-800 w-screen">
          <div className="flex items-center pl-8 h-14">
            <div className="flex space-x-4">
              {PAGES.map(({ href, testId, pageName }) => (
                <Link href={href} key={testId}>
                  <a
                    data-testid={testId}
                    className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded"
                  >
                    {pageName}
                  </a>
                </Link>
              ))}
            </div>
          </div>
        </nav>
      </header>
      <main className="flex flex-1 justify-center items-center flex-col w-screen">
        {children}
      </main>
      <footer className="w-full h-12 flex justify-center items-center border-t">
        <a
          className="flex items-center"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by
          <img src="/vercel.svg" alt="Vercel Logo" className="h-4 ml-2" />
        </a>
      </footer>
    </div>
  );
};

export default Layout;
