import React from 'react';
import Head from 'next/head';
import GrammarPage from '../../../components/templates/GrammarPage';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Signup from '../../../components/templates/Signup';

const Grammar = () => {
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
            <>
                <Head>
                    <meta name="description" content="با استفاده از آزمون تعیین سطح گرامر در Mobash Academy ، شما می‌توانید سطح توانایی خود را در قواعد زبان انگلیسی ارزیابی کنید. این آزمون در شش سطح طبقه بندی شده است و موفقیت در هر سطح ، توانایی شما در آن سطح را نشان می‌دهد." />
                    <meta name="robots" content="index, follow" />
                    <meta name="googlebot" content="index, follow" />
                    <meta name="og:title" content="Mobash Academy | آزمون تعیین سطح گرامر" />
                    <meta name="og:description" content="با استفاده از آزمون تعیین سطح گرامر در Mobash Academy ، شما می‌توانید سطح توانایی خود را در قواعد زبان انگلیسی ارزیابی کنید. این آزمون در شش سطح طبقه بندی شده است و موفقیت در هر سطح ، توانایی شما در آن سطح را نشان می‌دهد." />
                    <title>Mobash Academy | آزمون تعیین سطح گرامر</title>
                </Head>
                <div className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
                    <div className="spinner-border" role="status">
                        <span className="sr-only"></span>
                    </div>
                </div>
            </>
        );
    }

    return (
        <div>
            <div className='pb-4'>
                <Head>
                    <meta name="description" content="با استفاده از آزمون تعیین سطح گرامر در Mobash Academy ، شما می‌توانید سطح توانایی خود را در قواعد زبان انگلیسی ارزیابی کنید. این آزمون در شش سطح طبقه بندی شده است و موفقیت در هر سطح ، توانایی شما در آن سطح را نشان می‌دهد." />
                    <meta name="robots" content="index, follow" />
                    <meta name="googlebot" content="index, follow" />
                    <meta name="og:title" content="Mobash Academy | آزمون تعیین سطح گرامر" />
                    <meta name="og:description" content="با استفاده از آزمون تعیین سطح گرامر در Mobash Academy ، شما می‌توانید سطح توانایی خود را در قواعد زبان انگلیسی ارزیابی کنید. این آزمون در شش سطح طبقه بندی شده است و موفقیت در هر سطح ، توانایی شما در آن سطح را نشان می‌دهد." />
                    <title>Mobash Academy | آزمون تعیین سطح گرامر</title>
                </Head>
                {localSign ? <GrammarPage /> : <Signup localSign={localSign} setLocalSign={setLocalSign} />}
            </div>
        </div>
    );
};

export default Grammar;
