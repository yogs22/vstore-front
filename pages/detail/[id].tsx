import { useRouter } from 'next/router';
import { useEffect, useState, useCallback } from 'react';
import TopUpForm from '../../components/organisms/TopUpForm/index.tsx';
import TopUpItem from '../../components/organisms/TopUpItem/index.tsx';
import Navbar from '../../components/organisms/Navbar/index.tsx';
import Footer from '../../components/organisms/Footer/index.tsx';
import { getDetailVoucher } from '../../services/player.ts';

export default function Detail() {
  const { query, isReady } = useRouter();
  const [dataItem, setDataItem] = useState({
    name: '',
    thumbnail: '',
    category: {
      name: '',
    },
  });
  const [nominals, setNominals] = useState([]);
  const [payments, setPayments] = useState([]);

  const getVoucherDetailAPI = useCallback(async (id) => {
    const data = await getDetailVoucher(id);
    setDataItem(data.data);
    localStorage.setItem('data-item', JSON.stringify(data.data));
    setNominals(data.data.nominals);
    setPayments(data.payment);
  }, []);

  useEffect(() => {
    if (isReady) {
      getVoucherDetailAPI(query.id);
    }
  }, [isReady]);
  return (
    <>
      <Navbar />
      <section className="detail pt-lg-60 pb-50">
        <div className="container-xxl container-fluid">
          <div className="detail-header pb-50">
            <h2 className="text-4xl fw-bold color-palette-1 text-start mb-10">Top Up</h2>
            <p className="text-lg color-palette-1 mb-0">Perkuat akun dan jadilah pemenang</p>
          </div>
          <div className="row">
            <div className="col-xl-3 col-lg-4 col-md-5 pb-30 pb-md-0 pe-md-25 text-md-start">
              <TopUpItem data={dataItem} type="mobile" />
            </div>
            <div className="col-xl-9 col-lg-8 col-md-7 ps-md-25">
              <TopUpItem data={dataItem} type="desktop" />
              <hr />
              <TopUpForm nominals={nominals} payments={payments} />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
