import React from 'react';
import Card from '../Card';

const TestsSection = () => {
    return (
        <>
            <div className="container px-0">
            <h3 style={{fontFamily:"KalamehWeb-Bold" , color:"#090736" , fontSize:"30px"}} className='lh-lg text-center mb-2'>آزمون ها</h3>
            <div style={{width:"200px"}} className="lbf-after-card-img mb-4 mt-0 mx-auto"></div>
                <div className="row justify-content-center row-cols-xl-3 row-cols-lg-2 row-cols-sm-1 row-cols-md-2 row-cols-xs-1">
                    <div className='col-sm d-flex justify-content-center mb-3 mb-lg-0'>
                    <Card
                     slug={`/tests/grammar`}
                     coverPhoto={`/images/tests/grammar.png`}
                     title={`تعیین سطح گرامر`}
                     caption={"-	 به ارزیابی مهارت‌ شما در زمینه Grammar میپردازد.     \n-	برای شرکت در دوره‌های اختصاصی گرامر کاربرد دارد."}
                     buttonText="شرکت در آزمون"
                     />
                    </div>
                    <div className='col-sm d-flex justify-content-center mb-3 mb-lg-0'>
                    <Card
                     slug={`/tests/public`}
                     coverPhoto={`/images/tests/public-1.png`}
                     title={`تعیین سطح جامع`}
                     caption={"-	 به ارزیابی چهار مهارت اصلی زبان انگلیسی میپردازد.\n-	برای شرکت در دوره‌های ترمیک کاربرد دارد."}
                    buttonText="شرکت در آزمون"
                     />
                    </div>
                    <div className='col-sm d-flex justify-content-center'>
                    <Card
                     slug={`/tests/general`}
                     coverPhoto={`/images/tests/general.png`}
                     title={`تعیین سطح عمومی`}
                     caption={"-  آزمون تعیین سطح با استاندارد های دانشگاه کمبریج.\n-	تعیین سطح سریع با 25 سوال"}
                    buttonText="به زودی..."
                     />
                    </div>
                </div>
            </div>
        </>
    );
};

export default TestsSection;