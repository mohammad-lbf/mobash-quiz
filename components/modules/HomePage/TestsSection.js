
import React from 'react';
import Card from '../Card';
import Image from 'next/image';
import Link from 'next/link';

const TestsSection = () => {
  return (
    <section className=''>
    <div className='container py-4 my-4'>
    {/* <div className='d-flex align-items-center flex-column pt-lg-4'> */}
                <div className='d-flex flex-column align-items-center'>
                <h3 style={{fontSize:"30px", fontFamily:"KalamehWeb-Bold", color:"#03004e"}} className="fw-bold text-center lh-lg ">همین امروز یادگیری زبان انگلیسی را شروع کنید</h3>
                {/* <div style={{maxWidth:"300px"}} className="lbf-after-card-img mx-auto"></div> */}
                {/* <Image alt='site-templates' width={200} height={200} src={'/images/components/modules/3337507.webp'} /> */}
                        <p className='text-center lh-lg my-3' style={{fontFamily:"KalamehWeb-Medium" , color:"#000" , fontSize:"15px"}}>

                        </p>
                        <Link style={{width:"fit-content"}} href={'/tests'} className="btn-main-2 text-white d-flex align-items-center animated-link">
                                <span style={{fontFamily:"KalamehWeb-Bold"}}>
                                  آزمون های تعیین سطح
                                </span>
                                <i class="bi bi-chevron-double-left me-2 pt-2 animated-icon"></i>
                        </Link>
                </div>
                {/* <div className='col-12 mt-2'>
                <h3 className='color-linear mx-auto text-center text-lg-end p-0 mt-4'>آخرین آزمون ها</h3>
                <div style={{width:"200px"}} className="lbf-after-card-img mx-auto mx-lg-0 mb-4"></div>
            </div> */}
    {/* <div className='row article-vertical justify-content-center justify-content-lg-start row-cols-lg-3 row-cols-sm-1 row-cols-md-2 row-cols-xs-1 mb-4'>
    <div className='col-sm mb-2 mb-lg-0'>
                <Card
                 slug={`grammar`}
                 title={`تعیین سطح گرامر`}
                 caption={`لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است`}
                 />
                </div>
                <div className='col-sm'>
                <Card
                 slug={`public`}
                 title={`تعیین سطح عمومی`}
                 caption={`لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است`}
                 />
                </div>
                </div> */}
                
            
    </div>
    {/* </div> */}
    
    </section>
  );
};

export default TestsSection;
