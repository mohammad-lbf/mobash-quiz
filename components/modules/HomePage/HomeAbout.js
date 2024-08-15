import Image from 'next/image';
import React from 'react';
import Call from '../../templates/Call';

const HomeAbout = () => {
  return (
    <section className="about-section my-3 py-3 p-lg-4 border-gray-800 section-block aos-init aos-animate" id="about-section" data-aos="fade-up">
      <div className="container">
            <div className='d-flex flex-column align-items-center'>
                <span style={{fontFamily:"KalamehWeb-Bold" , color:"#090736" , fontSize:"30px"}} className='fw-bold pt-3 mb-3'>
                    امیرحسین مبشری
                </span>
                <span style={{fontFamily:"KalamehWeb-Bold" , color:"#090736" , fontSize:"25px"}}  className='fw-bold color-linear py-3 mb-4'>
                    مدرس زبان انگلیسی
                </span>
            </div>
        <div className="row mb-4 flex-md-row justify-content-center justify-content-lg-between align-items-center">
        <div className="col-md-5 d-none d-md-block">
          <Image alt='author-image' className='img-fluid' src={"/images/about-1.png"} width={1080} height={1350} />
          </div>
          <div className="col-md-6 content-block text-end aos-init aos-animate" data-aos="fade-right" data-aos-delay="400" data-aos-duration="2000">
            <Image alt='author-image' className='img-fluid  d-md-none' src={"/images/about-1.png"} width={1080} height={1350} />
            <p className='text-start text-black fw-bold mb-2 mt-4 mt-lg-0' style={{lineHeight:"27px" , fontFamily:"Arial" , fontSize:"30px" , direction:"ltr"}}>
            Hey you!
            </p>
            <p className='text-start text-black fw-bold py-2' style={{direction:"ltr", lineHeight:"27px" , fontFamily:"Arial" , fontSize:"15px"}}>
            My name is AmirHossein Mobasheri and I hold a teacher training course (TTC) certification as well as a prestigious &quot;Leaders of Learning&quot; certificate from Harvard University.
            </p>
            <p className='text-start text-black fw-bold py-2' style={{direction:"ltr", lineHeight:"27px" , fontFamily:"Arial" , fontSize:"15px"}}>
            Additionally, I&apos;ve earned a master&apos;s degree in Educational Science, providing me with a deep understanding of the learning process.
            </p>
            <p className='text-start text-black fw-bold py-2' style={{direction:"ltr", lineHeight:"27px" , fontFamily:"Arial" , fontSize:"15px"}}>
            As a content creator, I&apos;ve dedicated my time to teaching English for free on both my Instagram and YouTube channels.
            </p>            
            <p className='text-start text-black fw-bold py-2' style={{direction:"ltr", lineHeight:"27px" , fontFamily:"Arial" , fontSize:"15px"}}>
            My goal is to make learning English fun, engaging, and accessible for everyone.
           </p>
           <p className='text-start text-black fw-bold py-2' style={{direction:"ltr", lineHeight:"27px" , fontFamily:"Arial" , fontSize:"15px"}}>
           Join me on this exciting journey of learning and growing together.
           </p>
          </div>
        </div>
        <div className='row rounded align-items-center border py-3'>
            <div className='col-12 col-lg-6'>
            <div className='text-center'>
            <Image alt='TTC-certificate' style={{width:"300px"}} className='rounded img-fluid' src={"/images/TTC.jpg"} width={2480} height={3508} />
            </div>
            </div>
            <div className='col-12 col-lg-6 mt-3 mt-lg-0'>
            <div className='text-center'>
            <Image alt='GSEx2-certificate' style={{width:"350px"}} className='rounded img-fluid' src={"/images/Certificate_page-0001.jpg"} width={2480} height={3508} />
            </div>
            </div>
        </div>
        <div className='row align-items-center justify-content-center justify-content-lg-between mt-3 border-bottom pb-2'>
              <div className='col-12 col-lg-6'>
                  <p className='text-end text-black fw-bold  py-2' style={{lineHeight:"27px" , fontFamily:"KalamehWeb-Medium" , fontSize:"30px"}}>سلام!</p>
                  <p className='text-end text-black fw-bold  py-2' style={{lineHeight:"27px" , fontFamily:"KalamehWeb-Medium" , fontSize:"15px"}}>
                   من امیرحسین مبشری هستم.
                    </p>
                    <p className='text-end text-black fw-bold  py-2' style={{lineHeight:"27px" , fontFamily:"KalamehWeb-Medium" , fontSize:"15px"}}>
                    دارای مدرک دوره تربیت معلم (TTC) و همچنین مدرک معتبر «رهبران یادگیری» از دانشگاه هاروارد.
                    </p>
                    <p className='text-end text-black fw-bold  py-2' style={{lineHeight:"27px" , fontFamily:"KalamehWeb-Medium" , fontSize:"15px"}}>
                    مدرک کارشناسی در رشته علوم تربیتی نیز به درک عمیق من از فرآیند یادگیری زبان آموزان کمک میکند.
                    </p>
                    <p className='text-end text-black fw-bold  py-2' style={{lineHeight:"27px" , fontFamily:"KalamehWeb-Medium" , fontSize:"15px"}}>
                    به‌عنوان یک تولیدکننده محتوا، بخشی از زمان خود را صرف آموزش رایگان زبان انگلیسی در اینستاگرام و یوتیوب کرده ام و تلاش میکنم تا یادگیری این زبان را برای همه، سرگرم کننده، جذاب و قابل دسترس کنم.
                    </p>
                    <p className='text-end text-black fw-bold  py-2' style={{lineHeight:"27px" , fontFamily:"KalamehWeb-Medium" , fontSize:"15px"}}>
                    از شما دعوت میکنم تا در این مسیر شگفت انگیز, با من همراه شوید!
                    </p>
              </div>
              <div className='col-12 col-lg-5'>
              <Image alt='author-image' className='img-fluid' src={"/images/about-2.png"} width={1080} height={1350} />
              </div>
        </div>
        <Call />
      </div>
    </section>
  );
};

export default HomeAbout;
