import Sidebar from '../../../components/organisms/Sidebar/index.tsx';
import TransactionDetailContent from '../../../components/organisms/TransactionDetailContent/index.tsx';

export default function TransactionsDetail() {
  return (
    <section className="transactions-detail overflow-auto">
      <Sidebar activeMenu="transactions" />
      <TransactionDetailContent />
    </section>

  );
}
