import Cookies from 'js-cookie';
import { useRouter } from 'next/router';
import Profile from './profile';
import Footer from './footer';
import MenuItem from './menu-item';

interface SidebarProps {
  activeMenu: 'overview' | 'transactions' | 'setting' | 'messages' | 'rewards' | 'card'
}

export default function Sidebar(props: SidebarProps) {
  const { activeMenu } = props;
  const router = useRouter();

  const onLogout = () => {
    Cookies.remove('token');
    router.push('/');
  };

  return (
    <section className="sidebar">
      <div className="content pt-50 pb-30 ps-30">
        <Profile />
        <div className="menus">
          <MenuItem title="Overview" link="/member" img="member-overview.svg" active={activeMenu === 'overview'} />
          <MenuItem title="Transactions" link="/member/transactions" img="member-transactions.svg" active={activeMenu === 'transactions'} />
          <MenuItem title="Setting" link="/member/edit-profile" img="member-setting.svg" active={activeMenu === 'setting'} />
          <MenuItem title="Log Out" onClick={onLogout} img="member-logout.svg" />
        </div>
        <Footer />
      </div>
    </section>
  );
}
