import React from 'react';
import {useState , useEffect} from 'react';
import { useSelector , useDispatch } from 'react-redux'
import Test from '../../../components/modules/Test/Test';
import testData from '../../../assets/Tests/Grammar/A2Level';
import Link from 'next/link';
import { useRouter } from 'next/router';
import TestAuthor from '../../../components/modules/grammar/TestAuthor'
import Signup from '../../../components/templates/Signup';
import Head from 'next/head';

const A2Level = () => {
    const{testName , testLevel , userStatus , passPoint , testTime , questions , categoryInp} = testData
    const dispatch = useDispatch();
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
                    <meta name="robots" content="noindex, nofollow" />
                    <meta name="googlebot" content="noindex, nofollow" />
                    <meta name="og:title" content="Mobash Academy | سطح A2 | آزمون تعیین سطح گرامر" />
                    <meta name="og:description" content="با استفاده از آزمون تعیین سطح گرامر در Mobash Academy ، شما می‌توانید سطح توانایی خود را در قواعد زبان انگلیسی ارزیابی کنید. این آزمون در شش سطح طبقه بندی شده است و موفقیت در هر سطح ، توانایی شما در آن سطح را نشان می‌دهد." />
                    <title>Mobash Academy | سطح A2 | آزمون تعیین سطح گرامر</title>
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

        <>
        <Head>
            <meta name="description" content="با استفاده از آزمون تعیین سطح گرامر در Mobash Academy ، شما می‌توانید سطح توانایی خود را در قواعد زبان انگلیسی ارزیابی کنید. این آزمون در شش سطح طبقه بندی شده است و موفقیت در هر سطح ، توانایی شما در آن سطح را نشان می‌دهد." />
            <meta name="robots" content="noindex, nofollow" />
            <meta name="googlebot" content="noindex, nofollow" />
            <meta name="og:title" content="Mobash Academy | سطح A2 | آزمون تعیین سطح گرامر" />
            <meta name="og:description" content="با استفاده از آزمون تعیین سطح گرامر در Mobash Academy ، شما می‌توانید سطح توانایی خود را در قواعد زبان انگلیسی ارزیابی کنید. این آزمون در شش سطح طبقه بندی شده است و موفقیت در هر سطح ، توانایی شما در آن سطح را نشان می‌دهد." />
            <title>Mobash Academy | سطح A2 | آزمون تعیین سطح گرامر</title>
        </Head>
        {localSign ?
        <div className='page-padding-tops'>
            <div className='pt-4 container'>
                    <div className='row pt-3 justify-content-center'>
                        <div className='col-12 pt-4 col-lg-8'>
                        <p 
                            style={{fontSize:"15px" , 
                                    color:"#474d52" ,lineHeight:"2em" , 
                                    textAlign:"center" , 
                                    fontFamily:"KalamehWeb-Medium"}} 
                            className='border-bottom pb-2 mb-2'>{categoryInp}</p>
                        <h3 id="#test-title"
                        style={{fontFamily:"KalamehWeb-Bold" , color: "#03004e" , fontSize: "26px"}}
                        className='text-center border-bottom py-3'>
                        {testName}
                        </h3>
                            <div className='d-flex justify-content-between align-items-center mt-3 border-bottom pb-3'>
                                <TestAuthor />
                                <span className='fw-bold gray-text-color'>30 خرداد 1403</span>
                            </div>
                            <div className='text-end'>
                            <h5 style={{fontSize:"24px",color:"#464749" , 
                                    fontFamily:"KalamehWeb-Bold" , }} 
                                    className='text-end my-4'>
                                    نکات آزمون:
                                </h5>
                                <p 
                                style={{fontSize:"15px" , 
                                color:"#474d52" ,lineHeight:"2em" , 
                                textAlign:"justify" , 
                                fontFamily:"KalamehWeb-Medium"}} 
                                className='border-bottom pb-2 mb-2'>
                                    1.	تعداد سوالات این سطح ۸ سوال و حداکثر مدت زمان پاسخگویی ۱۲ دقیقه خواهد بود.
                                </p>
                                <p style={{fontSize:"15px" , 
                                color:"#474d52" ,lineHeight:"2em" , 
                                textAlign:"justify" , 
                                fontFamily:"KalamehWeb-Medium"}} 
                                className='border-bottom pb-2 mb-2'>
                                2.	حداقل نمره قبولی در این مرحله 62.5 از 100 میباشد که معادل 5 پاسخ صحیح از مجموع 8 سوال میباشد.
                                </p>
                                <p style={{fontSize:"15px" , 
                                color:"#474d52" ,lineHeight:"2em" , 
                                textAlign:"justify" , 
                                fontFamily:"KalamehWeb-Medium"}} 
                                className='border-bottom pb-2 mb-2'>
                                    3.	با کسب نمره قبولی در این مرحله می‌توانید آزمون را در سطح بالاتر  (B1) ادامه دهید.</p>
                            </div> 
                        </div>
                    </div>
                <Test testData={testData}  />
            </div>
        </div>
        :   <Signup localSign={localSign} setLocalSign={setLocalSign} />}    
        </>
    );
};

export default A2Level;