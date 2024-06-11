import React from 'react';

const IntroSection = () => {
  return (
    <section className="intro-section section-block py-4">
      <div className="container">
        <div className="section-title text-center ff-vazir">
          <h2 style={{width:"fit-content"}} className='d-flex flex-column flex-md-row justify-content-center my-3 py-1 mx-auto color-linear'>
            <span>به</span>
            <span className='mx-2 my-3 my-md-0'>English With Mobash</span>
            <span>خوش آمدید</span>
          </h2>
          
          <p className="lead mb-4">
          سلام دوستان، من امیرحسین مبشری هستم و اینجا هم سایت شخصی منه که در اصل برای شماست :)
            <br />
             من در اینجا ضمن معرفی خودم، آموخته هام از زبان انگلیسی رو باهاتون به اشتراک میذارم :)
          </p>
        </div>
        <div className='row justify-content-center'>
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
