import React from 'react';
import GrammerBreadCrumb from './GrammarBreadcrumb'
import TestAuthor from './TestAuthor';
import ArticleContent from './GrammarContent';
import GrammarTestImage from './GrammarTestImage';

const GrammarMainSection = () => {
    return (
        <div className='pt-4 pt-sm-0'>
            <GrammerBreadCrumb />
            <h3 className='article-section__title mb-3'>آزمون تعیین سطح گرامر</h3>
            {/* Duration */}
            <div className='d-flex justify-content-between align-items-center'>
                <TestAuthor />
                <span className='fw-bold gray-text-color'>30 خرداد 1403</span>
            </div>
                <GrammarTestImage />
                <ArticleContent />
        </div>
    );
};

export default GrammarMainSection;