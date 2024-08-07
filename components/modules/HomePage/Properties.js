import React from 'react';

const Properties = () => {
    return (
        <div className='container px-0 mt-0 mt-lg-4'>
            <h3 style={{fontSize:"30px", fontFamily:"KalamehWeb-Bold", color:"#03004e"}} className="pt-0 pt-lg-4 fw-bold text-center mb-4 lh-lg fs-2">به روز ترین تکنیک های یادگیری زبان در آکادمی مبش</h3>
            <p className='text-secondary text-center mb-0 mb-lg-4 lh-lg' style={{fontSize:"20px", fontFamily:"KalamehWeb-Medium", }}>بهترین شیوه یادگیری زبان انگلیسی</p>
        <div className='row justify-content-center align-items-center pt-4'>
            <div className='col-12 col-lg-4 d-flex justify-content-lg-end justify-content-center'>
                <div style={{overflow:"hidden" , maxWidth:"350px" , height:"400px" , borderRadius:"10px" , backgroundColor:"#f0f0f0"}} className="px-4 property-card mb-3 mb-lg-0">
                    <div className='text-center w-100 mt-4 pt-3' style={{fontSize:"50px"}}>
                    <i class="bi bi-clipboard-check-fill text-success"></i>
                    </div>
                    <h2 className='mt-4 text-center lh-lg mb-4' style={{fontSize:"27px" , fontFamily:"KalamehWeb-Bold"}}>آموزش اصولی</h2>
                    <p className='mt-3 lh-lg ' style={{fontFamily:"KalamehWeb-Medium"}}>
                    با یادگیری زبان از طریق آکادمی مبش, شما با برترین منابع موجود در دنیا از جمله کتاب‌های آکسفورد، کمبریج و ... زبان انگلیسی را با شیوه اصولی فرامیگیرید.
                    </p>
                </div>
            </div>
            <div className='col-12 col-lg-4 d-flex justify-content-center'>
            <div style={{overflow:"hidden" , maxWidth:"350px" , height:"400px" , borderRadius:"10px" , backgroundColor:"#f0f0f0"}} className="px-4 property-card mb-3 mb-lg-0">
                    <div className='text-center w-100 mt-4 pt-3' style={{fontSize:"50px"}}>
                    <i class="bi bi-journal-bookmark-fill text-success"></i>
                    </div>
                    <h2 className='mt-4 text-center lh-lg mb-4' style={{fontSize:"27px" , fontFamily:"KalamehWeb-Bold"}}>تمرکز بر نکات کاربردی</h2>
                    <p className='mt-3 lh-lg ' style={{fontFamily:"KalamehWeb-Medium"}}>
                    یادگیری کاربردی زبان انگلیسی با کارهایی که هر روز انجام می‌دهید باعث تثبیت یادگیری‌ها می‌‌شود و انگیزه بیشتری برای ادامه مسیر خواهید داشت.
                    </p>
                </div>
            </div>
            <div className='col-12 col-lg-4 d-flex justify-content-lg-start justify-content-center'>
            <div style={{overflow:"hidden" , maxWidth:"350px" , height:"400px" , borderRadius:"10px" , backgroundColor:"#f0f0f0"}} className="px-4 property-card mb-3 mb-lg-0">
                    <div className='text-center w-100 mt-4 pt-3' style={{fontSize:"50px"}}>
                    <i class="bi bi-ui-checks-grid text-success"></i>
                    </div>
                    <h2 className='mt-4 text-center lh-lg mb-4' style={{fontSize:"27px" , fontFamily:"KalamehWeb-Bold"}}>آزمون های تعین سطح</h2>
                    <p className='mt-3 ' style={{fontFamily:"KalamehWeb-Medium" , lineHeight:"25px"}}>
                        با شرکت در آزمون های رایگان اما قابل اعتماد آکادمی مبش که بر اساس استاندارد های کمبریج و مقیاس CEFR طراحی شده اند، به درک درستی از توانایی های خود در استفاده از زبان انگلیسی خواهید رسید.
                    </p>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Properties;