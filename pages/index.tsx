import { useEffect } from 'react';
import AOS from 'aos';
import Navbar from '../components/organisms/Navbar/index.tsx';
import MainBanner from '../components/organisms/MainBanner/index.tsx';
import TransactionStep from '../components/organisms/TransactionStep/index.tsx';
import FeaturedGame from '../components/organisms/FeaturedGame/index.tsx';
import Reach from '../components/organisms/Reach/index.tsx';
import Story from '../components/organisms/Story/index.tsx';
import Footer from '../components/organisms/Footer/index.tsx';

export default function Home() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <Navbar />
      <MainBanner />
      <TransactionStep />
      <FeaturedGame />
      <Reach />
      <Story />
      <Footer />
    </>
  );
}
