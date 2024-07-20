import React, { Children } from 'react';
import BreadCrumb from '../BreadCrumb';
import ArticleAuthor from './ArticleAuthor';
import ArticleCoverPhoto from './ArticleCoverPhoto';


const ArticleMainSection = ({mainTitle , slug , coverPhoto , datePublished , category , categoryName}) => {
    return (
        <div className='pt-4 pt-sm-0 d-flex flex-column justify-content-center align-items-center'>
            <BreadCrumb firstLink={category} firstLinkText={categoryName} secondLink={slug} secondLinkText={mainTitle} />
            <h3
             style={{fontFamily:"KalamehWeb-Bold" , color: "#03004e" , fontSize: "27px" , lineHeight:"40px"}}
              className='my-4 text-center text-sm-end'>
                {mainTitle}
            </h3>
            {/* Duration */}
            <div className='d-flex justify-content-between justify-content-md-center align-items-center w-100'>
                <ArticleAuthor />
                <span className='fw-bold gray-text-color me-md-3'>{datePublished}</span>
            </div>
                <ArticleCoverPhoto coverPhoto={coverPhoto} />
        </div>
    );
};

export default ArticleMainSection;