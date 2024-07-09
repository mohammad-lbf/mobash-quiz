import React from 'react';
import ListeningContainer from './ListeningContainer';
import Question from './Question'
// import Reading from './Reading';
import ReadingContainer from './ReadingContainer'
const Questions = ({data , reading , listening}) => {
    const multipleQuestions = data.filter(item => item.type == "multiple");
    const ReadingQuestions = data.filter(item => item.type == "reading");
    const ListeningQuestions = data.filter(item => item.type == "listening");

    return (
        <div className="d-flex flex-column align-items-center align-items-lg-end">

            {
                multipleQuestions.map(item => <Question key={item.id} {...item} />)
            }
            {
                reading &&
                <>
                <div className='text-center mt-2 w-100'>
                    <i class="bi bi-book-half fs-4 text-dark"></i>
                    <p className='fw-bold text-black px-2 pt-2 pb-1 rounded mb-3' style={{fontSize:"17px" , direction:"ltr"}}>Read the article and choose the correct option :</p>
                </div>
                <ReadingContainer reading={reading} />
                {ReadingQuestions.map(item => <Question key={item.id} {...item} />)}
                </>
            }
            {
                listening &&
                <>
                <div className='text-center mt-3 w-100'>
                    <i class="bi bi-earbuds fs-4 text-dark"></i>
                    <p className='fw-bold text-black px-2 pt-2 pb-1 rounded' style={{fontSize:"16.5px" , direction:"ltr"}}>Listen to the audio and choose the correct option :</p>
                </div>
                <ListeningContainer listening={listening} />
                {ListeningQuestions.map(item => <Question key={item.id} {...item} />)}
                </>
            }
        </div>
    );
};

export default Questions;