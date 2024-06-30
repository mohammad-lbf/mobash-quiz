import React from 'react';
import {useState , useEffect} from 'react';
import { useSelector , useDispatch } from 'react-redux'
import Test from '../../../components/modules/Test/Test';
import testData from '../../../assets/Tests/Grammar/B1Level';
import Link from 'next/link';
import { useRouter } from 'next/router';

import TestAuthor from '../../../components/modules/grammar/TestAuthor'
const B1Level = () => {
    const{testName , testLevel , userStatus , passPoint , testTime , questions , categoryInp} = testData
    const dispatch = useDispatch();
    const router = useRouter();
    
    useEffect(() => {
        if (typeof window !== 'undefined') {
          const storedUserName = localStorage.getItem('userName');
          if (!storedUserName) {
            router.push('/signup'); // جایگزین '/signup' با مسیر صفحه ثبت نام خود کنید
          }
        }
      }, []);

    return (
        <div className='page-padding-tops'>
            <div className='pt-4 container'>
                    <div className='row pt-3 justify-content-center'>
                        <div className='col-12 pt-4 col-lg-8'>
                        <p className="article-section__title mb-3 text-center">{categoryInp}</p>
                        <p id="#test-title" className="article-section__title fs-3 fw-bold mt-3 text-center">{testName}</p>
                            <div className='d-flex justify-content-between align-items-center mt-3 border-bottom pb-3'>
                                <TestAuthor />
                                <span className='fw-bold gray-text-color'>30 خرداد 1403</span>
                            </div>
                            <div className='text-end'>
                                <h5 className='mt-3'>
                                    نکات آزمون:
                                </h5>
                                <p className='text-black lh-lg my-2'>1.	تعداد سوالات این بخش در هر سطح ۹ سوال و حداکثر مدت زمان پاسخگویی ۱۵ دقیقه خواهد بود.</p>
                                <p className='text-black lh-lg my-2'>
                                2.	حداقل نمره قبولی در این مرحله 66.6 از 100 میباشد که معادل 6 پاسخ صحیح از مجموع 9 سوال میباشد.
                                </p>
                                <p className='text-black lh-lg my-2'>3.	با کسب نمره قبولی در این مرحله می‌توانید آزمون را در سطح بالاتر  (B1 plus) ادامه دهید.</p>
                            </div> 
                        </div>
                    </div>
                <Test testData={testData}  />
            </div>
        </div>
    );
};

export default B1Level;