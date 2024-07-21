import React from 'react';
import Link from 'next/link';

const CoursesSection = () => {
    return (
        <div className='container pt-4'>
        
        <div className='row align-items-center pt-lg-4'>
                    <div className='col-12 text-center'>
                        <h3 style={{fontFamily:"KalamehWeb-Bold" , fontSize:"30px" , color:"#090736" , lineHeight:"40px"}} className='mb-1 mx-auto text-center'>دوره ها و کلاس‌های آموزشی</h3>
                        <div style={{maxWidth:"330px"}} className="lbf-after-card-img mx-auto"></div>
                            <p style={{fontFamily:"KalamehWeb-Bold" , fontSize:"17px" , color:"#000"}} className=' text-center lh-lg mb-4'>
                            یادگیری سریع و عمیق زبان انگلیسی با مبش
                            </p>
                            <Link style={{ width: "fit-content" }} href={'/courses'} className="mx-auto btn-main-2 text-white d-flex align-items-center animated-link">
                                <span style={{ fontFamily: "KalamehWeb-Bold" }}>
                                    مشاهده دوره ها
                                </span>
                                <i className="bi bi-chevron-double-left me-2 pt-2 animated-icon"></i>
                            </Link>

                    </div>        
        </div>
        </div>
    );
};

export default CoursesSection;