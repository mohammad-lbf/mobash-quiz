import TestsPage from '../../components/templates/TestsPage';
import Head from 'next/head';


const Tests = () => {
    return (
        <div className='page-padding-tops pb-4'>
            <Head>
              <meta name="description" content="اینجا،میتونید سطح خودتون رو با استفاده از آزمون های تعیین سطح Mobash Academy پیدا کنید! برای شرکت در آزمون فقط کافیه نام و نام خانوادگی خودتون رو وارد کنید." />
              <meta name="robots" content="index, follow" />
              <meta name="googlebot" content="index, follow" />

              <meta name="og:title" content="Mobash Academy | آزمون ها" />
              <meta name="og:description" content="اینجا،میتونید سطح خودتون رو با استفاده از آزمون های تعیین سطح Mobash Academy پیدا کنید! برای شرکت در آزمون فقط کافیه نام و نام خانوادگی خودتون رو وارد کنید." />

              <title>Mobash Academy | آزمون ها</title>
            </Head>
            <TestsPage />
        </div>
    );
};

export default Tests;