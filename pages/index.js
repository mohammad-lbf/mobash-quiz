import Head from 'next/head';
import HomePage from '../components/templates/HomePage';


export default function Home (){
  return (
      
      <div className='page-padding-tops'>
          <Head>
          <meta name="description" content="سلام دوستان، من امیرحسین مبشری هستم و اینجا هم سایت شخصی منه که در اصل برای شماست :) من در اینجا ضمن معرفی خودم، آموخته هام از زبان انگلیسی رو باهاتون به اشتراک میذارم :)" />
          <meta name="robots" content="index, follow" />
          <meta name="googlebot" content="index, follow" />

          <meta name="og:title" content="English With Mobash - امیرحسین مبشری ، مدرس زبان انگلیسی" />
          <meta name="og:description" content="سلام دوستان، من امیرحسین مبشری هستم و اینجا هم سایت شخصی منه که در اصل برای شماست :) من در اینجا ضمن معرفی خودم، آموخته هام از زبان انگلیسی رو باهاتون به اشتراک میذارم :)" />

          <title>English With Mobash | امیرحسین مبشری</title>
          </Head>
          <HomePage />
      </div>
  );
};

