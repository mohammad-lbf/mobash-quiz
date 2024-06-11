import Head from 'next/head';
import React, { useState } from 'react';
import Call from '../components/templates/Call';

const CallPage = () => {

    const [form , setForm] = useState({
        name:"",
        email:"",
        phoneNumber:"",
        subject:[],
        messageContent:""
    })
    return (
        <div className='page-padding-tops'>
            <Head>
              <meta name="description" content="در این صفحه میتونید علاوه بر مشاهده ی راه های ارتباطی، نسبت به ارسال پیام نیز اقدام کنید" />
              <meta name="robots" content="index, follow" />
              <meta name="googlebot" content="index, follow" />

              <meta name="og:title" content="Codinglbf | تماس با ما" />
              <meta name="og:description" content="در این صفحه میتونید علاوه بر مشاهده ی راه های ارتباطی، نسبت به ارسال پیام نیز اقدام کنید" />

              <title>Codinglbf | تماس با ما</title>
            </Head>
            <div className='pt-4'>
                <Call form={form} setForm={setForm} />
            </div>
        </div>
    );
};

export default CallPage;