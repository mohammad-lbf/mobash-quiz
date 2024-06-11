import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Typer from '../Typed';

const FirstBanner = () => {
  return (
    <div className="banner banner-home4 bg-gray-850">
      <div className="container">
        <div className="row align-items-start">
          <div className="col-xl-1"></div>
          <div className="col-xl-10 col-lg-12">
            <div className="pt-20">
              <div className="box-banner-4 text-center text-lg-end">
                <div className="banner-image d-flex justify-content-center">
                  <Image className='ms-lg-5' width={"211"} height={"211"} alt="first-banner-image" src={`/images/20220719_222926.jpg`} />
                </div>
                <div className="banner-info">
                  <span style={{fontFamily:"Vazirmatn"}} className="text-sm-bold color-gray-600">English With Mobash | آموزش زبان انگلیسی</span>
                  <br />
                  <h3 className="color-linear d-inline-block mt-10 mb-15 fs-2"><Typer /></h3>
                  <br />
                  <div className="box-socials">
                    <a rel='noreferrer' className="bg-gray-800 hover-up text-center pt-2" href=""><i class="bi bi-instagram text-white"></i></a>
                    <a rel='noreferrer' className="bg-gray-800 hover-up text-center pt-2" href="mailto:"><i class="bi bi-envelope-fill text-white"></i></a>
                    <a rel='noreferrer' className="bg-gray-800 hover-up text-center pt-2" href=""><i class="bi bi-youtube text-white"></i></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FirstBanner;
