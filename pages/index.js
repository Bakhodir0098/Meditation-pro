import React from 'react';
import Header from '../components/1-Header/Header';
import Card from '../components/2-Card/Card';
import Head from 'next/head';
import Practice from '../components/3-Practice/Practice';
import TakeBreath from '../components/4-TakeBreath/TakeBreath';
import Meditation from '../components/5-Meditation/Meditation';
import Transform from '../components/6-Transform/Transform';
import Footer from '../components/7-Footer/Footer';

const Home = () => {
  return (
    <div>
      <Head>
        <title>Meditation App</title>
        <link rel='icon' href='../public/img/logo.png' />
      </Head>
      <Header />
      <Card />
      <Practice />
      <TakeBreath />
      <Meditation />
      <Transform />
      <Footer />
    </div>
  );
};

export default Home;
