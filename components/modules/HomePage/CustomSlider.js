import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { Carousel } from 'react-bootstrap';

const CustomSlider = () => {
  return (
    <div className='bg-gray-850 rounded border-gray-800 mb-3'>
          <div className='container py-3'>
        <div className='row align-items-center'>
            <div className='col-12 col-lg-6'>
              <div className='d-flex flex-column justify-content-center justify-content-lg-end'>
              <h3 style={{fontFamily:"Vazirmatn"}} className='color-linear fs-1 text-center text-lg-end'>آخرین مقالات</h3>
              <div style={{width:"200px"}} className="lbf-after-card-img mx-lg-0 mx-auto mb-3"></div>
              <p style={{fontSize:"16px"}} className='color-gray-500 mb-3 text-center fs-13 text-lg-end'>به روزترین مقالات زبان انگلیسی را در اینجا ببینید</p>
              {/* <h3 style={{fontFamily:"Vazirmatn"}} className='color-linear fs-1 mb-3 me-2'></h3> */}
        </div>
            </div>
            <div className='col-12 col-lg-6 text-center text-lg-end'>
            <Carousel indicators={false}>
        <Carousel.Item
              className='rounded'>
              <Link href={`/articles/evolve-books`}>
              <div className='image-container'>
                <Image
                className="d-block w-100 img-fluid"
                src={`/images/articles/evolve-books/coverphoto.jpg`}
                alt="weblog post slide"
                width={1000} height={400}
                style={{width:"100%"}}
              />
              <p className='carousel-caption-p'>معرفی کتاب های Evolve</p>
              </div>
              </Link>
          </Carousel.Item>
          <Carousel.Item
              className='rounded'>
              <Link href={`/articles/cefr-scales`}>
              <div className='image-container'>
                <Image
                className="d-block w-100 img-fluid"
                src={`/images/articles/cefr-scales/coverphoto.jpg`}
                alt="weblog post slide"
                width={1000} height={400}
                style={{width:"100%"}}
              />
              <p className='carousel-caption-p'>معرفی مقیاس‌های CEFR</p>
              </div>
              </Link>
          </Carousel.Item>
      </Carousel>
            </div>
        </div>
    </div>
    </div>
    
    // <div className='box-topics py-5 border-0' style={{width:"300px"}}>
    //   <div className='text-center'>
    //     <div className='d-flex justify-content-center'>
    //     <h3 style={{fontFamily:"Vazirmatn"}} className='color-linear fs-1 mb-3'>آخرین مقالات</h3>
    //     {/* <h3 style={{fontFamily:"Vazirmatn"}} className='color-linear fs-1 mb-3 me-2'></h3> */}
    //     </div>
    //     <p style={{fontSize:"16px"}} className='color-gray-500 mb-3'>به روزترین مقالات زبان انگلیسی را در اینجا ببینید</p>
    //   </div>
    //   <Carousel indicators={false}>
    //     <Carousel.Item
    //           className='rounded'>
    //           <Link href={`/articles/evolve-books`}>
    //           <div className='image-container'>
    //             <Image
    //             className="d-block w-100 img-fluid"
    //             src={`/images/articles/evolve-books/coverphoto.jpg`}
    //             alt="weblog post slide"
    //             width={1000} height={400}
    //             style={{width:"100%"}}
    //           />
    //           <p className='carousel-caption-p'>معرفی کتاب های Evolve</p>
    //           </div>
    //           </Link>
    //       </Carousel.Item>
    //       <Carousel.Item
    //           className='rounded'>
    //           <Link href={`/articles/cefr-scales`}>
    //           <div className='image-container'>
    //             <Image
    //             className="d-block w-100 img-fluid"
    //             src={`/images/articles/cefr-scales/coverphoto.jpg`}
    //             alt="weblog post slide"
    //             width={1000} height={400}
    //             style={{width:"100%"}}
    //           />
    //           <p className='carousel-caption-p'>معرفی مقیاس‌های CEFR</p>
    //           </div>
    //           </Link>
    //       </Carousel.Item>
    //   </Carousel>
    // </div>
  );
};

export default CustomSlider;
