import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { Carousel } from 'react-bootstrap';

const CustomSlider = ({articles}) => {
  return (
    <div className='box-topics py-5 border-0'>
      <div className='text-center'>
        <div className='d-flex justify-content-center'>
        <h3 style={{fontFamily:"Vazirmatn"}} className='color-linear fs-1 mb-3'>وبلاگ</h3>
        <h3 style={{fontFamily:"Vazirmatn"}} className='color-linear fs-1 mb-3 me-2'>codingLBF</h3>
        </div>
        <p style={{fontSize:"16px"}} className='color-gray-500 mb-3'>به روزترین مقالات برنامه نویسی را در اینجا ببینید</p>
      </div>
      <Carousel indicators={false}>
        {
          articles &&
          articles.slice(-3).map(item => <Carousel.Item
              key={item.id}
              className='rounded'>
              <Link href={`/weblog/${item.slug}`}>
              <div className='image-container'>
                <Image
                className="d-block w-100 img-fluid"
                src={`/images/articles/${item.slug}/${item.coverPhoto}`}
                alt="weblog post slide"
                width={1000} height={400}
                style={{width:"100%" }}
              />
              <p className='carousel-caption-p'>{item.mainTitle}</p>
              </div>
              </Link>
          </Carousel.Item>)
        }
      </Carousel>
    </div>
  );
};

export default CustomSlider;
