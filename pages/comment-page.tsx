import axios from 'axios';
import Error from 'next/error';
import useSWR from 'swr';
import Layout from '../components/Layout';
import { COMMENT } from '../types/Types';
import Comment from '../components/Comment';

const axiosFetcher = async () => {
  const result = await axios.get<COMMENT[]>(
    'https://jsonplaceholder.typicode.com/comments?_limit=10'
  );
  return result.data;
};

const CommentPage: React.FC = () => {
  const { data: comments, error } = useSWR<COMMENT[], Error>(
    'commentFetch',
    axiosFetcher
  );

  if (error) return <span>error</span>;

  return (
    <Layout title="Comment">
      <p className="text-4xl m-10">Hello CommentPage</p>
      <ul>
        {comments?.map(comment => (
          <Comment key={comment.id} {...comment} />
        ))}
      </ul>
    </Layout>
  );
};
export default CommentPage;
