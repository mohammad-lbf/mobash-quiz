import Head from 'next/head';
import React from 'react';
import About from '../components/templates/About';

const about = () => {
    return (
        <div className='page-padding-tops'>
            <Head>
              <meta name="description" content="سلام دوستان، من امیرحسین مبشری هستم و اینجا هم سایت شخصی منه که در اصل برای شماست :)
من در اینجا ضمن معرفی خودم، آموخته هام از زبان انگلیسی رو باهاتون به اشتراک می‌ذارم" />
              <meta name="robots" content="index, follow" />
              <meta name="googlebot" content="index, follow" />

              <meta name="og:title" content="English With Mobash | درباره من" />
              <meta name="og:description" content="سلام دوستان، من امیرحسین مبشری هستم و اینجا هم سایت شخصی منه که در اصل برای شماست :)
من در اینجا ضمن معرفی خودم، آموخته هام از زبان انگلیسی رو باهاتون به اشتراک می‌ذارم" />

              <title>English With Mobash | درباره من</title>
            </Head>
            <div className='pt-4'>
                <About />
            </div>
        </div>
    );
};

export default about;