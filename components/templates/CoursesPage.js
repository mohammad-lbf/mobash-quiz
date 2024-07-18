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
                        <Image className='img-fluid border rounded' src={"/images/courses/courses-second.jpg"} width={1080} height={1350} />
                        </div>
                        <div className='col-12 text-center text-lg-end col-lg-6'>
                        <h3 style={{fontFamily:"KalamehWeb-Medium" , fontSize:"20px" , color:"#090736"}} className=''>وقتی با دوره های آکادمی مبش زبان یاد می‌گیرید ...</h3>
                                        <p style={{fontFamily:"KalamehWeb-Bold" , fontSize:"16px" , color:"#000"}} className='text-center text-lg-end lh-lg mt-3 mb-2'>
                                        در زمان صرفه‌‌جویی می‌کنید:
                                        </p>
                                        <p style={{fontFamily:"KalamehWeb-Regular" , fontSize:"16px" , color:"#000"}} className='text-center text-lg-end lh-lg border-bottom pb-2'>
                                        چون نیازی نیست برای هر جلسه کلاس زبان، تایم زیادی برای رفت و آمد وقتتان تلف شود و به راحتی در گوشی یا لپتاپ خود به تمامی دروس و مطالب تکمیلی دسترسی دارید.
                                        </p>
                                        <p style={{fontFamily:"KalamehWeb-Bold" , fontSize:"16px" , color:"#000"}} className='text-center text-lg-end lh-lg mb-2 pt-2'>
                                        با برنامه‌ای دقیق ولی منعطف پیش می‌روید: 
                                        </p>
                                        <p style={{fontFamily:"KalamehWeb-Regular" , fontSize:"16px" , color:"#000"}} className='text-center text-lg-end lh-lg border-bottom pb-2'>
                                        چون برنامه دوره به نحوی طراحی شده‌است که هر هفته 6 درس از 92 جلسه نیم ساعته به همراه فایل‌های مکمل و تمرین در اختیارتان قرار می‌گیرد تا متناسب با شرایط خودتان یادگیری زبان را در برنامه‌تان بگنجانید.
                                        </p>
                                        <p style={{fontFamily:"KalamehWeb-Bold" , fontSize:"16px" , color:"#000"}} className='text-center text-lg-end lh-lg mb-2 pt-2'>
                                        با سبک زندگی خودتان زبان یاد می‌گیرید:
                                        </p>
                                        <p style={{fontFamily:"KalamehWeb-Regular" , fontSize:"16px" , color:"#000"}} className='text-center text-lg-end lh-lg border-bottom pb-2'>
                                        تمرین‌های آموزشی در دوره های آکادمی مبش طوری طراحی شده‌اند تا هر فرد متناسب با اتفاقات روزمره زندگی خود بتواند مطالب را مرور و تثبیت کند.
                                        </p>
                                        <p style={{fontFamily:"KalamehWeb-Bold" , fontSize:"16px" , color:"#000"}} className='text-center text-lg-end lh-lg mb-2 pt-2'>
                                        با هزینه منصفانه تا سطح پیشرفته زبان انگلیسی را فرا‌می‌گیرید:
                                        </p>
                                        <p style={{fontFamily:"KalamehWeb-Regular" , fontSize:"16px" , color:"#000"}} className='text-center text-lg-end lh-lg border-bottom pb-2'>
                                        چون در ازای 92 جلسه آموزش زبان به همراه فایل‌های مکمل و تمرین هر درس فقط مبلغی معادل دو ترم آموزش زبان در موسسات سنتی را پرداخت می‌کنید.
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