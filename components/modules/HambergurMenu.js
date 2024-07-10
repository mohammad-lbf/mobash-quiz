import 'bootstrap/dist/css/bootstrap.min.css';
import { Offcanvas} from 'react-bootstrap';
import Image from 'next/image';
import Link from 'next/link';

function HambergurMenu({show , handleClose , theme}) {

  return (
    <div>
      <Offcanvas style={{width:"320px"}} className={theme =="theme-night" ? "bg-gray-900 color-gray-50" : "bg-white color-gray-700"} show={show} onHide={handleClose} placement="end">
        <Offcanvas.Header closeButton className={`border-bottom`} style={{borderBottom: `${theme == "theme-night" && "1px solid #222f43"}`}}>
          <Offcanvas.Title className='mb-0'>
          <Link className='d-flex' href={"/"}>
          <Image style={{width:"146px" , height:"47px"}} alt='logo' width={1000} height={300} src={'/images/components/modules/logo-dark.png'} />
          </Link>
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className='pt-0'>
            <div className='mobile-menu-wrap mobile-header-border'>
              <nav>
                <Link style={{fontFamily:"KalamehWeb-Bold" , }} className="btn btn-linear w-100 my-3 d-inline-block hover-up hover-shadow" onClick={()=>handleClose()} href="/about">درباره من</Link>
                <ul className='mobile-menu font-heading'>
                <li className={`p-3 ${theme == "theme-day" && "border-bottom"}`} style={{borderBottom: `${theme == "theme-night" && "1px solid #222f43"}`}}><Link onClick={()=>handleClose()} className={`p-0 ${theme == "theme-night" ? "color-gray-200" : "color-gray-800"}`} style={{fontSize:"16px" , fontFamily:"KalamehWeb-Bold"}} href={"/"}>صفحه اصلی</Link></li>
                <li className={`p-3 ${theme == "theme-day" && "border-bottom"}`} style={{borderBottom: `${theme == "theme-night" && "1px solid #222f43"}`}}><Link onClick={()=>handleClose()} className={`p-0 ${theme == "theme-night" ? "color-gray-200" : "color-gray-800"}`} style={{fontSize:"16px" , fontFamily:"KalamehWeb-Bold"}} href={"/tests"}>آزمون ها</Link></li>
                <li className={`p-3 ${theme == "theme-day" && "border-bottom"}`} style={{borderBottom: `${theme == "theme-night" && "1px solid #222f43"}`}}><Link onClick={()=>handleClose()} className={`p-0 ${theme == "theme-night" ? "color-gray-200" : "color-gray-800"}`} style={{fontSize:"16px" , fontFamily:"KalamehWeb-Bold"}} href={"/articles"}>مقالات</Link></li>
                <li className={`p-3 ${theme == "theme-day" && "border-bottom"}`} style={{borderBottom: `${theme == "theme-night" && "1px solid #222f43"}`}}><Link onClick={()=>handleClose()} className={`p-0 ${theme == "theme-night" ? "color-gray-200" : "color-gray-800"}`} style={{fontSize:"16px" , fontFamily:"KalamehWeb-Bold"}} href={"/courses"}>دوره ها و کلاسهای آموزشی</Link></li>
                </ul>
              </nav>
            </div>
            <div className='d-flex flex-row-reverse align-items-center justify-content-end mb-4'>
                  <div className='d-flex ms-4 justify-content-center mx-lg-3 my-3'>
                      <a rel='noreferrer' href='https://www.youtube.com/@English.with.Mobash' className='social-link d-flex align-items-center'>
                          <i class="bi bi-youtube fs-4"></i>
                      </a>
                  </div>
                  <div className='d-flex ms-4 justify-content-center mx-lg-3 my-3'>
                  <a rel='noreferrer' href='https://api.whatsapp.com/send?phone=989383439244' className='social-link d-flex align-items-center'>
                          <i class="bi bi-whatsapp fs-4"></i>
                      </a>
                  </div>
                  <div className='d-flex ms-4 me-3 justify-content-center mx-lg-3 my-3'>
                  <a rel='noreferrer' href="https://www.instagram.com/english_with_mobash" className='social-link d-flex align-items-center'>
                          <i class="bi bi-instagram fs-4"></i>
                      </a>
                  </div>
              </div>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
}

export default HambergurMenu;
