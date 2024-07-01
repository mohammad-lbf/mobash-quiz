import React from 'react';
import GrammerTestLevels from './GrammerTestLevels';
import ShareSecton from './ShareSecton';

const GrammarContent = () => {
    return (
        <div className='mt-2'>
            {/* <h5 className='article-subTitle'>تیتر 1</h5> */}
            <p 
            style={{fontSize:"15px" ,
            color:"#474d52" ,
            lineHeight:"2em" , 
            textAlign:"justify" ,
            fontFamily:"KalamehWeb-Medium"}} 
            className='border-bottom pb-2 mb-2'>
            ١.	این آزمون منحصراً به بررسی مهارت‌های شما در زمینه Grammar میپردازد.
            </p>
            <p 
            style={{fontSize:"15px" , 
            color:"#474d52" ,
            lineHeight:"2em" , 
            textAlign:"justify" , 
            fontFamily:"KalamehWeb-Medium"}} 
            className='border-bottom pb-2 mb-2'>
            ٢ .	برای شرکت در دوره‌های اختصاصی گرامر کاربرد دارد
            </p>
            <h5 
            style={{fontSize:"24px",color:"#464749" , 
            fontFamily:"KalamehWeb-Bold" , }} 
            className='text-center mt-4 pt-2 mb-4 pb-2'>
                چگونه در این آزمون شرکت کنم؟
            </h5>
            <p 
            style={{fontSize:"15px" , 
            color:"#474d52" ,lineHeight:"2em" , 
            textAlign:"justify" , 
            fontFamily:"KalamehWeb-Medium"}} 
            className='border-bottom pb-2 mb-2'>
            ١.	برای شرکت در هر سطح این آزمون کافیست بر روی دکمه &quot;شروع آزمون&quot; کلیک کنید.
            </p>
            <p 
            style={{fontSize:"15px" , 
            color:"#474d52" ,lineHeight:"2em" , 
            textAlign:"justify" , 
            fontFamily:"KalamehWeb-Medium"}} 
            className='border-bottom pb-2 mb-2'>
            ٢.	این آزمون در ٦ سطح برگزار می‌شود و شما در صورت قبولی در هر سطح می‌توانید آزمون سطح دیگر را شروع کنید.
            </p>
            <p 
            style={{fontSize:"15px" , 
            color:"#474d52" ,lineHeight:"2em" , 
            textAlign:"justify" , 
            fontFamily:"KalamehWeb-Medium"}} 
            className='border-bottom pb-2 mb-2'>
            ٣.	پس از اطمینان از سرعت اینترنت و قطع بودن هرگونه پروکسی و VPN بر روی دکمه شروع آزمون کلیک کنید.
            </p>
            <p 
            style={{fontSize:"15px" , 
            color:"#474d52" ,lineHeight:"2em" , 
            textAlign:"justify" , 
            fontFamily:"KalamehWeb-Medium"}} 
            className='border-bottom pb-2 mb-2'>
            ٤.	در طول آزمون از رفرش کردن یا بستن صفحه جدا خودداری نمایید.
            </p>
            <h5
            style={{fontSize:"24px",color:"#464749" , 
            fontFamily:"KalamehWeb-Bold" , }} 
            className='text-center mt-4 pt-2 mb-4 pb-2'>سطوح آزمون تعیین سطح گرامر:</h5>
            <GrammerTestLevels />

            <ShareSecton/>
        </div>
    );
};

export default GrammarContent;