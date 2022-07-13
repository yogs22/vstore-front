import Category from './category.tsx';
import TableRow from './table-row.tsx';

export default function OverviewContent() {
  return (
    <main className="main-wrapper">
      <div className="ps-lg-0">
        <h2 className="text-4xl fw-bold color-palette-1 mb-30">Overview</h2>
        <div className="top-up-categories mb-30">
          <p className="text-lg fw-medium color-palette-1 mb-14">Top Up Categories</p>
          <div className="main-content">
            <div className="row">
              <Category nominal={18000500} icon="ov-desktop">
                Game
                <br />
                Desktop
              </Category>
              <Category nominal={20000500} icon="ov-mobile">
                Game
                <br />
                Mobile
              </Category>
              <Category nominal={20000000} icon="ov-other">
                Other
                <br />
                Category
              </Category>
            </div>
          </div>
        </div>
        <div className="latest-transaction">
          <p className="text-lg fw-medium color-palette-1 mb-14">Latest Transactions</p>
          <div className="main-content main-content-table overflow-auto">
            <table className="table table-borderless">
              <thead>
                <tr className="color-palette-1">
                  <th className="text-start" scope="col">Game</th>
                  <th scope="col">Item</th>
                  <th scope="col">Price</th>
                  <th scope="col">Status</th>
                </tr>
              </thead>
              <tbody>
                <TableRow title="Mobile Legend" image="overview-1" category="Mobile" item={200} price={290000} status="Pending" />
                <TableRow title="Mobile Legend" image="overview-2" category="Mobile" item={200} price={290000} status="Failed" />
                <TableRow title="Mobile Legend" image="overview-3" category="Mobile" item={200} price={290000} status="Success" />
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </main>
  );
}
