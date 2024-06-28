import React, { useState } from 'react';

const ReportQuestion = ({number ,question , option1 , option2 , option3 , option4 , status , correctanswer , clientAnswer}) => {
    console.log(status)
    const changeHandler = (e)=>{
        setAnswer(e.target.value);
    }

    return (
        <div style={{fontSize:"17px"}} className="text-black fw-bold d-flex flex-column align-items-end w-100 border-bottom border-primary pb-3 mb-2">
        <div className="d-flex flex-column align-items-end mb-3">
            <div className="d-flex align-items-center mt-2">
            <p style={{direction:"ltr"}} className="text-start me-1 mb-0 mt-1">{question}</p>
            <p className={`text-end me-1 bg-primary p-2 pb-1 rounded lh-0 ${status === "correct" ? "bg-success text-white" : status=="incorrect" ? "bg-danger text-white" : status=="no-answer" && "bg-warning text-dark"}`}>{number}</p>
            </div>
        </div>
        <div className='w-100'>
            <div style={{border:`2px solid ${correctanswer==1 ? "#28a745" : clientAnswer==1 && status=="incorrect" ? "#DC3545" : "#6c757d"}`}} className={`${correctanswer==1 ? "bg-success text-light" : clientAnswer==1 && status=="incorrect" ? "bg-danger text-light" : ""} d-flex align-items-center w-100 py-3 ps-2 rounded mb-2 flex-row-reverse`}>
            <p className="fw-200 me-1 cur-poin fs-13 fs-sm-15">(1</p>
                <p className="fw-200 me-1 cur-poin fs-13 fs-sm-15">{option1}</p>
                
            </div>
            <div style={{border:`2px solid ${correctanswer==2 ? "#28a745" : clientAnswer==2 && status=="incorrect" ? "#DC3545" : "#6c757d"}`}} className={`${correctanswer==2 ? "bg-success text-light" : clientAnswer==2 && status=="incorrect" ? "bg-danger text-light" : ""}  d-flex align-items-center w-100 py-3 ps-2 rounded mb-2 flex-row-reverse`}>
            <p className="fw-200 me-1 cur-poin fs-13 fs-sm-15">(2</p>
                <p className="fw-200 me-1 cur-poin fs-13 fs-sm-15">{option2}</p>
            </div>
            <div style={{border:`2px solid ${correctanswer==3 ? "#28a745" : clientAnswer==3 && status=="incorrect" ? "#DC3545" : "#6c757d"}`}} className={`${correctanswer==3 ? "bg-success text-light" : clientAnswer==3 && status=="incorrect" ? "bg-danger text-light" : ""}  d-flex align-items-center w-100 py-3 ps-2 rounded mb-2 flex-row-reverse`} >
            <p className="fw-200 me-1 cur-poin fs-13 fs-sm-15">(3</p>
                <p className="fw-200 me-1 cur-poin fs-13 fs-sm-15">{option3}</p>
            </div>
            <div style={{border:`2px solid ${correctanswer==4 ? "#28a745" : clientAnswer==4 && status=="incorrect" ? "#DC3545" : "#6c757d"}`}} className={`${correctanswer==4 ? "bg-success text-light" : clientAnswer==4 && status=="incorrect" ? "bg-danger text-light" : ""}  d-flex align-items-center w-100 py-3 ps-2 rounded mb-2 flex-row-reverse`} >
            <p className="fw-200 me-1 cur-poin fs-13 fs-sm-15">(4</p>
                <p className="fw-200 me-1 cur-poin fs-13 fs-sm-15">{option4}</p>
            </div>
        </div>
    </div>
    );
};

export default ReportQuestion;