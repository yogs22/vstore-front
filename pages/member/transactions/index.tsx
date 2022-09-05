import jwtDecode from 'jwt-decode';
import Sidebar from '../../../components/organisms/Sidebar/index.tsx';
import TransactionContent from '../../../components/organisms/TransactionContent/index.tsx';
import { JWTPayloadTypes, UserTypes } from '../../../services/data-types/index.ts';

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

  const jwtToken = Buffer.from(token, 'base64').toString('ascii');
  const payload: JWTPayloadTypes = jwtDecode(jwtToken);
  const userFromPayload: UserTypes = payload.player;
  const IMG = process.env.NEXT_PUBLIC_IMG;
  userFromPayload.avatar = `${IMG}/${userFromPayload.avatar}`;
  return {
    props: {
      user: userFromPayload,
    },
  };
}
