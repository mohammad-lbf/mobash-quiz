import Head from 'next/head';
import React from 'react';
import About from '../components/templates/About';

const about = () => {
    return (
        <div className='page-padding-tops'>
            <Head>
              <meta name="description" content=" من برنامه نویس وب (Fullstack - next js) هستم که نزدیک به دو سالی میشه که به این کار مشغولم و همچنین به یادگیری فناوری و تکنولوژی های جدید ، بسیار علاقه مندم" />
              <meta name="robots" content="index, follow" />
              <meta name="googlebot" content="index, follow" />

              <meta name="og:title" content="Codinglbf | درباره من" />
              <meta name="og:description" content=" من برنامه نویس وب (Fullstack - next js) هستم که نزدیک به دو سالی میشه که به این کار مشغولم و همچنین به یادگیری فناوری و تکنولوژی های جدید ، بسیار علاقه مندم" />

              <title>Codinglbf | درباره من</title>
            </Head>
            <div className='pt-4'>
                <About />
            </div>
        </div>
    );
};

export default about;