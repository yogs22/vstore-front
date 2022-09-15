import { useEffect } from 'react';
import AOS from 'aos';
import Head from 'next/head';
import Navbar from '../components/organisms/Navbar/index';
import MainBanner from '../components/organisms/MainBanner/index';
import TransactionStep from '../components/organisms/TransactionStep/index';
import FeaturedGame from '../components/organisms/FeaturedGame/index';
import Reach from '../components/organisms/Reach/index';
import Story from '../components/organisms/Story/index';
import Footer from '../components/organisms/Footer/index';

export default function Home() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <Head>
        <title>Vstore - Get a New Experience in Gaming</title>
        <meta name="description" content="Kami menyediakan jutaan cara untuk membantu players menjadi pemenang sejati" />
        <meta property="og:title" content="Vstore - Get a New Experience in Gaming" />
        <meta property="og:description" content="Kami menyediakan jutaan cara untuk membantu players menjadi pemenang sejati" />
        <meta property="og:image" content="Vstore - Get a New Experience in Gaming" />
        <meta property="og:url" content="Vstore - Get a New Experience in Gaming" />
      </Head>
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
