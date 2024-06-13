
import React from 'react';
import Card from '../Card';
import Image from 'next/image';
import Link from 'next/link';

const TestsSection = () => {
  return (
    <div className='container'>
        
        <div className='row align-items-center pt-lg-4'>
                    <div className='col-12 col-lg-6 text-center text-lg-end'>
                        <h3 className='color-linear mb-1 mx-auto text-center text-lg-end'>آزمون های سایت</h3>
                        <div style={{width:"200px"}} className="lbf-after-card-img mx-lg-0 mx-auto"></div>
                            <p className='templates-intro text-center text-lg-end lh-lg my-3'>
                            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است
                            </p>
                            <Link href={'/tests'} className="btn btn-linear text-center">
                                    مشاهده ی آزمون ها
                            </Link>
                    </div>
                    <div className='col-12 col-lg-6 text-center text-lg-start'>
                    <Image alt='site-templates' width={200} height={200} src={'/images/components/modules/3337507.webp'} />
                    </div>
                    <h3 className='color-linear mb-1 mx-auto text-center p-0'>آخرین آزمون ها</h3>
                    <div style={{width:"200px"}} className="lbf-after-card-img mx-auto mb-4"></div>
                </div>
        <div className='row article-vertical justify-content-center row-cols-lg-3 row-cols-sm-1 row-cols-md-2 row-cols-xs-1'>
        <div className='col-sm mb-2 mb-lg-0'>
                    <Card
                     slug={`grammar`}
                     title={`تعیین سطح گرامر`}
                     caption={`لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است`}
                     />
                    </div>
                    <div className='col-sm'>
                    <Card
                     slug={`vocabulary`}
                     title={`تعیین سطح لغات`}
                     caption={`لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است`}
                     />
                    </div>
                
        </div>
    </div>
  );
};

export default TestsSection;
