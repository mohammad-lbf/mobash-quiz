import Head from 'next/head';
import HomePage from '../components/templates/HomePage';


export default function Home (){
  return (
      
      <div className='page-padding-tops'>
          <Head>
          <meta name="description" content="آکادمی مبش اینجاست تا با جدیدترین متدهای روز دنیا، زبان انگلیسی را بصورت کاربردی و در کم ترین زمان ممکن بیاموزید." />
          <meta name="robots" content="index, follow" />
          <meta name="googlebot" content="index, follow" />

          <meta name="og:title" content="Mobash Academy | آکادمی آموزش زبان انگلیسی مبش" />
          <meta name="og:description" content="آکادمی مبش اینجاست تا با جدیدترین متدهای روز دنیا، زبان انگلیسی را بصورت کاربردی و در کم ترین زمان ممکن بیاموزید." />

          <title>Mobash Academy | آکادمی آموزش زبان انگلیسی مبش</title>
          </Head>
          <HomePage />
      </div>
  );
};

