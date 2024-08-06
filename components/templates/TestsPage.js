import React from 'react';
import TestsSection from '../modules/tests/TestsSection';
import Authors from '../modules/tests/Authors';
import FirstBanner from '../modules/tests/FirstBanner';
import Link from 'next/link'
import Image from 'next/image';

const TestsPage = () => {
    return (
        <div>
            <FirstBanner />
            <div style={{paddingTop:"15px"}} className='container'>
                <div className='row flex-lg-row-reverse justify-content-center align-items-center'>
                    <div className='col-12 col-lg-12 weblog__articles'>
                        <TestsSection />
                        <div className='row align-items-center'>
                        <div className='col-12 col-lg-6 text-end'>
                        <h3 style={{fontFamily:"KalamehWeb-Medium" , fontSize:"18px" , color:"#090736"}} className='mt-3'>آزمون‌های تعیین سطح زبان انگلیسی در سه سطح برگزار می‌شوند:</h3>
                                        <p style={{fontFamily:"KalamehWeb-Bold" , fontSize:"16px" , color:"#000"}} className='text-end text-lg- lh-lg mt-3 mb-2'>
                                        <span style={{fontFamily:"KalamehWeb-Bold"}}>سطح مبتدی</span> <span style={{fontFamily:"KalamehWeb-Bold"}}>(Elementary)</span>
                                        </p>
                                        <p style={{fontFamily:"KalamehWeb-Regular" , fontSize:"16px" , color:"#000"}} className='text-end text-lg- lh-lg border-bottom pb-2'>
                                            این سطح که شامل دو بخش A1 و A2 می‌باشد برای افرادی مناسب است که به تازگی یادگیری زبان انگلیسی را شروع کرده اند
                                        </p>
                                        <p style={{fontFamily:"KalamehWeb-Bold" , fontSize:"16px" , color:"#000"}} className='text-end text-lg- lh-lg mb-2 pt-2'>
                                        <span style={{fontFamily:"KalamehWeb-Bold"}}>سطح متوسط</span> <span style={{fontFamily:"KalamehWeb-Bold"}}>(Intermediate)</span>
                                        </p>
                                        <p style={{fontFamily:"KalamehWeb-Regular" , fontSize:"16px" , color:"#000"}} className='text-end text-lg- lh-lg border-bottom pb-2'>
                                            این سطح که شامل دو بخش B1 و B2 می‌باشد برای افرادی مناسب است که دانش زبانی نسبتا متوسطی دارند و با مفاهیم اولیه زبان به خوبی آشنا شده اند
                                        </p>
                                        <p style={{fontFamily:"KalamehWeb-Bold" , fontSize:"16px" , color:"#000"}} className='text-end text-lg- lh-lg mb-2 pt-2'>
                                        <span style={{fontFamily:"KalamehWeb-Bold"}}>سطح پیشرفته</span> <span style={{fontFamily:"KalamehWeb-Bold"}}>(Advance)</span> 
                                        </p>
                                        <p style={{fontFamily:"KalamehWeb-Regular" , fontSize:"16px" , color:"#000"}} className='text-end text-lg- lh-lg border-bottom pb-2'>
                                        این سطح که شامل دو بخش C1 و C2 می‌باشد برای افرادی مناسب است که سطح زبان انگلیسی بالایی دارند
                                        </p>
                                        <Image className='img-fluid d-lg-none' src="/images/tests/levels.png" width={818} height={615} />
                                        <div className='border-bottom text-center py-2'>
                                        <p style={{fontFamily:"KalamehWeb-Medium" , fontSize:"16px" , color:"#000"}} className='text-center lh-lg pb-4'>
                                        آزمون های آکادمی مبش بر مبنای مقیاس CEFR و بادقت بسیاربالا طراحی شده اند تا بتوانند به تعیین دقیق سطح زبانی شما کمک کنند.
                                        </p>
                                        <Link style={{fontFamily:"KalamehWeb-Medium" , fontSize:"16px"}} className='text-primary fw-bold text-center' href={"/articles/cefr-scales"}>برای آشنایی با مقیاس CEFR کلیک کنید</Link>
                                        </div>
                        </div>
                        <div className='col-12 col-lg-6'>
                                <Image className='img-fluid d-none d-lg-block' src="/images/tests/levels.png" width={818} height={615} />
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TestsPage;