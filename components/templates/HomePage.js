import React from 'react';
import CoursesSection from '../modules/HomePage/CoursesSection';
import CustomSlider from '../modules/HomePage/CustomSlider';
import FirstBanner from '../modules/HomePage/FirstBanner';
import HomeAbout from '../modules/HomePage/HomeAbout';
import InstagramBanner from '../modules/HomePage/InstagramBanner';
import IntroSection from '../modules/HomePage/IntroSection';
import Properties from '../modules/HomePage/Properties';
import TestsSection from '../modules/HomePage/TestsSection';

const HomePage = () => {
    return (
        <div className='cover-home-3'>
            <FirstBanner />
            <IntroSection />
            <div className='container-fluid'>
                <div className='row justify-content-center'>

                        <div className='mb-3 mt-3'>
                            <Properties />
                            <TestsSection />
                            <CustomSlider />
                            <CoursesSection />
                            <InstagramBanner />
                            
                            {/* <HomeAbout /> */}    
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomePage;