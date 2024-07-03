import React from 'react';
import Card from '../Card';

const TestsSection = () => {
    return (
        <>
            <h3 className="color-linear text-center text-lg-end">آزمون ها</h3>
            <div style={{width:"110px"}} className="lbf-after-card-img mx-lg-0 mb-4 mt-0 mx-auto"></div>
            <div className="container px-0">
                <div className="row article-vertical row-cols-xl-3 row-cols-lg-2 row-cols-sm-1 row-cols-md-2 row-cols-xs-1">
                    <div className='col-sm mb-3 mb-lg-0'>
                    <Card
                     slug={`grammar`}
                     title={`تعیین سطح گرامر`}
                     caption={`لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است`}
                     />
                    </div>
                    <div className='col-sm'>
                    <Card
                     slug={`public`}
                     title={`تعیین سطح عمومی`}
                     caption={`لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است`}
                     />
                    </div>

          
                </div>
            </div>
        </>
    );
};

export default TestsSection;