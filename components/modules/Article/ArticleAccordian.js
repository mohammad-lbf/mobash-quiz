import React from 'react';
import { Accordion } from 'react-bootstrap';


const ArticleAccordian = ({caption , children}) => {
  return (
    <Accordion className='w-100 mb-3'>
      <Accordion.Item eventKey="0">
        <Accordion.Header  style={{direction:"rtl"}} className='d-flex w-100  align-items-center'>
             <span className="w-100 text-end fw-bold ps-3" >{caption}</span>
          {/* <svg style={{width:"1.25rem"}} xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23052c65'><path fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/></svg> */}
        </Accordion.Header>
        <Accordion.Body className='rounded' style={{backgroundColor:"#f0f0f0"}}>
              {children}
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default ArticleAccordian;
