import React from 'react';
import Head from 'next/head';
import CEFRScalesPage from '../../components/templates/articles/CEFRScalesPage';

const CefrScales = () => {
    return (
        <div>
            <div className='pb-4'>
                <Head>
                    <meta name="description" content="استاندارد CEFR در سطح بندی زبان انگلیسی، مخفف Common European Framework of Reference for Languages است. یک استاندارد اروپایی برای زبان انگلیسی که به عنوان مهم‌ترین و رایج‌ترین استاندارد انگلیسی در دنیا مطرح است." />
                    <meta name="robots" content="index, follow" />
                    <meta name="googlebot" content="index, follow" />
                    <meta name="og:title" content="Mobash Academy | مقیاس CEFR" />
                    <meta name="og:description" content="استاندارد CEFR در سطح بندی زبان انگلیسی، مخفف Common European Framework of Reference for Languages است. یک استاندارد اروپایی برای زبان انگلیسی که به عنوان مهم‌ترین و رایج‌ترین استاندارد انگلیسی در دنیا مطرح است." />
                    <title>Mobash Academy | مقیاس CEFR</title>
                </Head>
                <CEFRScalesPage />
            </div>
        </div>
    );
};

export default CefrScales;
