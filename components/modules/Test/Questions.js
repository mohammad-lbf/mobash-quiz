import React from 'react';
import Question from './Question'
import ReadingContainer from './ReadingContainer'
const Questions = ({data , readingText , listeningSrc}) => {
    const multipleQuestions = data.filter(item => item.type == "multiple");
    const ReadingQuestions = data.filter(item => item.type == "reading");
    const ListeningQuestions = data.filter(item => item.type == "listening");

    return (
        <div className="d-flex flex-column align-items-center align-items-lg-end">
            {
                multipleQuestions.map(item => <Question key={item.id} {...item} />)
            }
            {
                readingText &&
                <>
                <ReadingContainer reading={readingText} />
                {ReadingQuestions.map(item => <Question key={item.id} {...item} />)}
                </>
            }
            {
                listeningSrc &&
                ListeningQuestions.map(item => <Question key={item.id} {...item} />)
            }
        </div>
    );
};

export default Questions;