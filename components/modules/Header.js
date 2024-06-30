import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import HambergurMenu from './HambergurMenu';
import isUserNameInLocalStorage from '../../assets/functions/localStorageChecker';

const Header = () => {
    const {pathname} = useRouter();
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <header className={`sticky-bar mt-0 d-flex justify-content-center shadow-sm`}>
            <nav className={`container bg-gray-900 header px-4`}>
                <div className={`main-header justify-content-between align-items-center`}>
                    <div className='d-flex align-items-center'>
                    <div className={`text-end d-flex justfy-content-end align-items-center`}>
                            <Link style={{height:"47px"}} className='d-none d-xl-block' href={"/"}>
                                <Image style={{width:"146px" , height:"47px"}} alt='logo' width={1000} height={300} src={'/images/components/modules/logo-dark.png'} />
                            </Link>
                        </div>
                        <div className={`header-nav`}>
                            <nav className={`d-none d-xl-block`}>
                                <ul className={`main-menu me-4 d-flex justify-content-start align-items-center`}>
                                    <li className='m-3'><Link className={`p-0 ${pathname == "/" ? "active" : "text-dark"}`} href={"/"}>صفحه اصلی</Link></li>
                                    <li className='has-children m-3'>
                                        <Link className={`p-0 ${pathname == "/tests" ? "active" : "text-dark"}`}  href={"/tests"}>
                                        آزمون ها
                                        </Link>
                                        <ul className="sub-menu shadow-sm ">
                                        <li>
                                            <Link className='text-end' href='/tests'>
                                                    <span>همه آزمون ها</span>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link className='text-end' href={`${isUserNameInLocalStorage() ? '/tests/grammar' : '/signup'}`}>
                                                    <span>آزمون تعیین سطح گرامر</span>
                                                </Link>
                                            </li>
                                            <li>
                                            <Link className='text-end' href='/tests/general'>
                                                    <span>آزمون تعیین سطح عمومی</span>
                                                </Link>
                                            </li>
                                        </ul>
                                        </li>
                                        <li className='m-3'><Link className={`p-0 ${pathname == "/articles" ? "active" : "text-dark"}`} href={"/articles"}>مقالات</Link></li>
                                    <li className='m-3'><Link className={`p-0 ${pathname == "/courses" ? "active" : "text-dark"}`} href={"/courses"}>دوره ها و کلاس های آموزشی</Link></li>
                                    
                                </ul>
                            </nav>
                            <button style={{backgroundColor:"transparent"}} onClick={handleShow} className="border-0 burger-icon burger-icon-white"><span class="burger-icon-top"></span><span class="burger-icon-mid"></span><span class="burger-icon-bottom"></span></button>
                            <HambergurMenu show={show} handleClose={handleClose} />
                        </div>
                    </div>

                        <div className={`d-flex align-items-center`}>
                            <Link class="btn btn-linear d-none d-sm-inline-block ms-1 hover-up hover-shadow" href="/about">درباره من</Link>
                        <Link style={{height:"47px"}} className='d-xl-none' href={"/"}>
                                <Image style={{width:"146px" , height:"47px"}} alt='logo' width={1000} height={300} src={'/images/components/modules/main-logo.jpg'} />
                            </Link>
                        </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;