import React from 'react';
import Card from '../Card';

const CoursesSection = () => {
    return (
        <>
            {/* <h3 className="color-linear text-center text-lg-end">آزمون ها</h3> */}
            <div className="container">
            <h3 style={{fontFamily:"KalamehWeb-Bold" , color:"#090736" , fontSize:"27px"}} className='lh-lg text-center mb-2'>دوره ها و کلاسهای آموزشی</h3>
            <div style={{maxWidth:"300px"}} className="lbf-after-card-img mb-4 mt-0 mx-auto"></div>
                <div className="row justify-content-center row-cols-xxl-4 row-cols-lg-2 row-cols-sm-1 row-cols-md-2 row-cols-xs-1">
                    <div className='col-sm d-flex justify-content-center'>
                    <Card
                     slug={`/courses/termic`}
                     coverPhoto={`/images/courses/termic/coverphoto.jpg`}
                     title={`دوره های ترمیک و فشرده`}
                     caption={"در این دوره زبان انگلیسی در کنار تدریس هر 4 مهارت اصلی زبان انگلیسی شامل:        Reading، Writing، Listening، Speaking و زیرمهارت های ..."}
                     buttonText="مشاهده ی دوره"
                     />
                    </div>
                    <div className='col-sm d-flex justify-content-center'>
                    <Card
                     slug={`/courses/grammar`}
                     coverPhoto={`/images/courses/grammar/coverphoto.jpg`}
                     title={`دوره تخصصی گرامر`}
                     caption={"دوره جامع گرامر (Grammar) زبان انگلیسی یک فرصت عالی برای تقویت مهارت‌های زبانی و ارتقاء دانش زبان انگلیسی شماست که به کمک آن می‌توانید ..."}
                     buttonText="مشاهده ی دوره"
                     />
                    </div>
                    <div className='col-sm d-flex justify-content-center mb-3 mb-lg-0'>
                    <Card
                     slug={`/courses/discussion`}
                     coverPhoto={`/images/courses/discussion/coverphoto.jpg`}
                     title={`کلاس های مکالمه و بحث آزاد`}
                     caption={"هدف از کلاس های بحث آزاد (Free discussion)، استفاده از ساختار ها و لغات آموخته شده در مکالمات است. این کلاس ها تاثیر بسزایی..."}
                     buttonText="مشاهده ی دوره"
                     />
                    </div>
                    <div className='col-sm d-flex justify-content-center'>
                    <Card
                     slug={`/courses/entrance`}
                     coverPhoto={`/images/courses/Entrance/coverphoto.jpg`}
                     title={`کلاس های کنکوری و رفع اشکال`}
                     caption={"زبان انگلیسی یکی از شیرین‌ترین، کاربردی‌ترین و پرطرفدارترین زبان‌های دنیا محسوب می‌شود. افراد زیادی در سرتاسر جهان به این زبان صحبت می‌کنند ..."}
                     buttonText="مشاهده ی دوره"
                     />
                    </div>

          
                </div>
            </div>
        </>
    );
};

export default CoursesSection;