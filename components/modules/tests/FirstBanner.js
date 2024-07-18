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
                        <h3 style={{fontFamily:"KalamehWeb-Bold" , color:"#090736" , fontSize:"30px"}} className='pt-4 lh-lg'>آزمون های تعیین سطح زبان انگلیسی مبش</h3>
                        <Image className='img-fluid rounded border d-lg-none' alt='html-logo' width={1305} height={683} src={'/images/tests/tests-banner.png'} />
                    </div>
                        <h3 style={{fontFamily:"KalamehWeb-Medium" , fontSize:"15px" , color:"#090736"}} className='mt-3'>به راحتی، از سطح دانش زبانی خود مطلع شوید!</h3>
                        <h3 style={{fontFamily:"KalamehWeb-Medium" , fontSize:"17px" , color:"#090736"}} className='mt-3'>تعیین سطح زبان چیست و دقیقا چه کاربردهایی دارد؟ </h3>
                            <p style={{fontFamily:"KalamehWeb-Regular" , fontSize:"16px" , color:"#000"}} className='text-center text-lg-end lh-lg my-3 border-bottom'>
                            هر فردی حتی با کمترین دانش زبانی، برای شروع یک دوره آموزشی استاندارد و هدفمند، در وهله اول باید یک آزمون تعیین سطح زبان را پشت سر بگذارد.  با گذراندن و شرکت در این آزمون، نه تنها خودتان متوجه میزان دانسته های زبانی خود میشوید، بلکه بهتر میتوانید تشخیص دهید در روند آموزش و یادگیری ، میبایست بیشتر روی کدام بخش ها تمرکز کنید.
                            </p>
                            

                    </div>
                    <div className='col-12 col-lg-6 text-center text-lg-start'>
                    <Image className='img-fluid d-none d-lg-flex' alt='html-logo' width={1305} height={683} src={'/images/tests/tests-banner.png'} />
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default FirstBanner;