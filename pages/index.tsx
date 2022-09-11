import { useEffect } from 'react';
import AOS from 'aos';
import Head from 'next/head';
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
      <Head>
        <title>StoreGG - Get a New Experience in Gaming</title>
        <meta name="description" content="Kami menyediakan jutaan cara untuk membantu players menjadi pemenang sejati" />
        <meta property="og:title" content="StoreGG - Get a New Experience in Gaming" />
        <meta property="og:description" content="Kami menyediakan jutaan cara untuk membantu players menjadi pemenang sejati" />
        <meta property="og:image" content="StoreGG - Get a New Experience in Gaming" />
        <meta property="og:url" content="StoreGG - Get a New Experience in Gaming" />
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
