import React from 'react';
import Head from 'next/head';
import EvolveBooksPage from '../../components/templates/articles/EvolveBooksPage';
const EvolveBooks = () => {
    return (
        <div>
            <div className='pb-4'>
                <Head>
                    <meta name="description" content="" />
                    <meta name="robots" content="index, follow" />
                    <meta name="googlebot" content="index, follow" />
                    <meta name="og:title" content="Mobash Academy | آشنایی با کتاب های Evolve" />
                    <meta name="og:description" content="" />
                    <title>Mobash Academy | آشنایی با کتاب های Evolve</title>
                </Head>
                <EvolveBooksPage />
            </div>
        </div>
    );
};
export default EvolveBooks;
