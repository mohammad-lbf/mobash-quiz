import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './footer.module.css';

const Footer = () => {
    return (
        <footer className={`${styles.mainFooter} w-100`}>
        <div className="container pt-4 px-sm-4 rounded">
            <div className="row">
                <div className="col-12 col-lg-6 text-center text-lg-end">
                    <div className="d-flex align-items-center w-100 justify-content-center justify-content-lg-start">
                            <div className="d-flex flex-column align-items-center align-items-lg-start text-decoration-none">
                            <Link style={{height:"47px"}} className='' href={"/"}>
                                <Image style={{width:"146px" , height:"47px"}} alt='logo' width={1000} height={300} src={'/images/components/modules/logo-light.png'} />
                            </Link>
                            <div className={`text-center text-lg-end`}>
                                <p className="fs-10 mt-3 text-warning" style={{fontFamily:"KalamehWeb-Bold" , fontSize:"20px"}}>Mobash Academy</p>
                                <p className="fs-10 mt-3 text-warning" style={{fontFamily:"KalamehWeb-Bold"  , fontSize:"14px"}}>
                                    آموزش زبان انگلیسی مبش
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='d-flex justify-content-center justify-content-lg-start w-100'>
                        <p style={{fontFamily:"KalamehWeb-Medium" , fontSize:"14px" , width:"400px"}} className={`lh-lg mt-3 mb-3 ${styles.textColorMilky}`} >
                        مبش اینجاست تا با جدیدترین متدهای روز دنیا، زبان انگلیسی را به صورت کاربردی در کوتاه‌ترین زمان و به راحتی بیاموزید.
                            </p>
                    </div>
                </div>
                <div className="col-12 col-lg-6 d-flex flex-column align-items-center">
                    <p style={{width:"170px" ,  fontFamily:"KalamehWeb-Bold"}} className={`mb-4 mt-4 mt-lg-0 fw-bold text-center text-lg-end ${styles.textColorMilky}`}>
                        بخش های سایت
                    </p>
                    <nav style={{width:"fit-content"}} className="d-flex flex-column text-center text-lg-end">
                        <Link style={{fontFamily:"KalamehWeb-Medium"}} className={`mx-2 mb-2 pb-1 ${styles.scaleHover}`} href="/">
                            صفحه اصلی
                        </Link>
                        <Link style={{fontFamily:"KalamehWeb-Medium"}} className={`mx-2 mb-2 pb-1 ${styles.scaleHover}`} href="/tests">
                            آزمون ها
                        </Link>
                        <Link style={{fontFamily:"KalamehWeb-Medium"}} className={`mx-2 mb-2 pb-1 ${styles.scaleHover}`} href="/articles">
                            مقالات
                        </Link>
                        <Link style={{fontFamily:"KalamehWeb-Medium"}}  className={`mx-2 mb-2 ${styles.scaleHover} pb-1`} href="/courses">
                            دوره ها و کلاس های آموزشی
                        </Link>
                        <Link style={{fontFamily:"KalamehWeb-Medium"}}  className={`mx-2 mb-2 pb-1 ${styles.scaleHover}`} href="/about">
                            درباره ما
                        </Link>
                    </nav>
                </div>
            </div>
        </div>
        <div className="container pt-3 pb-2 d-flex flex-column align-items-center w-100 border-top border-secondary">
    <p style={{direction:"ltr" , fontFamily:"KalamehWeb-Bold"}} className="text-warning mb-3">
      :ما را در شبکه های اجتماعی دنبال کنید
    </p>
    <div className="d-flex justify-content-center">
      <a className={`text-decoration-none ${styles.scaleHover}`} rel="noreferrer" href="https://instagram.com/english_with_mobash?igshid=MzNlNGNkZWQ4Mg==">
        <i className="fs-2 mx-3 bi bi-instagram"></i>
      </a>
      <a rel='noreferrer' href='https://api.whatsapp.com/send?phone=989383439244' className={`text-decoration-none ${styles.scaleHover}`}>
                          <i class="fs-2 bi bi-whatsapp"></i>
                      </a>
      <a className={`text-decoration-none ${styles.scaleHover}`} rel="noreferrer" href='https://www.youtube.com/@English.with.Mobash'>
        <i className=" fs-2  mx-3 bi bi-youtube"></i>
      </a>
  </div>
  </div>
  <div className="d-flex flex-column align-items-center text-light pt-2 container border-top border-secondary">
      <p className="mb-2"> &copy; تمامی حقوق محفوظ است</p>
      <p className="mb-2">Mobash.ir - 2024</p>
  </div>
        </footer>

    );
};

export default Footer;