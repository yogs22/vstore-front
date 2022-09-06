import Sidebar from '../../../components/organisms/Sidebar/index.tsx';
import TransactionContent from '../../../components/organisms/TransactionContent/index.tsx';

export default function Transactions() {
  return (
    <section className="transactions overflow-auto">
      <Sidebar activeMenu="transactions" />
      <TransactionContent />
    </section>

  );
}

interface GetServerSideProps {
  req: {
    cookies: {
      token: string;
    };
  }
}

export async function getServerSideProps({ req }): GetServerSideProps {
  const { token } = req.cookies;
  if (!token) {
    return {
      redirect: {
        destination: '/sign-in',
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
}
