import React from 'react';

const HomeAbout = () => {
  return (
    <section className="about-section py-3 p-lg-4 bg-gray-850 border-gray-800 section-block aos-init aos-animate" id="about-section" data-aos="fade-up">
      <div className="container">
        <div className="row flex-xl-row-reverse">
        <div className="col-xl-6 image-block aos-init aos-animate" data-aos="fade-right" data-aos-delay="200" data-aos-duration="2000">
            <div className="img-wrapper about-img-wrap" data-tilt="" data-tilt-max="10" style={{ transform: "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)", willChange: "transform" }}>
              {/* <img className="about-img-1 rounded img-fluid" src="/images/IMG_۲۰۲۳۰۸۲۷_۲۲۲۰۱۷.jpg" alt="about image" /> */}
              {/* <img className="about-img-2 img-fluid" src="image/about-image-2.png" alt="about image 2" /> */}
            </div>
          </div>
          <div className="col-xl-6 content-block text-end aos-init aos-animate" data-aos="fade-right" data-aos-delay="400" data-aos-duration="2000">
            <div style={{fontFamily:"Vazirmatn"}} className='d-flex flex-column align-items-center align-items-lg-start'>
                <span className='color-org-100 fs-5 mt-3 mt-lg-0'>
                    درباره من
                </span>
                <span className='fw-bold color-linear fs-2 py-3 mb-2 mt-4'>
                    امیرحسین مبشری
                </span>
                <span className='fw-bold color-linear fs-3 py-3 mb-4'>
                    مدرس تخصصی زبان انگلیسی
                </span>
            </div>
            <p className='homeabout-intro text-center text-lg-end' style={{lineHeight:"27px" , fontSize:"15px"}}>
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است
            </p>
            <p className='homeabout-intro text-center text-lg-end mt-3' style={{lineHeight:"27px" , fontSize:"15px"}}>
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است
            </p>
            <div className="personal-details row mb-3">
              <div className="col-md-6">
                <ul className="personal-info text-center text-lg-end">
                  <li>
                    <h4>نام و نام خانوادگی</h4>
                    <p>امیرحسین مبشری</p>
                  </li>
                  <li>
                    <h4>ایمیل</h4>
                    <p>example@gmail.com</p>
                  </li>
                  <li>
                    <h4>سن</h4>
                    <p>23 سال</p>
                  </li>
                </ul>
              </div>
              <div className="col-md-6">
                <ul className="personal-info text-center text-lg-end">
                  <li>
                    <h4>تحصیلات</h4>
                    <p>دانشجوی کارشناسی علوم تربیتی</p>
                  </li>
                  <li>
                    <h4>شغل</h4>
                    <p>دبیر</p>
                  </li>
                </ul>
              </div>
            </div>
            <div className='text-center mb-3 text-lg-end'>
                <a className="btn-org-1 text-white rounded px-3 py-2" href="" download >دانلود رزومه</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeAbout;
