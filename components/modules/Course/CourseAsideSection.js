import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
// import GrammerTestLevels from './GrammerTestLevels';

const CourseAsideSection = () => {
    return (
        <div className='flex-column w-100 align-items-center pt-0 d-flex'>
          <h5
          style={{fontSize:"24px",color:"#464749" , 
          fontFamily:"KalamehWeb-Bold" , }} 
          className='text-end mt-4 mt-lg-0 pt-2 mb-2 pb-2 w-100'>آخرین دوره ها</h5>
            <div className='w-100'>
            <div style={{width:"100%"}} className="lbf-after-card-img my-0 mt-1 mb-3 mx-auto mx-lg-0"></div>
                <div style={{overflow:"hidden" , borderRadius:"15px" , height:"100px"}} className='w-100 mb-4 mb-lg-3 shadow-sm d-flex align-items-center border-gray-800 bg-gray-850'>
                    <Image style={{width:"150px" , height:"100px"}} width={1305} height={683} src={`/images/courses/discussion/coverPhoto.jpg`} alt="evolve-books"  />
                    <div className='my-2 me-3 d-flex flex-column align-items-start'>
                        <Link href="/courses/discussion">
                        <p style={{fontSize:"14px"}} className='article-subTitle fw-bold text-end lh-lg'>کلاس های مکالمه و بحث آزاد</p>
                        </Link>
                        <div class="article-duration d-flex align-items-center mt-2">
                        <i class="bi bi-clock ms-1"></i> 31 تیر 1403
                        <Link href="/courses/discussion" className='d-flex align-items-center'>
                        <p style={{fontSize:"14px"}} className='article-subTitle fw-bold text-end lh-lg me-2 text-primary'>مشاهده دوره</p>
                        <i class="bi bi-chevron-double-left animated-icon"></i>
                        </Link>
                        </div>
                    </div> 
                </div>
                <div style={{overflow:"hidden" , borderRadius:"15px" , height:"100px"}} className='w-100 mb-4 mb-lg-3 shadow-sm d-flex align-items-center border-gray-800 bg-gray-850'>
                    <Image style={{width:"150px" , height:"100px"}} width={1305} height={683} src={`/images/courses/grammar/coverPhoto.jpg`} alt="evolve-books"  />
                    <div className='my-2 me-3 d-flex flex-column align-items-start'>
                        <Link href="/courses/grammar">
                        <p style={{fontSize:"14px"}} className='article-subTitle fw-bold text-end lh-lg'>دوره اختصاصی گرامر</p>
                        </Link>
                        <div class="article-duration d-flex align-items-center mt-2">
                        <i class="bi bi-clock ms-1"></i> 31 تیر 1403
                        <Link href="/courses/grammar" className='d-flex align-items-center'>
                        <p style={{fontSize:"14px"}} className='article-subTitle fw-bold text-end lh-lg me-2 text-primary'>مشاهده دوره</p>
                        <i class="bi bi-chevron-double-left animated-icon"></i>
                        </Link>
                        </div>
                    </div> 
                </div>
                <div style={{overflow:"hidden" , borderRadius:"15px" , height:"100px"}} className='w-100 mb-4 mb-lg-3 shadow-sm d-flex align-items-center border-gray-800 bg-gray-850'>
                    <Image style={{width:"150px" , height:"100px"}} width={1305} height={683} src={`/images/courses/entrance/coverPhoto.jpg`} alt="evolve-books"  />
                    <div className='my-2 me-3 d-flex flex-column align-items-start'>
                        <Link href="/courses/entrance">
                        <p style={{fontSize:"14px"}} className='article-subTitle fw-bold text-end lh-lg'>کلاس های کنکوری و رفع اشکال</p>
                        </Link>
                        <div class="article-duration d-flex align-items-center mt-2">
                        <i class="bi bi-clock ms-1"></i> 31 تیر 1403
                        <Link href="/courses/entrance" className='d-flex align-items-center'>
                        <p style={{fontSize:"14px"}} className='article-subTitle fw-bold text-end lh-lg me-2 text-primary'>مشاهده دوره</p>
                        <i class="bi bi-chevron-double-left animated-icon"></i>
                        </Link>
                        </div>
                    </div> 
                </div>
                <div style={{overflow:"hidden" , borderRadius:"15px" , height:"100px"}} className='w-100 mb-4 mb-lg-3 shadow-sm d-flex align-items-center border-gray-800 bg-gray-850'>
                    <Image style={{width:"150px" , height:"100px"}} width={1305} height={683} src={`/images/courses/termic/coverPhoto.jpg`} alt="evolve-books"  />
                    <div className='my-2 me-3 d-flex flex-column align-items-start'>
                        <Link href="/courses/termic">
                        <p style={{fontSize:"14px"}} className='article-subTitle fw-bold text-end lh-lg'>دوره های ترمیک و فشرده</p>
                        </Link>
                        <div class="article-duration d-flex align-items-center mt-2">
                        <i class="bi bi-clock ms-1"></i> 31 تیر 1403
                        <Link href="/courses/termic" className='d-flex align-items-center'>
                        <p style={{fontSize:"14px"}} className='article-subTitle fw-bold text-end lh-lg me-2 text-primary'>مشاهده دوره</p>
                        <i class="bi bi-chevron-double-left animated-icon"></i>
                        </Link>
                        </div>
                    </div> 
                </div>
            </div>


        </div>
    );
};

export default CourseAsideSection;