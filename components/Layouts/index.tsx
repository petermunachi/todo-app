import Head from 'next/head';
import { ToastContainer } from 'react-toastify';

interface IProps {
  children: React.ReactNode;
  title: string;
}

const Layout: React.FC<IProps> = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        {children}
        <ToastContainer />
      </main>
    </>
  );
};

export default Layout;
