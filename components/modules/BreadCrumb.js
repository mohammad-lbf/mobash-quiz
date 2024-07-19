import React from 'react';
import Link from 'next/link';


const BreadCrumb = ({firstLink , firstLinkText , secondLink , secondLinkText}) => {
    return (
        <div className=' pt-lg-3 pt-0 mt-4 mt-lg-0 pb-2 d-flex justify-content-center justify-content-sm-start'>
            <Link className='fw-bold color-gray-600' href={'/'}>
                صفحه اصلی
            </Link>
            <span className='mx-2'>/</span>
            <Link className='fw-bold color-gray-600' href={firstLink}>
                {firstLinkText}
            </Link>
            <span className='mx-2'>/</span>
            <Link className='fw-bold color-gray-600' href={secondLink}>
                {secondLinkText}
            </Link>
        </div>
    );
};

export default BreadCrumb;