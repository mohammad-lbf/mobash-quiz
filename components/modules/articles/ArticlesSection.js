import React from 'react';
import Card from '../Card';

const ArticlesSection = () => {
    return (
        <>
            {/* <h3 className="color-linear text-center text-lg-end">آزمون ها</h3> */}
            <div className="container">
            <h3 style={{fontFamily:"KalamehWeb-Bold" , color:"#090736" , fontSize:"23px"}} className='lh-lg text-center mb-2'>مقالات آکادمی زبان انگلیسی مبش</h3>
            <div style={{maxWidth:"300px"}} className="lbf-after-card-img mb-4 mt-0 mx-auto"></div>
                <div className="row justify-content-center row-cols-xxl-3 row-cols-lg-2 row-cols-sm-1 row-cols-md-2 row-cols-xs-1">
                    <div className='col-sm d-flex justify-content-center mb-3 mb-lg-0'>
                    <Card
                     slug={`/articles/cefr-scales`}
                     coverPhoto={`/images/articles/cefr-scales/coverPhoto.jpg`}
                     title={`مقیاس CEFR`}
                     caption={"استاندارد CEFR در سطح بندی زبان انگلیسی، مخفف Common European Framework of Reference for Languages است. یک استاندارد اروپایی برای زبان انگلیسی که..."}
                     buttonText="ادامه ی مطلب..."
                     />
                    </div>
                    <div className='col-sm d-flex justify-content-center'>
                    <Card
                     slug={`/articles/evolve-books`}
                     coverPhoto={`/images/articles/evolve-books/coverPhoto.jpg`}
                     title={`آشنایی با کتاب های Evolve`}
                     caption={"انتشارات دانشگاه کمبریج ، یکی از پیشگامان عرصه آموزش زبان، در سال 2019  یکی از بهترین کتب آموزش زبان انگلیسی را با عنوان   Evolve  منتشر کرد. این کتاب با همکاری تیم بزرگی از ..."}
                     buttonText="ادامه ی مطلب..."
                     />
                    </div>

          
                </div>
            </div>
        </>
    );
};

export default ArticlesSection;