import React from 'react';
import ReportOption from './ReportOption';

const ReportQuestion = ({ number, question, options, status, correctanswer, clientAnswer , type }) => {
    return (
        <div style={{ fontSize: "17px" }} className="text-black fw-bold d-flex flex-column align-items-end w-100 border-bottom border-primary pb-3 mb-2">
            <div className="d-flex flex-column align-items-end mb-3">
                <div className="d-flex align-items-center mt-2">
                    <p style={{ direction: "ltr" }} className="text-start me-1 mb-0 mt-1">{question}</p>
                    <p className={`text-end me-1 bg-primary p-2 pb-1 rounded lh-0 ${status === "correct" ? "bg-success text-white" : status === "incorrect" ? "bg-danger text-white" : status === "no-answer" && "bg-warning text-dark"}`}>{number}</p>
                    {type=="reading" ? <i class="bi bi-book-half pt-2 me-1 rounded text-black" style={{fontSize:"14px"}}></i> : type=="listening" ? <i class="bi bi-earbuds pt-2 me-1 rounded text-black" style={{fontSize:"14px"}}></i> : null}
                </div>
            </div>
            <div className='w-100'>
                {options.map((option, index) => (
                    <ReportOption
                        key={index}
                        optionText={option}
                        index={index}
                        correctanswer={correctanswer}
                        clientAnswer={clientAnswer}
                        status={status}
                    />
                ))}
            </div>
        </div>
    );
};

export default ReportQuestion;
