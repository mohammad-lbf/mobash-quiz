import Head from 'next/head';
import HomePage from '../components/templates/HomePage';


export default function Home (){
  return (
      
      <div className='page-padding-tops'>
          <Head>
          <meta name="description" content="سلام دوستان، من امیرحسین مبشری هستم و اینجا هم سایت شخصی منه که در اصل برای شماست :) من در اینجا ضمن معرفی خودم، آموخته هام از زبان انگلیسی رو باهاتون به اشتراک میذارم :)" />
          <meta name="robots" content="index, follow" />
          <meta name="googlebot" content="index, follow" />

          <meta name="og:title" content="Codinglbf - مرجع تخصصی برنامه نویسی" />
          <meta name="og:description" content="وبسایت codinglbf.ir، مرجع تخصصی مقالات به روز و یادگیری برنامه نویسی است که هر آنچه که برای ورود به دنیای شگفت انگیز برنامه نویسی نیاز دارید را در اختیارتان قرار می‌دهد." />

          <title>English With Mobash | امیرحسین مبشری</title>
          </Head>
          <HomePage />
      </div>
  );
};

