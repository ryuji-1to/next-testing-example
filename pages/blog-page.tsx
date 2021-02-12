import Layout from '../components/Layout';
import { GetStaticProps } from 'next';
import { getAllPosts } from '../lib/fetch';
import { POST } from '../types/Types';
import Post from '../components/Post';

type STATIC_PROPS = {
  posts: POST[];
};

const BlogPage: React.FC<STATIC_PROPS> = ({ posts }) => {
  return (
    <Layout title="Blog">
      <p className="text-4xl">BlogPage</p>
      <ul>
        {posts?.map(post => (
          <Post key={post.id} {...post} />
        ))}
      </ul>
    </Layout>
  );
};
export default BlogPage;

export const getStaticProps: GetStaticProps = async () => {
  const posts = await getAllPosts();
  return {
    props: {
      posts,
    },
  };
};
