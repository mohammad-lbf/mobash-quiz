import React from 'react';
import Head from 'next/head';
import PublicPage from '../../../components/templates/PublicPage';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Signup from '../../../components/templates/Signup';

const Public = () => {
    const router = useRouter();
    const [localSign, setLocalSign] = useState(false);
    const [isChecking, setIsChecking] = useState(true); // حالت اولیه برای بررسی

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const storedUserName = localStorage.getItem('userName');
            if (storedUserName) {
                setLocalSign(true);
            }
            setIsChecking(false); // بعد از بررسی وضعیت، مقدار حالت را به false تغییر می‌دهیم
        }
    }, []);

    if (isChecking) {
        return (
            <div className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
                <div className="spinner-border" role="status">
                    <span className="sr-only"></span>
                </div>
            </div>
        );
    }

    return (
        <div>
            <div className='pb-4'>
                <Head>
                    <meta name="description" content="این آزمون به بررسی چهار مهارت اصلی: Grammar, Listening, Reading, vocabulary میپردازد و برای شرکت در دوره های ترمیک کاربرد دارد." />
                    <meta name="robots" content="index, follow" />
                    <meta name="googlebot" content="index, follow" />

                    <meta name="og:title" content="Mobash Academy | آزمون تعیین سطح عمومی" />
                    <meta name="og:description" content="این آزمون به بررسی چهار مهارت اصلی: Grammar, Listening, Reading, vocabulary میپردازد و برای شرکت در دوره های ترمیک کاربرد دارد." />

                    <title>Mobash Academy | آزمون تعیین سطح عمومی</title>
                </Head>
                {localSign ? <PublicPage /> : <Signup localSign={localSign} setLocalSign={setLocalSign} />}
            </div>
        </div>
    );
};

export default Public;
