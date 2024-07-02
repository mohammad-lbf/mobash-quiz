import React from 'react';
import {useState , useEffect} from 'react';
import { useSelector , useDispatch } from 'react-redux'
import Test from '../../../components/modules/Test/Test';
import testData from '../../../assets/Tests/Grammar/C1Level';
import Link from 'next/link';
import { useRouter } from 'next/router';

import TestAuthor from '../../../components/modules/grammar/TestAuthor'
const C1Level = () => {
    const{testName , testLevel , userStatus , passPoint , testTime , questions , categoryInp} = testData

    return (
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
                                    1.	تعداد سوالات این بخش در هر سطح ۱۰  سوال و حداکثر مدت زمان پاسخگویی ۱۵ دقیقه خواهد بود.</p>
                            <p 
                                style={{fontSize:"15px" , 
                                color:"#474d52" ,lineHeight:"2em" , 
                                textAlign:"justify" , 
                                fontFamily:"KalamehWeb-Medium"}} 
                                className='border-bottom pb-2 mb-2'>
                                2.	حداقل نمره قبولی در این مرحله 60 از 100 میباشد که معادل 6 پاسخ صحیح از مجموع 10 سوال میباشد.
                                </p>
                            </div> 
                        </div>
                    </div>
                <Test testData={testData}  />
            </div>
        </div>
    );
};

export default C1Level;