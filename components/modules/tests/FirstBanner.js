import React from 'react';
import Image from 'next/image';
const FirstBanner = () => {
    return (
<div className="banner banner-home4 bg-gray-850">
                    <div className='pt-4'>
            <div className='container'>

                <div className='row align-items-center justify-content-center pt-md-4'>
                    <div className='col-12 col-lg-6 text-center text-lg-end'>
                    <div className='d-flex justify-content-center justify-content-lg-start'>
                        <h3 style={{fontFamily:"Vazirmatn"}} className='color-linear ms-2'>آزمون های سایت</h3>
                        {/* <h3 style={{fontFamily:"Vazirmatn"}} className='color-linear'>HTML</h3> */}
                    </div>
                        <div style={{width:"230px"}} className="lbf-after-card-img mx-lg-0 mx-auto"></div>
                            <p className='templates-intro text-center text-lg-end lh-lg my-3'>
                            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است
                            </p>
                    </div>
                    <div className='col-12 col-lg-6 text-center text-lg-start'>
                    <Image alt='html-logo' width={200} height={200} src={'/images/components/modules/3337507.webp'} />
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default FirstBanner;