import Layout from '../components/Layout';
import { GetStaticProps } from 'next';
import { TASK } from '../types/Types';
import axios from 'axios';
import { getAllTasks } from '../lib/fetch';
import useSWR from 'swr';

type STATIC_PROPS = {
  staticTasks: TASK[];
};

const axiosFetcher = async () => {
  const result = await axios.get<TASK[]>(
    'https://jsonplaceholder.typicode.com/todos/?_limit=10'
  );
  return result.data;
};

const TaskPage: React.FC<STATIC_PROPS> = ({ staticTasks }) => {
  const { data: tasks, error } = useSWR('todosFetch', axiosFetcher, {
    initialData: staticTasks,
    revalidateOnMount: true,
  });

  if (error) return <span>Error!</span>;
  return (
    <Layout title="Todos">
      <p className="text-4xl mb-10">Hello TaskPage</p>
      <ul>
        {tasks?.map(task => (
          <li key={task.id}>
            {task.id}
            {': '}
            <span>{task.title}</span>
          </li>
        ))}
      </ul>
    </Layout>
  );
};

export default TaskPage;

export const getStaticProps: GetStaticProps = async () => {
  const staticTasks = await getAllTasks();
  return {
    props: { staticTasks },
  };
};
