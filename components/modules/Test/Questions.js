import React from 'react';
import Question from './Question'
const Questions = ({data}) => {
    return (
        <div className="d-flex flex-column align-items-center align-items-lg-end">
            {data.map(item => <Question key={item.id} {...item} />)}
        </div>
    );
};

export default Questions;