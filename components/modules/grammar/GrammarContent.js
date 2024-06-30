import React from 'react';
import GrammerTestLevels from './GrammerTestLevels';
import ShareSecton from './ShareSecton';

const GrammarContent = () => {
    return (
        <div className='mt-2'>
            {/* <h5 className='article-subTitle'>تیتر 1</h5> */}
            <p style={{fontSize:"15px" , fontFamily:"Vazirmatn"}} className='text-dark mb-2 lh-lg'>
            1.	این آزمون منحصراً به بررسی مهارت‌های شما در زمینه Grammar میپردازد.
            </p>
            <p style={{fontSize:"15px" , fontFamily:"Vazirmatn"}} className='text-dark mb-2 lh-lg'>
            2.	برای شرکت در دوره‌های اختصاصی گرامر کاربرد دارد
            </p>
            <h5 className='article-subTitle mt-4 mb-2'>چگونه در این آزمون شرکت کنم؟</h5>
            <p style={{fontSize:"15px" , fontFamily:"Vazirmatn"}} className='text-dark mb-2 lh-lg'>
            1.	برای شرکت در هرسطح این آزمون کافیست بر روی دکمه &quot;شروع آزمون&quot; کلیک کنید.
            </p>
            <p style={{fontSize:"15px" , fontFamily:"Vazirmatn"}} className='text-dark mb-2 lh-lg'>
            2.	این آزمون در 6 سطح برگزار می‌شود و شما در صورت قبولی در هر سطح می‌توانید آزمون سطح دیگر را شروع کنید.
            </p>
            <p style={{fontSize:"15px" , fontFamily:"Vazirmatn"}} className='text-dark mb-2 lh-lg'>
            3.	پس از اطمینان از سرعت اینترنت و قطع بودن هرگونه پروکسی و VPN بر روی دکمه شروع آزمون کلیک کنید.
            </p>
            <p style={{fontSize:"15px" , fontFamily:"Vazirmatn"}} className='text-dark mb-2 lh-lg mb-4'>
            4.	در طول آزمون از رفرش کردن یا بستن صفحه جدا خودداری نمایید.
            </p>
            
            <GrammerTestLevels />

            <ShareSecton/>
        </div>
    );
};

export default GrammarContent;