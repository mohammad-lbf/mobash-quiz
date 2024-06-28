import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
const InstagramBanner = () => {
    return (
        <div  style={{borderRadius:"18px"}} className='bg-gray-850 border-gray-800 my-3 my-lg-5 py-3'>
        <div className='container py-3'>
      <div className='row flex-row-reverse align-items-center justify-content-center'>
          <div className='col-12 col-lg-7 col-xxl-6'>
            <div className='d-flex flex-column justify-content-center justify-content-lg-end'>
            <h5 style={{fontFamily:"Vazirmatn"}} className='text-center text-lg-end lh-lg article-section__title mb-2 mb-lg-0'>برای دیدن آموزش های رایگان ما در اینستاگرام، <Link href={"/"}>اینجا</Link> کلیک کنید</h5>
      </div>
          </div>
          <div className='col-12 col-lg-3 text-center text-lg-start'>
          <Image className='' alt='site-templates' style={{width:"150px" , height:"150px"}} width={200} height={200} src={'/images/instagram.webp'} />
          </div>
      </div>
  </div>
  </div>
    );
};

export default InstagramBanner;