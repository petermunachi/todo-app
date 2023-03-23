import { GetServerSideProps, GetServerSidePropsContext } from 'next';
import HomePage from 'components/HomePage';
import Layout from 'components/Layouts';
import { wrapper } from 'redux/store';
import { setUsers } from 'ducks';

const Home = () => {
  return (
    <Layout title="Home">
      <HomePage />
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps =
  wrapper.getServerSideProps(
    (store) => async (ctx: GetServerSidePropsContext) => {
      const res = await fetch(`${process.env.NEXT_PUBLIC_WEBSITE}/api/user`);
      const data = await res.json();

      const users = data?.data || [];

      store.dispatch(setUsers(users));

      return {
        props: {},
      };
    }
  );

export default Home;
