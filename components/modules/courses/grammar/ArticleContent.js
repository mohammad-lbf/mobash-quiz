import React from 'react';
import ArticleImage from '../../Article/ArticleImage';
import MainTitle from '../../Article/MainTitle';
import Paragraph from '../../Article/Paragraph';
import SubTitle from '../../Article/SubTitle';
import ArticleAccordian from '../../Article/ArticleAccordian';
import Link from 'next/link';
import ReadMoreBox from '../../Article/ReadMoreBox';

const ArticleContent = () => {
    const ulStyle = {
        listStyleType: 'inherit',
        padding: '0',
        direction: 'rtl',
        textAlign:"end",
        fontFamily: 'Arial, sans-serif',
      };
    
      // استایل برای آیتم‌های لیست
      const liStyle = {
        fontFamily:"Vazirmatn" ,fontSize:"16px" , lineHeight:"1.88" , textAlign:"justify" , direction:"rtl" , marginBottom:"20px"
      };
    return (
        <div className='mt-2'>
            <MainTitle>دوره تخصصی گرامر</MainTitle>
<Paragraph>دوره جامع گرامر (Grammar) زبان انگلیسی یک فرصت عالی برای تقویت مهارت‌های زبانی و ارتقاء دانش زبان انگلیسی شماست که به کمک آن می‌توانید ساختار جملات را به درستی متوجه شوید, اشتباهات رایج تان را کاهش داده و توانایی صحبت کردن (Speaking) و نوشتن (Writing) بهتری پیدا کنید.</Paragraph>

<MainTitle>هدف اصلی دوره جامع گرامر چیست؟</MainTitle>
<div className='d-flex flex-column align-items-center w-100'>
<div className='mx-auto' style={{background:"rgb(41,35,92)" , borderRadius:"15px" , color:"#fff" , padding:"20px" , marginBottom:"15px" , width:"calc(100% - 3rem)"}}>
<p className='text-light' style={{fontFamily:"KalamehWeb-Medium" ,fontSize:"15px" , lineHeight:"1.88" , textAlign:"justify" , direction:"rtl"}}>
1. تمرکز اصلی این دوره بر شکستن رویکرد سنتی تدریس گرامر است که بر اساس آموزش فرمولی بنا شده بود.
    </p>
</div>
<div className='mx-auto' style={{background:"rgb(41,35,92)" , borderRadius:"15px" , color:"#fff" , padding:"20px" , marginBottom:"15px" , width:"calc(100% - 3rem)"}}>
<p className='text-light' style={{fontFamily:"KalamehWeb-Medium" ,fontSize:"15px" , lineHeight:"1.88" , textAlign:"justify" , direction:"rtl"}}>
2. در رویکرد جدید از روش‌های نوآورانه استفاده شده که تاکید آن بر کاربرد عملی گرامر در زندگی روزمره است.
    </p>
</div>
<div className='mx-auto' style={{background:"rgb(41,35,92)" , borderRadius:"15px" , color:"#fff" , padding:"20px" , marginBottom:"15px" , width:"calc(100% - 3rem)"}}>
<p className='text-light' style={{fontFamily:"KalamehWeb-Medium" ,fontSize:"15px" , lineHeight:"1.88" , textAlign:"justify" , direction:"rtl"}}>
3. این مسئله به کاهش وابستگی به فرمول‌های گرامری و یادگیری مادام العمر زبان آموز منجر میشود.
    </p>
</div>
</div>

<MainTitle>مباحث دوره جامع گرامر چیست؟</MainTitle>
<ArticleAccordian caption={"برای مشاهده مباحث دوره کلیک کنید"}>
<Paragraph>موضوعات این دوره بصورت مبحثی به بحث و گفتگو گذاشته شده و جمع‌بندی می‌گردند. مباحث مهم دوره به شرح زیر میباشند:</Paragraph>
<Paragraph>1. زمان‌های انگلیسی (Tenses)</Paragraph>
<Paragraph>2. جملات شرطی (Conditionals)</Paragraph>
<Paragraph>3. افعال ناقص (Models)</Paragraph>
<Paragraph>4. جملات مجهول (The passive)</Paragraph>
<Paragraph>5. حروف اضافه (Prepositions)</Paragraph>
<Paragraph>6. افعال ایستا و اکشن (Gerunds and the Infinitives)</Paragraph>
<Paragraph>7. نقل قول (Reported speech)</Paragraph>
<Paragraph>علاوه بر موارد بالا به سایر ساختارهای گرامری از جمله: اسم و انواع آن (noun)، صفات (adjectives)، ضمایر (pronouns)، حروف تعریف (articles) و... نیز پرداخته خواهد شد.</Paragraph>
</ArticleAccordian>

<h3 className='text-end  w-100' style={{fontFamily:"KalamehWeb-Bold" ,fontSize:"25px" , fontWeight:"800" , color:"#4aa96c" , lineHeight:"1.88"  , direction:"rtl" }}>این دوره به چه کسانی پیشنهاد می‌شود؟</h3>
<div style={{ margin: '0 20px', padding: '20px 20px 0px 20px' }}>
                <ul style={ulStyle}>
                <li style={liStyle}>
<Paragraph>افرادی که می‌خواهند از پایه و بصورت اصولی و کاربردی گرامر زبان انگلیسی را بیاموزند.</Paragraph>
            
                </li>   
                <li style={liStyle}>
<Paragraph>کسانی که تجربه ناموفقی از یادگیری سنتی گرامر داشته اند.</Paragraph>
            
                </li>
                <li style={liStyle}>
<Paragraph>افرادی که قصد تصحیح ایرادات مکالمه خود را دارند.</Paragraph>
            
                </li>
                <li style={liStyle}>
            
<Paragraph>افرادی که در نوشتن متن (Writing) مشکل ساختاری دارند.</Paragraph>
            </li>
            <li style={liStyle}>
            
<Paragraph>افرادی که قصد شرکت در آزمون IELTS و یا TOEFL و یا PTE دارند.</Paragraph>
            </li>
                </ul>
            </div>
<br />
<ReadMoreBox title={"بیشتر بخوانید"}>
<Link href={"/tests/grammar"} className="text-primary fw-bold my-4" style={{fontSize:"16px"}}>برای شرکت در آزمون تعیین سطح گرامر کلیک کنید</Link>

</ReadMoreBox>

<MainTitle>سوالات متداول:</MainTitle>
<ArticleAccordian caption={"چه موضوعاتی در این دوره آموزش داده می‌شود؟"}>
<Paragraph>وابسته به نیاز زبان آموز, تمامی مباحث گرامری از سطح مبتدی (A1) تا پیشرفته (C2) آموزش داده خواهد شد.</Paragraph>
</ArticleAccordian>
<ArticleAccordian caption={"چقدر زمان لازم است تا این دوره را به پایان برسانم؟"}>
<Paragraph>پس از شرکت در آزمون تعیین سطح گرامر و تحلیل کارنامه توسط استاد, برنامه آموزشی اختصاصی برای شما طراحی خواهد شد که در آن تعداد جلسات مورد نیاز و حداقل مدت زمانی که برای به اتمام رساندن این دوره نیاز دارید برآورده شده است.</Paragraph>
</ArticleAccordian>
<ArticleAccordian caption={"شیوه برگزاری دوره چگونه است؟"}>
<Paragraph>تمامی کلاس‌ها بصورت آنلاین, خصوصی و در بستر پلتفرم اسکای روم برگزار می‌شوند.</Paragraph>
</ArticleAccordian>
<ArticleAccordian caption={"منابع و کتاب‌های درسی این دوره چیست؟"}>
<Paragraph>منابع اصلی این دوره به صورت جزوه توسط استاد برای شما ارسال خواهد شد اما چهارچوب اصلی دوره بر دو کتاب زیر استوار است:</Paragraph>
<Paragraph>1. English Grammar in use.</Paragraph>
<Paragraph>2. Understanding and using English grammar.</Paragraph>
</ArticleAccordian>
<ArticleAccordian caption={"چگونه می‌توانم در این دوره ثبت نام کنم؟"}>
<p style={{fontFamily:"KalamehWeb-Bold" , fontSize:"16px"}}>برای دریافت مشاوره و راهنمایی بیشتر دراین زمینه از طریق راه‌های ارتباطی سایت با استاد در تماس باشید.</p>
</ArticleAccordian>

        </div>
    );
};

export default ArticleContent;