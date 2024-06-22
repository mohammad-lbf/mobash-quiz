import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Footer = ({theme}) => {
    return (
        <footer className='footer pb-5'>
            <div className='container'>
                <div className='footer-1 bg-gray-850 border-gray-800 mt-0'>
                    <div className='row'>
                            <div className='col-lg-4 mb-30 text-lg-end text-center'>
                            <Link className='d-flex justify-content-center justify-content-lg-start' href={"/"}>
                                <Image style={{width:"116px" , height:"37px"}} className={`${theme == "theme-night" ? "d-block" : "d-none"}`} alt='logo' width={1000} height={3000} src={'/images/components/modules/logo-day1.png'} />
                                <Image style={{width:"116px" , height:"37px"}} className={`${theme == "theme-day" ? "d-block" : "d-none"}`} alt='logo' width={1000} height={3000} src={'/images/components/modules/logo1.png'} />
                            </Link>
                            <p style={{textAlign:"justify" , fontFamily:"Vazirmatn" , lineHeight:"27px"}} className='text-lg-end text-center mb-30 mt-20 text-sm color-gray-500'>
                            سلام دوستان، من امیرحسین مبشری هستم و اینجا هم سایت شخصی منه که در اصل برای شماست :)
                                <br />
                            من در اینجا ضمن معرفی خودم، آموخته هام از زبان انگلیسی رو باهاتون به اشتراک میذارم :)
                            </p>
                            <p className='active'>
                                <i class="bi bi-geo-alt-fill ms-2"></i>
                                تهران | ایران
                            </p>
                            </div>
                            <div className='col-lg-4 mb-30 pe-lg-5 text-center'>
                                <h6 className='text-lg mb-30 color-white' style={{visibility:"visible"}}>
                                    آزمون ها
                                </h6>
                                <div className='row'>
                                        <div className='col-12'>
                                            <ul className='menu-footer'>
                                                <li>
                                                    <Link className='color-gray-500 mb-4' href={`/tests/grammar`}>
                                                    <span>آزمون تعیین سطح گرامر</span>
                                                    {/* <span className='me-1'></span> */}
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link className='color-gray-500 mb-4' href={`/tests/general`}>
                                                    <span> آزمون تعیین سطح عمومی</span>
                                                    <span className='me-1'></span>
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                </div>
                            </div>
                            <div className='col-lg-4 mb-30 text-center'>
                            <h6 className='text-lg mb-30 color-white' style={{visibility:"visible"}}>
                                    دسترسی سریع
                                </h6>
                                <div className='row'>
                                        <div className='col-12'>
                                            <ul className='menu-footer'>
                                                <li>
                                                    <Link className='color-gray-500 mb-3' href={`/`}>
                                                        صفحه اصلی
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link className='color-gray-500 mb-3' href={`/tests`}>
                                                        آزمون ها
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link className='color-gray-500 mb-3' href={`/articles`}>
                                                        مقالات
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link className='color-gray-500 mb-3' href={`/courses`}>
                                                        دوره ها و کلاس‌های آموزشی
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link className='color-gray-500 mb-3' href={`/about`}>
                                                        درباره من
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link className='color-gray-500 mb-3' href={`/call`}>
                                                        تماس با من
                                                    </Link>
                                                </li>
                                                {/* <li>
                                                    <Link className='color-gray-500 mb-3' href={`/`}>
                                                        
                                                    </Link>
                                                </li> */}
                                            </ul>
                                        </div>
                                </div>
                            </div>
                            <div className='footer-bottom'>
                                <div className='row align-items-center'>
                                    <div className='col-lg-7 text-center text-lg-end'>
                                        <div className='d-flex flex-column flex-lg-row align-items-cenrer justify-content-center justify-content-lg-start mb-4 mb-lg-0'>
                                            <div className='d-flex justify-content-center mx-lg-3 my-3 my-lg-0'>
                                            <a rel='noreferrer' href='' className='social-link d-flex align-items-center'>
                                                    <span>instagram</span>
                                                    <i class="bi bi-instagram me-1"></i>
                                                </a>
                                            </div>
                                            <div className='d-flex justify-content-center mx-lg-3 my-3 my-lg-0'>
                                            <a rel='noreferrer' href='mailto:' className='social-link d-flex align-items-center'>
                                                    <span>Email</span>
                                                    <i class="bi bi-envelope-fill me-1"></i>
                                                </a>
                                            </div>
                                            <div className='d-flex justify-content-center mx-lg-3 my-3 my-lg-0'>
                                                <a rel='noreferrer' href='' className='social-link d-flex align-items-center'>
                                                    <span>youtube</span>
                                                    <i class="bi bi-youtube me-1"></i>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-lg-5 text-center text-lg-start'>
                                        <p className='text-base color-white'>
                                             تمامی حقوق محفوظ است
                                             <Link href={'/'} className='copyright ms-1'>
                                                englishwithmobash.ir
                                             </Link>
                                             &copy;
                                        </p>
                                    </div>
                                </div>
                            </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;