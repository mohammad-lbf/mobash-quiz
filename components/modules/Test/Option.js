import React from 'react';

const Option = ({ optionText, index, questionNumber, selectedAnswer, changeHandler }) => {
    return (
        <label 
            htmlFor={`option${index + 1}${questionNumber}`} 
            style={{ cursor: "pointer", border: `2px solid ${selectedAnswer == index + 1 ? "#007bff" : "#728188"}` }} 
            className={`d-flex align-items-center w-100 py-3 ps-2 rounded mb-2 flex-row-reverse`}>
            <input 
                className="cur-poin me-2" 
                onChange={changeHandler} 
                type="radio" 
                id={`option${index + 1}${questionNumber}`} 
                value={optionText}  
                name={`option${questionNumber}`} />
            <label 
                style={{ direction: "ltr" }} 
                className="fw-200 me-1 cur-poin fs-13 fs-sm-15" 
                htmlFor={`option${index + 1}${questionNumber}`}>
                {optionText}
            </label>
        </label>
    );
};

export default Option;
