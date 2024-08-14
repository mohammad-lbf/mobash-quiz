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
                        <h3 style={{fontFamily:"KalamehWeb-Bold" , color:"#090736" , fontSize:"30px"}} className='pt-4 lh-lg'>مقالات آکادمی زبان انگلیسی مبش</h3>
                        <Image style={{borderRadius:"10px"}} className='img-fluid d-lg-none' alt='Articles-coverphoto' width={1305} height={683} src={'/images/articles/articles-banner.jpg'} />
                    </div>
                        <h3 style={{fontFamily:"KalamehWeb-Medium" , fontSize:"18px" , color:"#090736"}} className='mt-3'>قفل زبان انگلیسی را تنها می توان با مطالعه علمی در مورد آن باز کرد! </h3>
                        {/* <h3 style={{fontFamily:"KalamehWeb-Medium" , fontSize:"17px" , color:"#090736"}} className='mt-3'>تعیین سطح زبان چیست و دقیقا چه کاربردهایی دارد؟ </h3> */}
                            <p style={{fontFamily:"KalamehWeb-Medium" , fontSize:"17px" , color:"#000"}} className='text-center text-lg-end lh-lg my-3 border-bottom'>
                            ما در بخش مقالات تلاش میکنیم تا شما را با اصول علمی یادگیر ی زبان انگلیسی آشنا کرده و راز یادگیری آن را از طریق درکی
عمیق تر از مفهوم مطالعه و تمرین به شما بیاموزیم.
                            </p>
                            

                    </div>
                    <div className='col-12 col-lg-6 text-center text-lg-start'>
                    <Image style={{borderRadius:"10px"}} className='img-fluid d-none d-lg-flex' alt='html-logo' width={1305} height={683} src={'/images/articles/articles-banner.jpg'} />
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default FirstBanner;