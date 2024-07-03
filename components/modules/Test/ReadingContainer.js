import React from 'react';
import { Accordion } from 'react-bootstrap';

const MyAccordion = () => {
  return (
    <Accordion className='w-100' defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header style={{direction:"ltr" }} className='d-flex w-100 justify-content-between align-items-center'>
          <span className="w-100 fw-bold" >click hear to open Reading Text</span>
          {/* <svg style={{width:"1.25rem"}} xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23052c65'><path fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/></svg> */}
        </Accordion.Header>
        <Accordion.Body className='rounded' style={{backgroundColor:"#29235c"}}>
          <p className='fw-bold lh-lg text-light' style={{textAlign:"justify" , direction:"ltr" , fontSize:"15px"}}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default MyAccordion;
