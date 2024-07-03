import React from 'react';
import Link from 'next/link';


const ArticleBreadcrumb = () => {
    return (
        <div className=' pt-lg-3 pt-0 mt-4 pb-2'>
            <Link className='fw-bold color-gray-600' href={'/'}>
                صفحه اصلی
            </Link>
            <span className='mx-2'>/</span>
            <Link className='fw-bold color-gray-600' href={'/tests'}>
                آزمون های سایت
            </Link>
            <span className='mx-2'>/</span>
            <Link className='fw-bold color-gray-600' href={'/tests/public'}>
                آزمون تعیین سطح عمومی
            </Link>
        </div>
    );
};

export default ArticleBreadcrumb;