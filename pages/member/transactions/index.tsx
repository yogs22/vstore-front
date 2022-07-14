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
