import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
const FirstBanner = () => {
    return (
<div className="">
        <div className='pt-4'>
            <div className='container'>
                <div className='row align-items-center align-items-lg-start justify-content-center pt-md-4'>
                    <div className='col-12 col-lg-6 text-center text-lg-end'>
                    <div className='d-flex flex-column justify-content-center justify-content-lg-start'>
                        <h3 style={{fontFamily:"KalamehWeb-Bold" , color:"#090736" , fontSize:"30px"}} className='pt-4 lh-lg'>دوره ها و کلاسهای آموزشی مبش آکادمی</h3>
                        <Image className='img-fluid rounded border d-lg-none' alt='courses-coverphoto' width={1305} height={683} src={'/images/courses/courses-banner.jpg'} />
                    </div>
                        <h3 style={{fontFamily:"KalamehWeb-Medium" , fontSize:"18px" , color:"#090736"}} className='mt-3'>یادگیری عمیق و سریع زبان انگلیسی</h3>
                        {/* <h3 style={{fontFamily:"KalamehWeb-Medium" , fontSize:"17px" , color:"#090736"}} className='mt-3'>تعیین سطح زبان چیست و دقیقا چه کاربردهایی دارد؟ </h3> */}
                            <p style={{fontFamily:"KalamehWeb-Medium" , fontSize:"17px" , color:"#000"}} className='text-center text-lg-end lh-lg my-3 border-bottom'>
                            با کلیک بر روی هر یک از دوره‌ها می‌توانید اطلاعات و جزئیات کامل آن دوره که شامل موضوعات, سرفصل‌ها, مدت زمان و نحوه ثبت نام می‌باشد را مشاهده کنید.
                            </p>
                            

                    </div>
                    <div className='col-12 col-lg-6 text-center text-lg-start'>
                    <Image className='img-fluid d-none d-lg-flex' alt='html-logo' width={1305} height={683} src={'/images/courses/courses-banner.jpg'} />
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default FirstBanner;