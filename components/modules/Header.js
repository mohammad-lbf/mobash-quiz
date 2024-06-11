import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import SwitchButton from '../elements/SwitchButton';
import HambergurMenu from './HambergurMenu'
const Header = ({theme , setTheme}) => {
    const {pathname} = useRouter();

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <header className={`header sticky-bar bg-gray-900 mt-0 d-flex justify-content-center ${theme == "theme-day" && "shadow-sm"}`}>
            <nav className={`container`}>
                <div className={`main-header`}>
                        <div className={`header-right text-end d-flex justfy-content-end align-items-center`}>
                            <Link class="btn btn-linear d-none d-sm-inline-block hover-up hover-shadow" href="/about">درباره من</Link>
                            <SwitchButton theme={theme} setTheme={setTheme} />
                        </div>
                        <div className={`header-nav`}>
                            <nav className={`nav-main-menu d-none d-xl-block`}>
                                <ul className={`main-menu d-flex justify-content-center`}>
                                    <li className='m-3'><Link className={`p-0 ${pathname == "/" ? "active" : "color-gray-500"}`} href={"/"}>صفحه اصلی</Link></li>
                                    <li className='has-children m-3'>
                                        <Link className={`p-0 ${pathname == "/tests" ? "active" : "color-gray-500"}`}  href={"/tests"}>
                                        آزمون ها
                                        </Link>
                                        <ul className="sub-menu shadow-sm ">
                                        <li>
                                            <Link className='text-end' href='/tests'>
                                                    <span>همه آزمون ها</span>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link className='text-end' href='/tests/grammar'>
                                                    <span>آزمون تعیین سطح گرامر</span>
                                                    {/* <span className='me-1'>Grammer</span> */}
                                                </Link>
                                            </li>
                                            <li>
                                            <Link className='text-end' href='/tests/vocabulary'>
                                                    <span>آزمون تعیین سطح لغات</span>
                                                    {/* <span className='me-1'>Vocabulary</span> */}
                                                </Link>
                                            </li>
                                        </ul>
                                        </li>
                                    <li className='m-3'><Link className={`p-0 ${pathname == "/call" ? "active" : "color-gray-500"}`} href={"/call"}>تماس با من</Link></li>
                                    
                                </ul>
                            </nav>
                            <button style={{backgroundColor:"transparent"}} onClick={handleShow} className="border-0 burger-icon burger-icon-white"><span class="burger-icon-top"></span><span class="burger-icon-mid"></span><span class="burger-icon-bottom"></span></button>
                            <HambergurMenu theme={theme} show={show} handleClose={handleClose} />
                        </div>
                        <div className={`header-logo`}>
                            <Link className='d-flex justify-content-end' href={"/"}>
                                <Image style={{width:"116px" , height:"37px"}} className={`${theme == "theme-night" ? "d-block" : "d-none"}`} alt='logo' width={1000} height={300} src={'/images/components/modules/logo-day1.png'} />
                                <Image style={{width:"116px" , height:"37px"}} className={`${theme == "theme-day" ? "d-block" : "d-none"}`} alt='logo' width={1000} height={300} src={'/images/components/modules/logo1.png'} />
                            </Link>
                        </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;