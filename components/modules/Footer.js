import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './footer.module.css';

const Footer = ({theme}) => {
    return (
        // <footer className='footer pb-5'>
        //     <div className='container'>
        //         <div className='footer-1 bg-gray-850 border-gray-800 mt-0'>
        //             <div className='row'>
        //                     <div className='col-lg-4 mb-30 text-lg-end text-center'>
        //                     <Link className='d-flex justify-content-center justify-content-lg-start' href={"/"}>
        //                         <Image style={{width:"116px" , height:"37px"}} className={`${theme == "theme-night" ? "d-block" : "d-none"}`} alt='logo' width={1000} height={3000} src={'/images/components/modules/logo-day1.png'} />
        //                         <Image style={{width:"116px" , height:"37px"}} className={`${theme == "theme-day" ? "d-block" : "d-none"}`} alt='logo' width={1000} height={3000} src={'/images/components/modules/logo1.png'} />
        //                     </Link>
        //                     <p style={{textAlign:"justify" , fontFamily:"Vazirmatn" , lineHeight:"27px"}} className='text-lg-end text-center mb-30 mt-20 text-sm color-gray-500'>
        //                     سلام دوستان، من امیرحسین مبشری هستم و اینجا هم سایت شخصی منه که در اصل برای شماست :)
        //                         <br />
        //                     من در اینجا ضمن معرفی خودم، آموخته هام از زبان انگلیسی رو باهاتون به اشتراک میذارم :)
        //                     </p>
        //                     <p className='active'>
        //                         <i class="bi bi-geo-alt-fill ms-2"></i>
        //                         تهران | ایران
        //                     </p>
        //                     </div>
        //                     <div className='col-lg-4 mb-30 pe-lg-5 text-center'>
        //                         <h6 className='text-lg mb-30 color-white' style={{visibility:"visible"}}>
        //                             آزمون ها
        //                         </h6>
        //                         <div className='row'>
        //                                 <div className='col-12'>
        //                                     <ul className='menu-footer'>
        //                                         <li>
        //                                             <Link className='color-gray-500 mb-4' href={`/tests/grammar`}>
        //                                             <span>آزمون تعیین سطح گرامر</span>
        //                                             {/* <span className='me-1'></span> */}
        //                                             </Link>
        //                                         </li>
        //                                         <li>
        //                                             <Link className='color-gray-500 mb-4' href={`/tests/general`}>
        //                                             <span> آزمون تعیین سطح عمومی</span>
        //                                             <span className='me-1'></span>
        //                                             </Link>
        //                                         </li>
        //                                     </ul>
        //                                 </div>
        //                         </div>
        //                     </div>
        //                     <div className='col-lg-4 mb-30 text-center'>
        //                     <h6 className='text-lg mb-30 color-white' style={{visibility:"visible"}}>
        //                             دسترسی سریع
        //                         </h6>
        //                         <div className='row'>
        //                                 <div className='col-12'>
        //                                     <ul className='menu-footer'>
        //                                         <li>
        //                                             <Link className='color-gray-500 mb-3' href={`/`}>
        //                                                 صفحه اصلی
        //                                             </Link>
        //                                         </li>
        //                                         <li>
        //                                             <Link className='color-gray-500 mb-3' href={`/tests`}>
        //                                                 آزمون ها
        //                                             </Link>
        //                                         </li>
        //                                         <li>
        //                                             <Link className='color-gray-500 mb-3' href={`/articles`}>
        //                                                 مقالات
        //                                             </Link>
        //                                         </li>
        //                                         <li>
        //                                             <Link className='color-gray-500 mb-3' href={`/courses`}>
        //                                                 دوره ها و کلاس‌های آموزشی
        //                                             </Link>
        //                                         </li>
        //                                         <li>
        //                                             <Link className='color-gray-500 mb-3' href={`/about`}>
        //                                                 درباره من
        //                                             </Link>
        //                                         </li>
        //                                         <li>
        //                                             <Link className='color-gray-500 mb-3' href={`/call`}>
        //                                                 تماس با من
        //                                             </Link>
        //                                         </li>
        //                                         {/* <li>
        //                                             <Link className='color-gray-500 mb-3' href={`/`}>
                                                        
        //                                             </Link>
        //                                         </li> */}
        //                                     </ul>
        //                                 </div>
        //                         </div>
        //                     </div>
        //                     <div className='footer-bottom'>
        //                         <div className='row align-items-center'>
        //                             <div className='col-lg-7 text-center text-lg-end'>
        //                                 <div className='d-flex flex-column flex-lg-row align-items-cenrer justify-content-center justify-content-lg-start mb-4 mb-lg-0'>
        //                                     <div className='d-flex justify-content-center mx-lg-3 my-3 my-lg-0'>
        //                                     <a rel='noreferrer' href='' className='social-link d-flex align-items-center'>
        //                                             <span>instagram</span>
        //                                             <i class="bi bi-instagram me-1"></i>
        //                                         </a>
        //                                     </div>
        //                                     <div className='d-flex justify-content-center mx-lg-3 my-3 my-lg-0'>
        //                                     <a rel='noreferrer' href='mailto:' className='social-link d-flex align-items-center'>
        //                                             <span>Email</span>
        //                                             <i class="bi bi-envelope-fill me-1"></i>
        //                                         </a>
        //                                     </div>
        //                                     <div className='d-flex justify-content-center mx-lg-3 my-3 my-lg-0'>
        //                                         <a rel='noreferrer' href='' className='social-link d-flex align-items-center'>
        //                                             <span>youtube</span>
        //                                             <i class="bi bi-youtube me-1"></i>
        //                                         </a>
        //                                     </div>
        //                                 </div>
        //                             </div>
        //                             <div className='col-lg-5 text-center text-lg-start'>
        //                                 <p className='text-base color-white'>
        //                                      تمامی حقوق محفوظ است
        //                                      <Link href={'/'} className='copyright ms-1'>
        //                                         englishwithmobash.ir
        //                                      </Link>
        //                                      &copy;
        //                                 </p>
        //                             </div>
        //                         </div>
        //                     </div>
        //             </div>
        //         </div>
        //     </div>
        // </footer>
        

        <footer className={`${styles.mainFooter} w-100`}>
        <div className="container pt-4 px-sm-4 rounded">
            <div className="row">
                <div className="col-12 col-lg-6 text-center text-lg-end">
                    <div className="d-flex align-items-center w-100 justify-content-center justify-content-lg-start">
                            <div className="d-flex flex-column align-items-center text-decoration-none">
                            <Link style={{height:"47px"}} className='' href={"/"}>
                                <Image style={{width:"146px" , height:"47px"}} alt='logo' width={1000} height={300} src={'/images/components/modules/logo-light.png'} />
                            </Link>
                            <div className={`text-start`}>
                                <p className="fs-10 mt-3 text-warning">
                                    آموزش زبان انگلیسی مبش
                                </p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <p style={{textAlign:"justify" , direction:"rtl"}} className={`lh-lg mt-4 ${styles.textColorMilky}`} >
                            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد
                            </p>
                    </div>
                </div>
                <div className="col-12 col-lg-6 d-flex flex-column align-items-center">
                    <p style={{width:"130px"}} className={`mb-4 fw-bold text-center text-lg-end ${styles.textColorMilky}`}>
                        بخش های سایت
                    </p>
                    <nav style={{width:"fit-content"}} className="d-flex flex-column text-center text-lg-end">
                        <Link  className={`mx-2 mb-2 ff-ybakh pb-1 ${styles.scaleHover}`} href="/">
                            صفحه اصلی
                        </Link>
                        <Link  className={`mx-2 mb-2 ff-ybakh pb-1 ${styles.scaleHover}`} href="/generaltec">
                            آموزش های عمومی
                        </Link>
                        <Link  className={`mx-2 mb-2 ff-ybakh pb-1 ${styles.scaleHover}`} href="/articles">
                            مقالات زبان انگلیسی
                        </Link>
                        <Link  className={`mx-2 mb-2 ff-ybakh pb-1 ${styles.scaleHover}`} href="/aboutus">
                            درباره ما
                        </Link>
                        <Link  className={`mx-2 mb-2 ff-ybakh ${styles.scaleHover} pb-1`} href="/callus">
                            تماس با ما
                        </Link>
                    </nav>
                </div>
            </div>
        </div>
        <div className="container pt-3 pb-2 d-flex flex-column align-items-center w-100 border-top border-secondary">
    <p className="text-light">
      :ما را در شبکه های اجتماعی دنبال کنید
    </p>
    <div className="d-flex justify-content-center">
      <a className={`text-decoration-none ${styles.scaleHover}`} rel="noreferrer" href="https://instagram.com/english_with_mobash?igshid=MzNlNGNkZWQ4Mg==">
        <i className="fs-2 mx-3 bi bi-instagram"></i>
      </a>
      <a className={`text-decoration-none ${styles.scaleHover}`} rel="noreferrer" href="https://youtube.com/@MobashEnglish">
        <i className=" fs-2  mx-3 bi bi-youtube"></i>
      </a>
  </div>
  </div>
  <div className="d-flex flex-column align-items-center text-light pt-2 container border-top border-secondary">
      <p className="mb-1"> &copy; تمامی حقوق محفوظ است</p>
      <p className="mb-2">MobashEnglish - 2023</p>
  </div>
        </footer>

    );
};

export default Footer;