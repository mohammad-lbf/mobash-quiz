import React from 'react';
import Head from 'next/head';
import EvolveBooksPage from '../../components/templates/articles/EvolveBooksPage';
const EvolveBooks = () => {
    return (
        <div>
            <div className='pb-4'>
                <Head>
                    <meta name="description" content="انتشارات دانشگاه کمبریج ، یکی از پیشگامان عرصه آموزش زبان، در سال 2019 یکی از بهترین کتب آموزش زبان انگلیسی را با عنوان Evolve منتشر کرد.این کتاب با همکاری تیم بزرگی از نویسندگان، اساتید و مشاورین رسمی دانشگاه کمبریج تهیه شده است تا بتواند تمامی نیازهای دانشجویان در یادگیری زبان انگلیسی را برآورده کند." />
                    <meta name="robots" content="index, follow" />
                    <meta name="googlebot" content="index, follow" />
                    <meta name="og:title" content="Mobash Academy | آشنایی با کتاب های Evolve" />
                    <meta name="og:description" content="انتشارات دانشگاه کمبریج ، یکی از پیشگامان عرصه آموزش زبان، در سال 2019 یکی از بهترین کتب آموزش زبان انگلیسی را با عنوان Evolve منتشر کرد.این کتاب با همکاری تیم بزرگی از نویسندگان، اساتید و مشاورین رسمی دانشگاه کمبریج تهیه شده است تا بتواند تمامی نیازهای دانشجویان در یادگیری زبان انگلیسی را برآورده کند." />
                    <title>Mobash Academy | آشنایی با کتاب های Evolve</title>
                </Head>
                <EvolveBooksPage />
            </div>
        </div>
    );
};
export default EvolveBooks;
