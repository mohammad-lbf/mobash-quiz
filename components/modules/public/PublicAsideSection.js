import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import PublicTestLevels from './PublicTestLevels';

const GrammarAsideSection = () => {
    return (
        <div className='flex-column w-100 align-items-center pt-0 d-none d-xl-flex bg-white p-3 rounded border'>
          <h5
          style={{fontSize:"24px",color:"#464749" , 
          fontFamily:"KalamehWeb-Bold" , }} 
          className='text-end mt-4 pt-2 mb-2 pb-2 w-100'>سطوح آزمون تعیین سطح جامع:</h5>
            <div className='w-100'>
            <div style={{width:"100%"}} className="lbf-after-card-img my-0 mt-1 mb-3 mx-auto mx-lg-0"></div>
            <PublicTestLevels />
            </div>


        </div>
    );
};

export default GrammarAsideSection;