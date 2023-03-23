import { User } from '@prisma/client';
import EditPage from 'components/EditPage';
import Layout from 'components/Layouts';
import { GetServerSideProps, GetServerSidePropsContext } from 'next';

interface IProps {
  user: User;
}

const Edit: React.FC<IProps> = ({ user }) => {
  return (
    <Layout title="Edit">
      <EditPage user={user} />
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async (
  ctx: GetServerSidePropsContext
) => {
  if (!ctx.query.id) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_WEBSITE}/api/user/?id=${ctx.query.id}`
  );
  const data = await res.json();

  if (!data?.data) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }

  return {
    props: { user: data?.data },
  };
};

export default Edit;
