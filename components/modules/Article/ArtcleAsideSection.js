import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
// import GrammerTestLevels from './GrammerTestLevels';

const ArticleAsideSection = () => {
    return (
        <div className='flex-column w-100 align-items-center pt-0 d-flex'>
          <h5
          style={{fontSize:"24px",color:"#464749" , 
          fontFamily:"KalamehWeb-Bold" , }} 
          className='text-end mt-4 mt-lg-0 pt-2 mb-2 pb-2 w-100'>آخرین مقالات</h5>
            <div className='w-100'>
            <div style={{width:"100%"}} className="lbf-after-card-img my-0 mt-1 mb-3 mx-auto mx-lg-0"></div>
                <div style={{overflow:"hidden" , borderRadius:"15px" , height:"100px"}} className='w-100 mb-4 mb-lg-3 shadow-sm d-flex align-items-center border-gray-800 bg-gray-850'>
                            <Image style={{width:"150px" , height:"100px"}} width={1000} height={300} src={`/images/articles/evolve-books/coverPhoto.jpg`} alt="evolve-books"  />
                            <div className='my-2 me-3 d-flex flex-column align-items-start'>
                            <Link href="/articles/evolve-books">
                            <p style={{fontSize:"14px"}} className='article-subTitle fw-bold text-end lh-lg'>آشنایی با کتاب های Evolve</p>
                            </Link>
                            <div class="article-duration d-flex align-items-center mt-2">
                            <i class="bi bi-clock ms-1"></i> 29 تیر 1403
                            <Link href="/articles/evolve-books" className='d-flex align-items-center'>
                            <p style={{fontSize:"14px"}} className='article-subTitle fw-bold text-end lh-lg me-2 text-primary'>مطالعه مقاله</p>
                            <i class="bi bi-chevron-double-left animated-icon"></i>
                            </Link>
                            </div>
                            </div>
                </div>
                <div style={{overflow:"hidden" , borderRadius:"15px" , height:"100px"}} className='w-100 mb-4 mb-lg-3 shadow-sm d-flex align-items-center border-gray-800 bg-gray-850'>
                            <Image style={{width:"150px" , height:"100px"}} width={1000} height={300} src={`/images/articles/cefr-scales/coverPhoto.jpg`} alt="evolve-books"  />
                            <div className='my-2 me-3 d-flex flex-column align-items-start'>
                            <Link href="/articles/cefr-scales">
                            <p style={{fontSize:"14px"}} className='article-subTitle fw-bold text-end lh-lg'>مقیاس های CEFR</p>
                            </Link>
                            <div class="article-duration d-flex align-items-center mt-2">
                            <i class="bi bi-clock ms-1"></i> 30 تیر 1403
                            <Link href="/articles/cefr-scales" className='d-flex align-items-center'>
                            <p style={{fontSize:"14px"}} className='article-subTitle fw-bold text-end lh-lg me-2 text-primary'>مطالعه مقاله</p>
                            <i class="bi bi-chevron-double-left animated-icon"></i>
                            </Link>
                            </div>
                            </div>
                </div>
            </div>


        </div>
    );
};

export default ArticleAsideSection;