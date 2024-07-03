import React from 'react';
import ReportQuestion from './ReportQuestion'
const ReportQuestions = ({data , reading , listeningSrc}) => {
    const multipleQuestions = data.filter(item => item.type == "multiple");
    const ReadingQuestions = data.filter(item => item.type == "reading");
    const ListeningQuestions = data.filter(item => item.type == "listening");

    return (
        <div className="d-flex flex-column align-items-center align-items-lg-end">
            {
                
                multipleQuestions.map(item => <ReportQuestion key={item.id} {...item} />)
            }
            {
                reading &&
                ReadingQuestions.map(item => <ReportQuestion key={item.id} {...item} />)
            }
            {
                listeningSrc &&
                ListeningQuestions.map(item => <ReportQuestion key={item.id} {...item} />)
            }
        </div>
    );
};

export default ReportQuestions;