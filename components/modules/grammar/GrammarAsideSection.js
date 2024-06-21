import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import GrammerTestLevels from './GrammerTestLevels';

const GrammarAsideSection = () => {
    return (
        <div className='flex-column w-100 align-items-center pt-0 d-none d-xl-flex'>
            <h5 className='pt-lg-3 w-100 text-center text-lg-end article-subTitle'>آزمون تعیین سطح گرامر</h5>
            <div className='w-100'>
            <div style={{width:"100%"}} className="lbf-after-card-img my-0 mt-1 mb-3 mx-auto mx-lg-0"></div>
            <GrammerTestLevels />
            </div>


        </div>
    );
};

export default GrammarAsideSection;