import React from 'react';
import Head from 'next/head';
import GrammarPage from '../../../components/templates/GrammarPage';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

const Grammar = () => {

    const router = useRouter();

    useEffect(() => {
      if (typeof window !== 'undefined') {
        const storedUserName = localStorage.getItem('userName');
        if (!storedUserName) {
          router.push('/signup'); // جایگزین '/signup' با مسیر صفحه ثبت نام خود کنید
        }
      }
    }, []);
    
    return (
        <div>
        <div className='pb-4'>
            <Head>
              <meta name="description" content="با استفاده از آزمون تعیین سطح گرامر در English With Mobash ، شما می‌توانید سطح توانایی خود را در قواعد زبان انگلیسی ارزیابی کنید. این آزمون در شش سطح طبقه بندی شده است و موفقیت در هر سطح ، توانایی شما در آن سطح را نشان می‌دهد." />
              <meta name="robots" content="index, follow" />
              <meta name="googlebot" content="index, follow" />

              <meta name="og:title" content="English With Mobash | آزمون تعیین سطح گرامر" />
              <meta name="og:description" content="با استفاده از آزمون تعیین سطح گرامر در English With Mobash ، شما می‌توانید سطح توانایی خود را در قواعد زبان انگلیسی ارزیابی کنید. این آزمون در شش سطح طبقه بندی شده است و موفقیت در هر سطح ، توانایی شما در آن سطح را نشان می‌دهد." />

              <title>English With Mobash | آزمون تعیین سطح گرامر</title>
            </Head>
            <GrammarPage />

        </div>
        </div>
    );
};

export default Grammar;