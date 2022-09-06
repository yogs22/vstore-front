import Sidebar from '../../../components/organisms/Sidebar/index.tsx';
import TransactionDetailContent from '../../../components/organisms/TransactionDetailContent/index.tsx';
import { HistoryTransactionTypes } from '../../../services/data-types/index.ts';
import { getTransactionDetal } from '../../../services/member.ts';

interface TransactionDetailProps {
  transactionDetail: HistoryTransactionTypes;
}

export default function TransactionsDetail(props: TransactionDetailProps) {
  const { transactionDetail } = props;
  return (
    <section className="transactions-detail overflow-auto">
      <Sidebar activeMenu="transactions" />
      <TransactionDetailContent data={transactionDetail} />
    </section>

  );
}

interface GetServerSideProps {
  req: {
    cookies: {
      token: string;
    };
    params: {
      idTrx: string,
    },
  }
}

export async function getServerSideProps({ req, params }): GetServerSideProps {
  const { token } = req.cookies;
  const { idTrx } = params;
  if (!token) {
    return {
      redirect: {
        destination: '/sign-in',
        permanent: false,
      },
    };
  }

  const jwtToken = Buffer.from(token, 'base64').toString('ascii');
  const response = await getTransactionDetal(idTrx, jwtToken);
  return {
    props: {
      transactionDetail: response.data,
    },
  };
}
