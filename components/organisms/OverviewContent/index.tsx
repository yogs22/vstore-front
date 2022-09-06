import { useEffect, useCallback, useState } from 'react';
import { toast } from 'react-toastify';
import Category from './category.tsx';
import TableRow from './table-row.tsx';
import { getMemberOverview } from '../../../services/member.ts';
import { HistoryTransactionTypes, TopupCategoriesTypes } from '../../../services/data-types/index.ts';

export default function OverviewContent() {
  const [count, setCount] = useState([]);
  const [data, setData] = useState([]);
  const getMemberOverviewAPI = useCallback(async () => {
    const response = await getMemberOverview();
    if (response?.error) {
      return toast.error(response.message);
    }

    setCount(response.count);
    setData(response.data);

    return true;
  }, []);

  useEffect(() => {
    getMemberOverviewAPI();
  }, []);

  const IMG = process.env.NEXT_PUBLIC_UPLOAD;
  return (
    <main className="main-wrapper">
      <div className="ps-lg-0">
        <h2 className="text-4xl fw-bold color-palette-1 mb-30">Overview</h2>
        <div className="top-up-categories mb-30">
          <p className="text-lg fw-medium color-palette-1 mb-14">Top Up Categories</p>
          <div className="main-content">
            <div className="row">
              {count.map((item: TopupCategoriesTypes) => (
                <Category key={item._id} nominal={item.value} icon={`ov-${item.name.toLowerCase()}`}>
                  {item.name}
                </Category>
              ))}
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
                {data.map((item: HistoryTransactionTypes) => (
                  <TableRow
                    key={item._id}
                    title={item.historyVoucherTopup.gameName}
                    image={`${IMG}/${item.historyVoucherTopup.thumbnail}`}
                    category={item.historyVoucherTopup.category}
                    item={`${item.historyVoucherTopup.coinQuantity} ${item.historyVoucherTopup.coinName}`}
                    price={item.historyVoucherTopup.price}
                    status={item.status}
                  />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </main>
  );
}
