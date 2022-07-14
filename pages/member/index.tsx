import Sidebar from '../../components/organisms/Sidebar/index.tsx';
import OverviewContent from '../../components/organisms/OverviewContent/index.tsx';

export default function Member() {
  return (
    <section className="overview overflow-auto">
      <Sidebar activeMenu="overview" />
      <OverviewContent />
    </section>

  );
}
