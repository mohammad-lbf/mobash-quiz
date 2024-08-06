import React from 'react';
import ProfileCard from './InstagramCard';
import Image from 'next/image';
import Link from 'next/link';

const InstagramBanner = () => {
    return (
        <div  style={{borderRadius:"18px"}} className='bg-gray-850 border-gray-800 my-5 my-lg-5 py-4 py-lg-2'>
        <div className='container py-3'>
      <div className='row align-items-center justify-content-center justify-content-lg-end'>
          <div className='col-12 col-lg-8'>
            <div className='d-flex justify-content-center align-items-center justify-content-lg-start'>
            <h5 style={{fontFamily:"KalamehWeb-Bold" , color:"#000" , fontSize:"22px"}} className='text-center text-lg-end lh-lg mb-4 mb-lg-0'>همین امروز به جمع زبان آموزان با انگیزه ی ما در <Link style={{fontFamily:"KalamehWeb-Bold"}} href="https://instagram.com/english_with_mobash?igshid=MzNlNGNkZWQ4Mg==">اینستاگرام</Link> و <Link style={{fontFamily:"KalamehWeb-Bold"}} href="https://www.youtube.com/@English.with.Mobash">یوتیوب</Link> بپیوندید.</h5>
      </div>
          </div>
          <div className='col-12 col-lg-4 d-flex justify-content-center align-items-center'>
            {/* <ProfileCard /> */}
            <Image src="/images/youtube.webp" alt='YouTube-logo' width={1920} height={1920} style={{width:"120px" , height:"120px"}} />
            <Image src="/images/instagram.png" alt='Instagram-Logo' width={1920} height={1920} style={{width:"100px" , height:"100px"}} />
          </div>
      </div>
  </div>
  </div>
    );
};

export default InstagramBanner;