import Profile from './profile.tsx';
import Footer from './footer.tsx';
import MenuItem from './menu-item.tsx';

export default function Sidebar() {
  return (
    <section className="sidebar">
      <div className="content pt-50 pb-30 ps-30">
        <Profile />
        <div className="menus">
          <MenuItem title="Overview" link="/member" img="member-overview.svg" active />
          <MenuItem title="Transactions" link="/member/transactions" img="member-transactions.svg" />
          <MenuItem title="Messages" link="/member/messages" img="member-messages.svg" />
          <MenuItem title="Card" link="/member/card" img="member-card.svg" />
          <MenuItem title="Rewards" link="/member/rewards" img="member-rewards.svg" />
          <MenuItem title="Setting" link="/member/setting" img="member-setting.svg" />
          <MenuItem title="Log Out" link="/" img="member-logout.svg" />
        </div>
        <Footer />
      </div>
    </section>
  );
}
