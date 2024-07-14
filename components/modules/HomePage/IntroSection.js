import React from 'react';

const IntroSection = () => {
  return (
    <section className="intro-section section-block">
      <div className="container">
        <div className='row align-items-start justify-content-center'>
              <div className='col-12 col-lg-6'>
              <div className="text-center text-lg-end ff-vazir">
          <h2 style={{width:"fit-content"}} className='text-center text-lg-end my-3 py-1 w-100 color-linear'>
            <span className='my-3 my-md-0 w-100 text-center text-lg-end'>Mobash Academy</span>
          </h2> 
          <p className="lead lh-lg fs-4 fw-bold mb-4 ">
              Welcome to Mobash Academy
          </p>
          <p className="lead lh-lg fs-4 fw-bold mb-4 ">
              مقصد نهایی شما برای تسلط بر زبان انگلیسی
          </p>
        </div>
              </div>
              <div className='col-12 col-md-6 '>
            <video className='rounded w-100' controls>
              <source src="/videos/InShot_۲۰۲۳۰۸۰۲_۲۰۵۷۲۵۷۰۶.mp4" type="video/mp4" />
        </video>
            </div>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;
