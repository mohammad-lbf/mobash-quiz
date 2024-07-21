import Image from 'next/image';
import React from 'react';
import Call from '../../templates/Call';

const HomeAbout = () => {
  return (
    <section className="about-section my-3 py-3 p-lg-4 border-gray-800 section-block aos-init aos-animate" id="about-section" data-aos="fade-up">
      <div className="container">
        <div className="row flex-md-row-reverse justify-content-center justify-content-lg-between align-items-center">
        <div className="col-md-5 d-none d-md-block">
          <Image alt='author-image' className='img-fluid border rounded' src={"/images/about-me.png"} width={1080} height={1350} />
          </div>
          <div className="col-md-6 content-block text-end aos-init aos-animate" data-aos="fade-right" data-aos-delay="400" data-aos-duration="2000">
            <div className='d-flex flex-column align-items-center align-items-lg-start'>
                <span style={{fontFamily:"KalamehWeb-Bold" , color:"#090736" , fontSize:"20px"}} className='mb-4 mt-4 mt-lg-0'>
                    درباره من
                </span>
                <span style={{fontFamily:"KalamehWeb-Bold" , color:"#090736" , fontSize:"30px"}} className='fw-bold pt-3 mb-3'>
                    امیرحسین مبشری
                </span>
                <span style={{fontFamily:"KalamehWeb-Bold" , color:"#090736" , fontSize:"25px"}}  className='fw-bold color-linear py-3 mb-4'>
                    مدرس تخصصی زبان انگلیسی
                </span>
            </div>
            <Image alt='author-image' className='img-fluid border rounded border d-md-none' src={"/images/about-me.png"} width={1080} height={1350} />
            <p className='text-start text-black fw-bold mb-2' style={{lineHeight:"27px" , fontFamily:"Arial" , fontSize:"15px"}}>
            Hey!
            </p>
            <p className='text-start text-black fw-bold border-bottom py-2' style={{direction:"ltr", lineHeight:"27px" , fontFamily:"Arial" , fontSize:"15px"}}>
            My name is AmirHossein Mobasheri and I hold a teacher training course (TTC) certification as well as a prestigious &quot;Leaders of Learning&quot; certificate from Harvard University.
            </p>
            <p className='text-start text-black fw-bold border-bottom py-2' style={{direction:"ltr", lineHeight:"27px" , fontFamily:"Arial" , fontSize:"15px"}}>
            Additionally, I&apos;ve earned a master&apos;s degree in Educational Science, providing me with a deep understanding of the learning process.
            </p>
            <p className='text-start text-black fw-bold border-bottom py-2' style={{direction:"ltr", lineHeight:"27px" , fontFamily:"Arial" , fontSize:"15px"}}>
            As a content creator, I&apos;ve dedicated my time to teaching English for free on both my Instagram and YouTube channels.
            </p>            
            <p className='text-start text-black fw-bold border-bottom py-2' style={{direction:"ltr", lineHeight:"27px" , fontFamily:"Arial" , fontSize:"15px"}}>
            My goal is to make learning English fun, engaging, and accessible for everyone.
           </p>
           <p className='text-start text-black fw-bold border-bottom py-2' style={{direction:"ltr", lineHeight:"27px" , fontFamily:"Arial" , fontSize:"15px"}}>
           Join me on this exciting journey of learning and growing together.
           </p>
          </div>
          <div className='col-12'>
          <p className='text-end text-md-center text-black fw-bold mb-2 border-bottom py-2' style={{lineHeight:"27px" , fontFamily:"KalamehWeb-Medium" , fontSize:"15px"}}>
            سلام ,من امیرحسین مبشری هستم.
            </p>
            <p className='text-end text-md-center text-black fw-bold mb-2 border-bottom py-2' style={{lineHeight:"27px" , fontFamily:"KalamehWeb-Medium" , fontSize:"15px"}}>
            دارای مدرک دوره تربیت معلم (TTC) و همچنین مدرک معتبر «رهبران یادگیری» از دانشگاه هاروارد.
            </p>
            <div className='text-center'>
            <Image alt='TTC-certificate' style={{width:"300px"}} className='rounded border img-fluid' src={"/images/TTC.jpg"} width={2480} height={3508} />
            <p className='text-center text-black fw-bold mb-2 py-2' style={{lineHeight:"27px" , fontFamily:"KalamehWeb-Medium" , fontSize:"15px" , direction:"ltr"}}>
              TTC certificate
            </p>
            </div>
            <div className='text-end text-md-center border-bottom'>
            <Image alt='GSEx2-certificate' style={{width:"300px"}} className='rounded img-fluid' src={"/images/Certificate_page-0001.jpg"} width={2480} height={3508} />
            <p className='text-center text-black fw-bold pb-2' style={{lineHeight:"27px" , fontFamily:"KalamehWeb-Medium" , fontSize:"15px" , direction:"ltr"}}>
              GSEx2 certificate
            </p>
            </div>
            <p className='text-end text-md-center text-black fw-bold mb-2 border-bottom py-2' style={{lineHeight:"27px" , fontFamily:"KalamehWeb-Medium" , fontSize:"15px"}}>
            مدرک کارشناسی در رشته علوم تربیتی نیز به درک عمیق من از فرآیند یادگیری زبان آموزان کمک میکند.
            </p>
            <p className='text-end text-md-center text-black fw-bold mb-2 border-bottom py-2' style={{lineHeight:"27px" , fontFamily:"KalamehWeb-Medium" , fontSize:"15px"}}>
            به‌عنوان یک تولیدکننده محتوا، بخشی از زمان خود را صرف آموزش رایگان زبان انگلیسی در اینستاگرام و یوتیوب کرده ام و تلاش میکنم تا یادگیری این زبان را برای همه، سرگرم کننده، جذاب و قابل دسترس کنم.
            </p>
            <p className='text-end text-md-center text-black fw-bold mb-2 border-bottom py-2' style={{lineHeight:"27px" , fontFamily:"KalamehWeb-Medium" , fontSize:"15px"}}>
            از شما دعوت میکنم تا در این مسیر شگفت انگیز, با من همراه شوید!
            </p>
          </div>
        </div>
        <Call />
      </div>
    </section>
  );
};

export default HomeAbout;
