import { useEffect, useCallback, useState } from 'react';
import { toast } from 'react-toastify';
import NumberFormat from 'react-number-format';
import TableRow from './table-row';
import ButtonTab from './button-tab';
import { getMemberTransactions } from '../../../services/member';
import { HistoryTransactionTypes } from '../../../services/data-types/index';

export default function TransactionContent() {
  const [total, setTotal] = useState(0);
  const [transactions, setTransactions] = useState([]);
  const [tab, setTab] = useState('all');
  const getMemberTransactionAPI = useCallback(async (valueParams: string) => {
    const response = await getMemberTransactions(valueParams);
    if (response?.error) {
      return toast.error(response.message);
    }

    setTotal(response.total);
    setTransactions(response.data);

    return true;
  }, []);

  useEffect(() => {
    getMemberTransactionAPI('all');
  }, []);

  const onTabClick = (value: string) => {
    setTab(value);
    getMemberTransactionAPI(value);
  };

  const IMG = process.env.NEXT_PUBLIC_UPLOAD;
  return (
    <main className="main-wrapper">
      <div className="ps-lg-0">
        <h2 className="text-4xl fw-bold color-palette-1 mb-30">My Transactions</h2>
        <div className="mb-30">
          <p className="text-lg color-palette-2 mb-12">You’ve spent</p>
          <h3 className="text-5xl fw-medium color-palette-1">
            <NumberFormat
              value={total}
              prefix="Rp "
              displayType="text"
              thousandSeparator="."
              decimalSeparator=","
            />
          </h3>
        </div>
        <div className="row mt-30 mb-20">
          <div className="col-lg-12 col-12 main-content">
            <div id="list_status_title">
              <ButtonTab onClick={() => onTabClick('all')} title="All Trx" active={tab === 'all'} />
              <ButtonTab onClick={() => onTabClick('success')} title="Success" active={tab === 'success'} />
              <ButtonTab onClick={() => onTabClick('pending')} title="Pending" active={tab === 'pending'} />
              <ButtonTab onClick={() => onTabClick('failed')} title="Failed" active={tab === 'failed'} />
            </div>
          </div>
        </div>
        <div className="latest-transaction">
          <p className="text-lg fw-medium color-palette-1 mb-14">Latest Transactions</p>
          <div className="main-content main-content-table overflow-auto">
            <table className="table table-borderless">
              <thead>
                <tr className="color-palette-1">
                  <th className="" scope="col">Game</th>
                  <th scope="col">Item</th>
                  <th scope="col">Price</th>
                  <th scope="col">Status</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody id="list_status_item">
                {transactions.map((transaction: HistoryTransactionTypes) => (
                  <TableRow
                    key={transaction._id}
                    id={transaction._id}
                    title={transaction.historyVoucherTopup.gameName}
                    image={`${IMG}/${transaction.historyVoucherTopup.thumbnail}`}
                    category={transaction.historyVoucherTopup.category}
                    item={`${transaction.historyVoucherTopup.coinQuantity} ${transaction.historyVoucherTopup.coinName}`}
                    price={transaction.value}
                    status={transaction.status}
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
