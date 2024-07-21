import Head from 'next/head';
import React from 'react';
import About from '../components/templates/About';

const about = () => {
    return (
        <div className='page-padding-tops'>
            <Head>
              <meta name="description" content="سلام ,من امیرحسین مبشری هستم.دارای مدرک دوره تربیت معلم (TTC) و همچنین مدرک معتبر «رهبران یادگیری» از دانشگاه هاروارد." />
              <meta name="robots" content="index, follow" />
              <meta name="googlebot" content="index, follow" />

              <meta name="og:title" content="English With Mobash | درباره من" />
              <meta name="og:description" content="سلام ,من امیرحسین مبشری هستم.دارای مدرک دوره تربیت معلم (TTC) و همچنین مدرک معتبر «رهبران یادگیری» از دانشگاه هاروارد." />

              <title>Mobash Academy | درباره من</title>
            </Head>
            <div className='pt-4'>
                <About />
            </div>
        </div>
    );
};

export default about;