import React from 'react';
import PublicBreadCrumb from './PublicBreadcrumb'
import TestAuthor from '../grammar/TestAuthor';
import PublicContent from './PublicContent';
import PublicTestImage from './PublicTestImage';

const PublicMainSection = () => {
    return (
        <div className='pt-4 pt-sm-0 bg-white border rounded px-3'>
            <PublicBreadCrumb />
            <h3
             style={{fontFamily:"KalamehWeb-Bold" , color: "#03004e" , fontSize: "27px"}}
              className='my-4'>
                آزمون تعیین سطح جامع
            </h3>
            {/* Duration */}
            <div className='d-flex justify-content-between align-items-center'>
                <TestAuthor />
                <span className='fw-bold gray-text-color'>30 خرداد 1403</span>
            </div>
                <PublicTestImage />
                <PublicContent />
        </div>
    );
};

export default PublicMainSection;