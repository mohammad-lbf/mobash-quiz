import React from 'react';
import FirstBanner from '../modules/courses/FirstBanner';
import Link from 'next/link'
import CoursesSection from '../modules/courses/CoursesSection';
import Image from 'next/image';

const CoursesPage = () => {
    return (
        <div>
            <FirstBanner />
            <div style={{paddingTop:"15px"}} className='container'>
                <div className='row flex-lg-row-reverse justify-content-center align-items-center'>
                    <div className='col-12 col-lg-12 weblog__articles'>
                        {/* <TestsSection /> */}
                        <div className='col-12 text-center'>
                        <CoursesSection />
                        </div>
                        <div className='row justify-content-between flex-lg-row-reverse align-items-start mt-4 pt-4'>

                        <div className='col-12 col-lg-4'>
                        <Image alt="courses-image-2" className='img-fluid border rounded' src={"/images/courses/courses-second.jpg"} width={1080} height={1350} />
                        </div>
                        <div className='col-12 text-center text-lg-end col-lg-6'>
                        <h3 style={{fontFamily:"KalamehWeb-Medium" , fontSize:"20px" , color:"#090736"}} className=''>وقتی با دوره های آکادمی مبش زبان یاد می‌گیرید ...</h3>
                                        <p style={{fontFamily:"KalamehWeb-Bold" , fontSize:"16px" , color:"#000"}} className='text-center text-lg-end lh-lg mt-3 mb-2'>
                                        در زمان صرفه‌‌جویی می‌کنید:
                                        </p>
                                        <p style={{fontFamily:"KalamehWeb-Regular" , fontSize:"16px" , color:"#000"}} className='text-center text-lg-end lh-lg border-bottom pb-2'>
                                        چون نیازی نیست برای هر جلسه کلاس زبان، تایم زیادی برای رفت و آمد تلف شود بلکه میتوانید براحتی و در هر مکانی در کلاس شرکت کنید
                                        </p>
                                        <p style={{fontFamily:"KalamehWeb-Bold" , fontSize:"16px" , color:"#000"}} className='text-center text-lg-end lh-lg mb-2 pt-2'>
                                        پشتیبانی دریافت می کنید:
                                        </p>
                                        <p style={{fontFamily:"KalamehWeb-Regular" , fontSize:"16px" , color:"#000"}} className='text-center text-lg-end lh-lg border-bottom pb-2'>
                                        تا اطمینان حاصل کنید همیشه افرادی هستند که شما را در مسیر یادگیری همراهی کرده و به پیشرفت شما کمک کنند
                                        </p>
                                        <p style={{fontFamily:"KalamehWeb-Bold" , fontSize:"16px" , color:"#000"}} className='text-center text-lg-end lh-lg mb-2 pt-2'>
                                        با منابع معتبر آموزش می بینید:
                                        </p>
                                        <p style={{fontFamily:"KalamehWeb-Regular" , fontSize:"16px" , color:"#000"}} className='text-center text-lg-end lh-lg border-bottom pb-2'>
                                        تا اطمینان حاصل کنید از بروزترین منابع و رویکردهای آموزشی زبان انگلیسی بهره مند میگردید. 
                                        </p>
                                        <p style={{fontFamily:"KalamehWeb-Bold" , fontSize:"16px" , color:"#000"}} className='text-center text-lg-end lh-lg mb-2 pt-2'>
                                        به امکانات ویژه دسترسی دارید:
                                        </p>
                                        <p style={{fontFamily:"KalamehWeb-Regular" , fontSize:"16px" , color:"#000"}} className='text-center text-lg-end lh-lg border-bottom pb-2'>
                                        تا از انواع کلاس های آنلاین, فیلم‌ها, پادکست‌ها و لایو های آموزشی استفاده کنید و به جلسات آموزشی یوتیوب نیز دسترسی یابید. 
                                        </p>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
    );
};

export default CoursesPage;