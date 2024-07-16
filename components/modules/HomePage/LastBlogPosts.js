// pages/MyComponent.js
import React from 'react';
import Card from '../Card';

const LastBlogPosts = ({articles}) => {
  return (
    <div className='container'>
        <div className='mb-3 d-flex flex-column align-items-center align-items-lg-start'>

          {/* <div style={{width:"150px"}} className="lbf-after-card-img mx-0"></div> */}
        </div>
        <div className='row article-vertical row-cols-lg-3 row-cols-sm-1 row-cols-md-2 row-cols-xs-1'>
          {
            articles &&
            articles.slice(-3).map(article => <div key={article.id} className='col-sm'><Card image={article.coverPhoto} title={article.mainTitle} duration={article.duration} slug={article.slug} /></div>)
          }

        </div>
    </div>
  );
};

export default LastBlogPosts;
