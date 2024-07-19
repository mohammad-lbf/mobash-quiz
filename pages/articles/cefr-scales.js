import React from 'react';
import Head from 'next/head';
import CEFRScalesPage from '../../components/templates/articles/CEFRScalesPage';

const CefrScales = () => {
    return (
        <div>
            <div className='pb-4'>
                <Head>
                    <meta name="description" content="" />
                    <meta name="robots" content="index, follow" />
                    <meta name="googlebot" content="index, follow" />
                    <meta name="og:title" content="Mobash Academy | مقیاس های CEFR" />
                    <meta name="og:description" content="" />
                    <title>Mobash Academy | مقیاس های CEFR</title>
                </Head>
                <CEFRScalesPage />
            </div>
        </div>
    );
};

export default CefrScales;
