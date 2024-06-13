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
              <meta name="description" content="در این صفحه، میتونید راه های ارتباط با من، امیرحسین مبشری، رو ببینید. از برقراری ارتباط با شما خوشحال میشم :)" />
              <meta name="robots" content="index, follow" />
              <meta name="googlebot" content="index, follow" />

              <meta name="og:title" content="English With Mobash | تماس با من" />
              <meta name="og:description" content="در این صفحه، میتونید راه های ارتباط با من، امیرحسین مبشری، رو ببینید. از برقراری ارتباط با شما خوشحال میشم :)" />

              <title>English With Mobash | تماس با من</title>
            </Head>
            <div className='pt-4'>
                <Call form={form} setForm={setForm} />
            </div>
        </div>
    );
};

export default CallPage;