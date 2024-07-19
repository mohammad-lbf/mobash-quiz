import React from 'react';
import TestsSection from '../modules/tests/TestsSection';
import Authors from '../modules/tests/Authors';
import FirstBanner from '../modules/tests/FirstBanner';
import Link from 'next/link'

const TestsPage = () => {
    return (
        <div>
            <FirstBanner />
            <div style={{paddingTop:"15px"}} className='container'>
                <div className='row flex-lg-row-reverse justify-content-center align-items-center'>
                    <div className='col-12 col-lg-12 weblog__articles'>
                        <TestsSection />
                        <div className='col-12 text-center'>
                        <h3 style={{fontFamily:"KalamehWeb-Medium" , fontSize:"18px" , color:"#090736"}} className='mt-3'>آزمون‌های تعیین سطح زبان انگلیسی معمولاً در سه سطح کلی دسته بندی و برگزار می‌شوند:</h3>
                                        <p style={{fontFamily:"KalamehWeb-Bold" , fontSize:"16px" , color:"#000"}} className='text-center text-lg- lh-lg mt-3 mb-2'>
                                        1.	سطح مبتدی (Elementary):
                                        </p>
                                        <p style={{fontFamily:"KalamehWeb-Regular" , fontSize:"16px" , color:"#000"}} className='text-center text-lg- lh-lg border-bottom pb-2'>
                                        این سطح برای افرادی مناسب است که به تازگی شروع به یادگیری زبان انگلیسی کرده‌اند.
                                        </p>
                                        <p style={{fontFamily:"KalamehWeb-Bold" , fontSize:"16px" , color:"#000"}} className='text-center text-lg- lh-lg mb-2 pt-2'>
                                        2.	سطح متوسط(Intermediate): 
                                        </p>
                                        <p style={{fontFamily:"KalamehWeb-Regular" , fontSize:"16px" , color:"#000"}} className='text-center text-lg- lh-lg border-bottom pb-2'>
                                        این سطح برای افرادی مناسب است که دانش زبانی نسبتا متوسطی دارند و با مفاهیم زبان به خوبی آشنایی دارند.
                                        </p>
                                        <p style={{fontFamily:"KalamehWeb-Bold" , fontSize:"16px" , color:"#000"}} className='text-center text-lg- lh-lg mb-2 pt-2'>
                                        3.	سطح پیشرفته(Advanced): 
                                        </p>
                                        <p style={{fontFamily:"KalamehWeb-Regular" , fontSize:"16px" , color:"#000"}} className='text-center text-lg- lh-lg border-bottom pb-2'>
                                        این سطح برای افرادی مناسب است که سطح زبان انگلیسی بالایی دارند.
                                        </p>
                                        <div className='border-bottom text-center py-2 text-lg-'>
                                        <p style={{fontFamily:"KalamehWeb-Medium" , fontSize:"16px" , color:"#000"}} className='text-center text-lg- lh-lg pb-4'>
                                        آزمون های آکادمی مبش بر مبنای مقیاس CEFR و بادقت بسیاربالا طراحی شده اند تا بتوانند به تعیین دقیق سطح زبانی شما کمک کنند.
                                        </p>
                                        <Link style={{fontFamily:"KalamehWeb-Medium" , fontSize:"16px"}} className='text-primary fw-bold' href={"/articles/cefr-scales"}>برای آشنایی با مقیاس CEFR کلیک کنید</Link>
                                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TestsPage;