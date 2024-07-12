import React from 'react';
import Card from '../Card';
import Image from 'next/image';
import Link from 'next/link';

const CoursesSection = () => {
    return (
        <div className='container'>
        
        <div className='row align-items-center pt-lg-4'>
                    <div className='col-12 col-lg-6 text-center text-lg-end'>
                        <h3 className='color-linear mb-1 mx-auto text-center text-lg-end'>دوره ها و کلاس‌های آموزشی</h3>
                        <div  className="lbf-after-card-img mx-lg-0 mx-auto"></div>
                            <p className='templates-intro text-center text-lg-end lh-lg my-3'>
                            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است
                            </p>
                            <Link href={'/courses'} className="btn btn-linear text-center">
                                    مشاهده ی دوره ها
                            </Link>
                    </div>
                    <div className='col-12 col-lg-6 text-center text-lg-start'>
                    <Image alt='site-templates' width={320} height={200} src={'/images/components/modules/courses.webp'} />
                    </div>
                    
                
        </div>
        </div>
    );
};

export default CoursesSection;