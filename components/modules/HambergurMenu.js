import 'bootstrap/dist/css/bootstrap.min.css';
import { Offcanvas, Button } from 'react-bootstrap';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

function HambergurMenu({show , handleClose , theme}) {
  const {pathname} = useRouter();
  return (
    <div>


      <Offcanvas style={{width:"320px"}} className={theme =="theme-night" ? "bg-gray-900 color-gray-50" : "bg-white color-gray-700"} show={show} onHide={handleClose} placement="end">
        <Offcanvas.Header closeButton className={`${theme == "theme-day" && "border-bottom"}`} style={{borderBottom: `${theme == "theme-night" && "1px solid #222f43"}`}}>
          <Offcanvas.Title className='mb-0'>
          <Link className='d-flex' href={"/"}>
          <Image style={{width:"116px" , height:"37px"}} className={`${theme == "theme-night" ? "d-block" : "d-none"}`} alt='logo' width={1000} height={300} src={'/images/components/modules/logo-day1.png'} />
                                <Image style={{width:"116px" , height:"37px"}} className={`${theme == "theme-day" ? "d-block" : "d-none"}`} alt='logo' width={1000} height={300} src={'/images/components/modules/logo1.png'} />
          </Link>
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className='pt-0'>
            <div className='mobile-menu-wrap mobile-header-border'>
              <nav>
                <Link class="btn btn-linear w-100 my-3 d-inline-block hover-up hover-shadow" onClick={()=>handleClose()} href="about">درباره من</Link>
                <ul className='mobile-menu font-heading'>
                <li className={`p-3 ${theme == "theme-day" && "border-bottom"}`} style={{borderBottom: `${theme == "theme-night" && "1px solid #222f43"}`}}><Link onClick={()=>handleClose()} className={`p-0 ${theme == "theme-night" ? "color-gray-200" : "color-gray-800"}`} style={{fontSize:"16px"}} href={"/"}>صفحه اصلی</Link></li>

                <li className={`p-3 ${theme == "theme-day" && "border-bottom"}`} style={{borderBottom: `${theme == "theme-night" && "1px solid #222f43"}`}}><Link onClick={()=>handleClose()} className={`p-0 ${theme == "theme-night" ? "color-gray-200" : "color-gray-800"}`} style={{fontSize:"16px"}} href={"/tests"}>آزمون ها</Link></li>
                <li className={`p-3 ${theme == "theme-day" && "border-bottom"}`} style={{borderBottom: `${theme == "theme-night" && "1px solid #222f43"}`}}><Link onClick={()=>handleClose()} className={`p-0 ${theme == "theme-night" ? "color-gray-200" : "color-gray-800"}`} style={{fontSize:"16px"}} href={"/call"}>تماس با ما</Link></li>
                </ul>
              </nav>
            </div>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
}

export default HambergurMenu;
