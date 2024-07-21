import React from 'react';
import Link from 'next/link';

const TestsSection = () => {
  return (
    <section className=''>
    <div className='container py-4 my-4'>
                <div className='d-flex flex-column align-items-center'>
                <h3 style={{fontSize:"30px", fontFamily:"KalamehWeb-Bold", color:"#03004e"}} className="fw-bold text-center lh-lg ">همین امروز یادگیری زبان انگلیسی را شروع کنید</h3>
                        <p className='text-center lh-lg my-3' style={{fontFamily:"KalamehWeb-Medium" , color:"#000" , fontSize:"15px"}}>

                        </p>
                        <Link style={{width:"fit-content"}} href={'/tests'} className="btn-main-2 text-white d-flex align-items-center animated-link">
                                <span style={{fontFamily:"KalamehWeb-Bold"}}>
                                  آزمون های تعیین سطح
                                </span>
                                <i class="bi bi-chevron-double-left me-2 pt-2 animated-icon"></i>
                        </Link>
                </div>
    </div>
    </section>
  );
};

export default TestsSection;
