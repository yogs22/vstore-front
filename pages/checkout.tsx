import jwtDecode from 'jwt-decode';
import CheckoutItem from '../components/organisms/CheckoutItem/index';
import CheckoutDetail from '../components/organisms/CheckoutDetail/index';
import CheckoutConfirmation from '../components/organisms/CheckoutConfirmation/index';
import Navbar from '../components/organisms/Navbar/index';
import Footer from '../components/organisms/Footer/index';
import { JWTPayloadTypes, UserTypes } from '../services/data-types/index';

export default function Checkout() {
  return (
    <>
      <Navbar />
      <section className="checkout mx-auto pt-md-30 pb-md-145 pt-10 pb-30">
        <div className="container-fluid">
          <div className="title-text pt-md-50 pt-0">
            <h2 className="text-4xl fw-bold color-palette-1 mb-10">Checkout</h2>
            <p className="text-lg color-palette-1 mb-0">Waktunya meningkatkan cara bermain</p>
          </div>
          <CheckoutItem />
          <hr />
          <CheckoutDetail />
          <CheckoutConfirmation />
        </div>
      </section>
      <Footer />
    </>
  );
}

interface GetServerSideProps {
  req: {
    cookies: {
      token: string;
    };
  }
}

export async function getServerSideProps({ req }: GetServerSideProps) {
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
