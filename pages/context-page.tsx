import Layout from '../components/Layout';
import ContextA from '../components/ContextA';
import ContextB from '../components/ContextB';
import { StateProvider } from '../context/StateProvider';

const ContextPage: React.FC = () => {
  return (
    <Layout title="Context">
      <p className="text-4xl mb-10">Hello ContextPage</p>
      <StateProvider>
        <ContextA />
        <ContextB />
      </StateProvider>
    </Layout>
  );
};
export default ContextPage;
