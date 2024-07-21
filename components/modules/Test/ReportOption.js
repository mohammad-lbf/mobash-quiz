import React from 'react';

const ReportOption = ({ optionText, index, correctanswer, clientAnswer, status }) => {
    const borderColor = optionText === correctanswer ? "#28a745" : optionText === clientAnswer && status === "incorrect" ? "#DC3545" : "#6c757d";
    const bgColor = optionText === correctanswer ? "bg-success text-light" : optionText === clientAnswer && status === "incorrect" ? "bg-danger text-light" : "";
    return (
        <div
            style={{ border: `2px solid ${borderColor}` }}
            className={`${bgColor} d-flex align-items-center w-100 py-3 ps-2 rounded mb-2 flex-row-reverse`}>
            <p className="fw-200 me-1 cur-poin fs-13 fs-sm-15">({index + 1})</p>
            <p style={{direction:"ltr" , textAlign:"start"}} className="fw-200 me-1 cur-poin fs-13 fs-sm-15">{optionText}</p>
        </div>
    );
};

export default ReportOption;
