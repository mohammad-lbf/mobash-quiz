import React from 'react';

const ReportOption = ({ optionText, index, correctanswer, clientAnswer, status }) => {
    const borderColor = correctanswer == index + 1 ? "#28a745" : clientAnswer == index + 1 && status == "incorrect" ? "#DC3545" : "#6c757d";
    const bgColor = correctanswer == index + 1 ? "bg-success text-light" : clientAnswer == index + 1 && status == "incorrect" ? "bg-danger text-light" : "";

    return (
        <div
            style={{ border: `2px solid ${borderColor}` }}
            className={`${bgColor} d-flex align-items-center w-100 py-3 ps-2 rounded mb-2 flex-row-reverse`}>
            <p className="fw-200 me-1 cur-poin fs-13 fs-sm-15">({index + 1})</p>
            <p style={{direction:"ltr"}} className="fw-200 me-1 cur-poin fs-13 fs-sm-15">{optionText}</p>
        </div>
    );
};

export default ReportOption;
