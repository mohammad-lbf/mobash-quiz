import React from 'react';
import Card from '../Card';

const TestsSection = () => {
    return (
        <>
            <div className="container">
            <h3 style={{fontFamily:"KalamehWeb-Bold" , color:"#090736" , fontSize:"30px"}} className='lh-lg text-center mb-2'>آزمون ها</h3>
            <div style={{width:"200px"}} className="lbf-after-card-img mb-4 mt-0 mx-auto"></div>
                <div className="row justify-content-center row-cols-xl-3 row-cols-lg-2 row-cols-sm-1 row-cols-md-2 row-cols-xs-1">
                    <div className='col-sm d-flex justify-content-center mb-3 mb-lg-0'>
                    <Card
                     slug={`/tests/grammar`}
                     coverPhoto={`/images/tests/grammar.jpg`}
                     title={`تعیین سطح گرامر`}
                     caption={"1.	این آزمون منحصراً به بررسی مهارت‌های شما در زمینه Grammar میپردازد.     \n2.	برای شرکت در دوره‌های اختصاصی گرامر کاربرد دارد."}
                     buttonText="شرکت در آزمون"
                     />
                    </div>
                    <div className='col-sm d-flex justify-content-center'>
                    <Card
                     slug={`/tests/public`}
                     coverPhoto={`/images/tests/public.jpg`}
                     title={`تعیین سطح عمومی`}
                     caption={"1.	این آزمون به بررسی چهار مهارت اصلی: Grammar, Listening, Reading, vocabulary میپردازد.\n2.	برای شرکت در دوره‌های ترمیک کاربرد دارد."}
                    buttonText="شرکت در آزمون"
                     />
                    </div>
                </div>
            </div>
        </>
    );
};

export default TestsSection;