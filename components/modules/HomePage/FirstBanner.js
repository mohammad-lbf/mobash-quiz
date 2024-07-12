import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Typer from '../Typed';

const FirstBanner = () => {
  return (
    <div className="pt-4 mt-0 mt-lg-4 mb-0 mb-lg-4 pb-0 pb-lg-4">
      <div className="container pt-2">
        <div className="row align-items-center justify-content-center">
          <div className="col-lg-6 col-12">
            <div className="pt-20">
              <div className="box-banner-4 text-center text-lg-end">
                <div className="banner-info">
                  <span style={{fontFamily:"Vazirmatn"}} className="text-sm-bold color-gray-600">Mobash Academy | آموزش زبان انگلیسی</span>
                  <br />
                  <h3 style={{fontFamily: "KalamehWeb-Bold" , fontSize:"30px" , color: "#03004e" , lineHeight:"55px"}} className="d-inline-block mt-10 mb-15 ">با آموزش‌های آکادمی مبش، با اعتماد به نفس و روان انگلیسی صحبت کنید!</h3>
                  <br />
                  <div className="box-socials">
                    <a rel='noreferrer' className="bg-gray-800 hover-up text-center pt-2" href=""><i class="bi bi-instagram text-white"></i></a>
                    <a rel='noreferrer' className="bg-gray-800 hover-up text-center pt-2" href=""><i class="bi bi-whatsapp text-white"></i></a>
                    <a rel='noreferrer' className="bg-gray-800 hover-up text-center pt-2" href=""><i class="bi bi-youtube text-white"></i></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='col-lg-6 col-12 mt-4 mt-lg-0'>
          <div className="box-banner-4 d-flex justify-content-center">
                <div className="banner-image">
                  <Image width={"211"} height={"211"} alt="first-banner-image" src={`/images/20220719_222926.jpg`} />
                </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FirstBanner;
