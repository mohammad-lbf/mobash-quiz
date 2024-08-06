import Link from 'next/link';
import React from 'react';
import ArticleImage from '../../Article/ArticleImage';
import MainTitle from '../../Article/MainTitle';
import Paragraph from '../../Article/Paragraph';
import ReadMoreBox from '../../Article/ReadMoreBox';
import SubTitle from '../../Article/SubTitle';
import ArticleAccordian from '../../Article/ArticleAccordian';

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
            {/* <MainTitle>کلاس‌ های بحث آزاد و مکالمه</MainTitle> */}

<MainTitle>کلاس های بحث آزاد</MainTitle>
<p className='text-center mb-3' style={{fontFamily:"KalamehWeb-Bold" ,fontSize:"23px" , lineHeight:"1.88" , textAlign:"justify" , direction:"rtl"}}>اطلاعات کلی:</p>
<div className='d-flex flex-column align-items-center w-100'>
<div className='mx-auto' style={{background:"rgb(41,35,92)" , borderRadius:"15px" , color:"#fff" , padding:"20px" , marginBottom:"15px" , width:"calc(100% - 3rem)"}}>
<p className='text-light' style={{fontFamily:"KalamehWeb-Medium" ,fontSize:"15px" , lineHeight:"1.88" , textAlign:"justify" , direction:"rtl"}}>
    1. هدف از کلاس های بحث آزاد (Free discussion)، استفاده از ساختار ها و لغات آموخته شده در مکالمات است. این کلاس ها تاثیر بسزایی در فصاحت و روان صحبت کردن زبان آموزان دارند.</p>
</div>
<div className='mx-auto' style={{background:"rgb(41,35,92)" , borderRadius:"15px" , color:"#fff" , padding:"20px" , marginBottom:"15px" , width:"calc(100% - 3rem)"}}>
<p className='text-light' style={{fontFamily:"KalamehWeb-Medium" ,fontSize:"15px" , lineHeight:"1.88" , textAlign:"justify" , direction:"rtl"}}>
    2. در هرجلسه از این کلاس‌‌ها، یک موضوع توسط استاد به بحث گذاشته شده و درخصوص آن, بحث و تبادل نظر صورت میگیرد.</p>
</div>
<div className='mx-auto' style={{background:"rgb(41,35,92)" , borderRadius:"15px" , color:"#fff" , padding:"20px" , marginBottom:"15px" , width:"calc(100% - 3rem)"}}>
<p className='text-light' style={{fontFamily:"KalamehWeb-Medium" ,fontSize:"15px" , lineHeight:"1.88" , textAlign:"justify" , direction:"rtl"}}>3. علاوه بر بهبود مهارت کلامی، این کلاس‌ها به یادگیری کلمات جدید و رفع اشکال‌های گرامری شما نیز کمک می‌کنند.</p>
</div>
</div>

<SubTitle>کلاس های بحث آزاد در سه سطح:</SubTitle>
<div style={{ margin: '0 20px', padding: '20px 20px 0px 20px' }}>
                <ul style={ulStyle}>
                <li style={liStyle}>
<Paragraph>متوسط (Intermediate)</Paragraph>
            
                </li>   
                <li style={liStyle}>
<Paragraph>فوق متوسط (Upper Intermediate)</Paragraph>
            
                </li>
                <li style={liStyle}>
            
<Paragraph>پیشرفته (Advanced) برگزار میگردند.</Paragraph>
                </li>
                </ul>
            </div>

<h3 className='text-end  w-100' style={{fontFamily:"KalamehWeb-Bold" ,fontSize:"25px" , fontWeight:"800" , color:"#4aa96c" , lineHeight:"1.88"  , direction:"rtl" }}>کلاس بحث آزاد برای چه افرادی مناسب است؟</h3>
<div style={{ margin: '0 20px', padding: '20px 20px 0px 20px' }}>
                <ul style={ulStyle}>
                <li style={liStyle}>
<Paragraph>افرادی که در سطح متوسط و پیشرفته هستند اما نمی‌توانند مکالمه کنند.</Paragraph>
            
                </li>   
                <li style={liStyle}>
            
<Paragraph>افرادی که لیسنینگ(Listening) خوبی دارند اما نمی‌توانند به خوبی مکالمه کنند.</Paragraph>
                </li>
                <li style={liStyle}>
<Paragraph>افرادی که به گرامر انگلیسی ازجمله 12 زمان زبان انگلیسی مسلط هستند.</Paragraph>
            
                </li>
                <li style={liStyle}>
            
<Paragraph>افرادی که به دوره های بدون کتاب آموزشی علاقه مند میباشند.</Paragraph>
                </li>
                </ul>
            </div>
<br />
<ReadMoreBox title={"بیشتر بخوانید"}>

<Link href="/courses/grammar" className='text-primary fw-bold mb-3' style={{fontSize:"16px" , fontFamily:"KalamehWeb-Bold"}}>برای یادگیری اختصاصی گرامر کلیک کنید</Link>
</ReadMoreBox>
<MainTitle>کلاس های مکالمه</MainTitle>

<p className='text-center mb-3' style={{fontFamily:"KalamehWeb-Bold" ,fontSize:"23px" , lineHeight:"1.88" , textAlign:"justify" , direction:"rtl"}}>اطلاعات کلی:</p>
<div className='d-flex flex-column align-items-center w-100'>
<div className='mx-auto' style={{background:"rgb(41,35,92)" , borderRadius:"15px" , color:"#fff" , padding:"20px" , marginBottom:"15px" , width:"calc(100% - 3rem)"}}>
<p className='text-light' style={{fontFamily:"KalamehWeb-Medium" ,fontSize:"15px" , lineHeight:"1.88" , textAlign:"justify" , direction:"rtl"}}>
1. این دوره مناسب کسانی است که به‌دنبال کلاسی هستند که تمرکز اصلی آن روی صحبت کردن به زبان انگلیسی و مهارت‌های مرتبط با آن باشد و پیشرفت منطقی در توانایی گفت و گو برایشان مهم است.
    </p>
</div>
<div className='mx-auto' style={{background:"rgb(41,35,92)" , borderRadius:"15px" , color:"#fff" , padding:"20px" , marginBottom:"15px" , width:"calc(100% - 3rem)"}}>
<p className='text-light' style={{fontFamily:"KalamehWeb-Medium" ,fontSize:"15px" , lineHeight:"1.88" , textAlign:"justify" , direction:"rtl"}}>
2. این کلاسها شامل ۱۶ ترم آموزشی هستند که هرکدام دارای 10 جلسه میباشند.
    </p>
</div>
<div className='mx-auto' style={{background:"rgb(41,35,92)" , borderRadius:"15px" , color:"#fff" , padding:"20px" , marginBottom:"15px" , width:"calc(100% - 3rem)"}}>
<p className='text-light' style={{fontFamily:"KalamehWeb-Medium" ,fontSize:"15px" , lineHeight:"1.88" , textAlign:"justify" , direction:"rtl"}}>
3. منابع اصلی این کلاسها, سری کتاب های Oxford word skills و Speak Now میباشند.
</p>
</div>
</div>

<h3 className='text-end  w-100' style={{fontFamily:"KalamehWeb-Bold" ,fontSize:"25px" , fontWeight:"800" , color:"#4aa96c" , lineHeight:"1.88"  , direction:"rtl" }}>این دوره به چه کسانی پیشنهاد می‌شود؟</h3>
<div style={{ margin: '0 20px', padding: '20px 20px 0px 20px' }}>
                <ul style={ulStyle}>
                <li style={liStyle}>
            
<Paragraph>افرادی که در سطح ابتدایی, متوسط و یا متوسط به بالا هستند اما نمی‌توانند مکالمه کنند.</Paragraph>
                </li>   
                <li style={liStyle}>
<Paragraph>افرادی که لیسنینگ(Listening) خوبی دارند اما نمی‌توانند به خوبی مکالمه کنند.</Paragraph>
            
                </li>
                <li style={liStyle}>
<Paragraph>افراد پرمشغله که می‌خواهند در هر مکان و زمانی به آموزش‌های باکیفیت دسترسی داشته باشند.</Paragraph>
            
                </li>
                <li style={liStyle}>
<Paragraph>افرادی که می‌خواهند برای آمادگی در آزمون‌های بین المللی، مهارت مکالمه خود را ارتقا داده و دایره لغات و اصطلاحات خود را در موضوع‌های رایج افزایش دهند.</Paragraph>
            
                </li>
                </ul>
            </div>
            <MainTitle>سوالات متداول:</MainTitle>
            <ArticleAccordian caption={"ویژگی کلاس های بحث آزاد چیست؟"}>
            <Paragraph>
            این کلاس ها بدون کتاب آموزشی و بصورت موضوعی برگزار میگردند. 
            </Paragraph>
            <Paragraph>
            تمرکز اصلی این کلاس ها بر تقویت مهارت speaking بوده و صرفاً مناسب افرادی است که دارای سطح متوسط و بالاتر از آن
میباشند. 
            </Paragraph>
            </ArticleAccordian>
            <ArticleAccordian caption={"ویژگی کلاس های مکالمه چیست؟"}>
            <Paragraph>
            این کلاس ها با دو کتاب آموزشی now speak و skills word oxford و بصورت ترمیک (16 ترم 10 جلسه ای) برگزار می شوند
            </Paragraph>
            <Paragraph>
            این کلاس ها برای تمامی سطوح از ابتدایی تا پیشرفته مناسب می باشند. 
            </Paragraph>
            </ArticleAccordian>
            <ArticleAccordian caption={"شیوه برگزاری دوره چگونه است؟"}>
            <Paragraph>
            تمامی کلاس ها بصورت آنلاین, خصوصی و در بستر پلتفرم اسکای روم برگزار میشوند. 
            </Paragraph>
            </ArticleAccordian>
            <ArticleAccordian caption={"چگونه میتوانم در این دوره ثبت نام کنم؟"}>
            <Paragraph>
            برای اطلاع از شرایط ثبت نام و هزینه های دوره می توانید از طریق راه های ارتباطی موجود در سایت (واتساپ و اینستاگرام)
اقدام نمایید. 
            </Paragraph>
            </ArticleAccordian>
        </div>
    );
};

export default ArticleContent;