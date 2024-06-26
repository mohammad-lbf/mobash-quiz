import React from 'react';
import CoursesSection from '../modules/HomePage/CoursesSection';
import CustomSlider from '../modules/HomePage/CustomSlider';
import FirstBanner from '../modules/HomePage/FirstBanner';
import HomeAbout from '../modules/HomePage/HomeAbout';
import InstagramBanner from '../modules/HomePage/InstagramBanner';
import IntroSection from '../modules/HomePage/IntroSection';
import TestsSection from '../modules/HomePage/TestsSection';

const HomePage = () => {
    return (
        <div className='cover-home-3'>
            <FirstBanner />
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-xl-1'>

                    </div>
                    <div className='col-xl-10 col-lg-12'>
                        <div className='mb-3 mt-3'>
                            <IntroSection />
                            <TestsSection />
                            <CustomSlider />
                            <CoursesSection />
                            <InstagramBanner />
                            {/* <HomeAbout /> */}
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomePage;