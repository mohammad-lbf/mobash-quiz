import React from 'react';
import TestsSection from '../modules/tests/TestsSection';
import Authors from '../modules/tests/Authors';
import FirstBanner from '../modules/tests/FirstBanner';


const TestsPage = () => {
    return (
        <div>
            <FirstBanner />
            <div style={{paddingTop:"30px"}} className='container'>
                <div className='row flex-lg-row-reverse'>
                    <div className='col-12 col-lg-9 weblog__articles'>
                        <TestsSection />
                    </div>
                    <div className='col-12 col-lg-3 mt-4 mb-4 mb-lg-0 mt-lg-0 weblog__authors'>
                        <Authors />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TestsPage;