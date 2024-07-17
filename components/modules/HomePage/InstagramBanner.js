import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ProfileCard from './InstagramCard';
const InstagramBanner = () => {
    return (
        <div  style={{borderRadius:"18px" , background: "linear-gradient(270deg, #BA68C8, #F06292, #FFD54F)"}} className='bg-gray-850 border-gray-800 my-5 my-lg-5 py-4 py-lg-2'>
        <div className='container py-3'>
      <div className='row align-items-center justify-content-center justify-content-lg-end'>
          {/* <Image className='' alt='site-templates' style={{width:"150px" , height:"150px"}} width={200} height={200} src={'/images/instagram.webp'} /> */}
          <div className='col-12 col-lg-8'>
            <div className='d-flex justify-content-center align-items-center justify-content-lg-start'>
            <h5 style={{fontFamily:"KalamehWeb-Bold" , color:"#fff" , fontSize:"22px"}} className='text-center text-lg-end lh-lg mb-4 mb-lg-0'>برای دیدن آموزش های رایگان ما در اینستاگرام، <a style={{fontFamily:"KalamehWeb-Bold" , color:"blue"}} rel="noreferrer" href="https://instagram.com/english_with_mobash?igshid=MzNlNGNkZWQ4Mg==">اینجا</a> کلیک کنید</h5>
      </div>
          </div>
          <div className='col-12 col-lg-4 d-flex justify-content-center'>
            <ProfileCard />
          </div>
      </div>
  </div>
  </div>
    );
};

export default InstagramBanner;