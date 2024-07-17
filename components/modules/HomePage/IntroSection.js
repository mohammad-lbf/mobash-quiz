import React from 'react';

const IntroSection = () => {
  return (
    <section className="intro-section section-block mt-4">
      <div className="wave-top">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,0V46.29c47.69,22.48,103.74,30.74,157.48,23.93C338,37,417,8,493,8s163,29,240,35,157-13,217-18c30.67-2.57,58.8-.3,87.1,3.57C1098.31,33.92,1149.49,45,1200,45V0Z" opacity=".25" className="shape-fill"></path>
          <path d="M0,0V15.81C47.69,22.48,103.74,30.74,157.48,23.93C338,37,417,8,493,8s163,29,240,35,157-13,217-18c30.67-2.57,58.8-.3,87.1,3.57C1098.31,33.92,1149.49,45,1200,45V0Z" opacity=".5" className="shape-fill"></path>
          <path d="M0,0V5.38C47.69,22.48,103.74,30.74,157.48,23.93C338,37,417,8,493,8s163,29,240,35,157-13,217-18c30.67-2.57,58.8-.3,87.1,3.57C1098.31,33.92,1149.49,45,1200,45V0Z" className="shape-fill"></path>
        </svg>
      </div>
      <div className="container py-4">
        <div className='row py-4 align-items-center justify-content-center'>
          <div className='col-12 col-lg-6'>
            <div className="text-center text-lg-end lh-lg">
              <p style={{fontSize:"30px", fontFamily:"KalamehWeb-Bold", color:"#fff"}} className="fs-2 fw-bold mb-4">
                Welcome to Mobash Academy
              </p>
              <p className="lh-lg fw-bold fs-2 mb-4 mb-lg-0" style={{fontSize:"28px", fontFamily:"KalamehWeb-Bold", color:"#e0e0e0"}}>
                مقصد نهایی شما برای تسلط بر زبان انگلیسی
              </p>
            </div>
          </div>
          <div className='col-12 col-md-6'>
            <video className='rounded w-100' controls>
              <source src="/videos/InShot_۲۰۲۳۰۸۰۲_۲۰۵۷۲۵۷۰۶.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
      <div className="wave-bottom">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.24C229.6,48.84,151.88,33.77,97.79,26.67c-35-4.52-65.38-4.51-97.76,0V120H1200V16.26c-41.41-7.87-83.15-14.57-125-20.44C869.77,2.78,795.2-5.27,721.25.74,617.75,8.8,512.89,39.06,405.65,47.53c-48.1,3.94-95.7,1.86-142.42-5.33C217.72,35.38,168.33,27.41,120,27.41c-60.69,0-113.44,9.55-168.61,16.83C-8.82,45.73-2.07,45.51,321.39,56.24Z" opacity=".25" className="shape-fill"></path>
          <path d="M0,120V16.26C41.41,8.39,83.15,1.69,125,4.74c133.48,8.48,262.14,51.56,395.23,63.21C618.25,84.34,706.54,63.23,793,49.42c69.17-10.98,139.38-22.29,209.53-15.16,36.11,3.64,72.07,11.34,107.61,22.05V120Z" opacity=".5" className="shape-fill"></path>
          <path d="M0,120V12.81c43.21,4.32,87.54,11.74,131.82,14.41C329.59,30.58,472.53,63.12,614,83.31c122.83,17.43,245.76,8.2,368.14-6.64C1032.12,66.94,1165,43.25,1200,37.86V120Z" className="shape-fill"></path>
        </svg>
      </div>
    </section>
  );
};

export default IntroSection;
