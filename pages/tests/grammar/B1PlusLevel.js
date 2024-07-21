import React from 'react';
import {useState , useEffect} from 'react';
import { useSelector , useDispatch } from 'react-redux'
import Test from '../../../components/modules/Test/Test';
import testData from '../../../assets/Tests/Grammar/B1PlusLevel';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Head from 'next/head';
import TestAuthor from '../../../components/modules/grammar/TestAuthor'
const B1PlusLevel = () => {
    const{testName , testLevel , userStatus , passPoint , testTime , questions , categoryInp} = testData

    return (
        <div className='page-padding-tops'>
                            <Head>
                    <meta name="description" content="با استفاده از آزمون تعیین سطح گرامر در Mobash Academy ، شما می‌توانید سطح توانایی خود را در قواعد زبان انگلیسی ارزیابی کنید. این آزمون در شش سطح طبقه بندی شده است و موفقیت در هر سطح ، توانایی شما در آن سطح را نشان می‌دهد." />
                    <meta name="robots" content="noindex, nofollow" />
                    <meta name="googlebot" content="noindex, nofollow" />
                    <meta name="og:title" content="Mobash Academy | سطح B1Plus | آزمون تعیین سطح گرامر" />
                    <meta name="og:description" content="با استفاده از آزمون تعیین سطح گرامر در Mobash Academy ، شما می‌توانید سطح توانایی خود را در قواعد زبان انگلیسی ارزیابی کنید. این آزمون در شش سطح طبقه بندی شده است و موفقیت در هر سطح ، توانایی شما در آن سطح را نشان می‌دهد." />
                    <title>Mobash Academy | سطح B1Plus | آزمون تعیین سطح گرامر</title>
                </Head>
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
                        style={{fontFamily:"KalamehWeb-Bold" , color: "#03004e" , fontSize: "24px"}}
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
                                    1.	تعداد سوالات این بخش در هر سطح ۹ سوال و حداکثر مدت زمان پاسخگویی ۱۵ دقیقه خواهد بود.</p>
                                    <p 
                                style={{fontSize:"15px" , 
                                color:"#474d52" ,lineHeight:"2em" , 
                                textAlign:"justify" , 
                                fontFamily:"KalamehWeb-Medium"}} 
                                className='border-bottom pb-2 mb-2'>

                                2.	حداقل نمره قبولی در این مرحله 66.6 از 100 میباشد که معادل 6 پاسخ صحیح از مجموع 9 سوال میباشد.
                                </p>
                                <p 
                                style={{fontSize:"15px" , 
                                color:"#474d52" ,lineHeight:"2em" , 
                                textAlign:"justify" , 
                                fontFamily:"KalamehWeb-Medium"}} 
                                className='border-bottom pb-2 mb-2'>
                                    3.	با کسب نمره قبولی در این مرحله می‌توانید آزمون را در سطح بالاتر  (B2) ادامه دهید.</p>
                            </div> 
                        </div>
                    </div>
                <Test testData={testData}  />
            </div>
        </div>
    );
};

export default B1PlusLevel;