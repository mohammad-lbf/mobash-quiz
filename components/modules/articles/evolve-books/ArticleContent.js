import Link from 'next/link';
import React from 'react';
import ArticleImage from '../../Article/ArticleImage';
import MainTitle from '../../Article/MainTitle';
import Paragraph from '../../Article/Paragraph';
import SubTitle from '../../Article/SubTitle';
import ArticleAccordian from '../../Article/ArticleAccordian';
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
        fontFamily:"Vazirmatn" ,fontSize:"16px" , lineHeight:"1.88" , textAlign:"justify" , direction:"rtl" , marginBottom:"27px"
      };

    return (
        <div className='mt-2 d-flex flex-column align-items-center'>
            <>
            
            <MainTitle>آشنایی با مجموعه کتاب های Evolve:</MainTitle>
            <div style={{ margin: '0 20px', padding: '20px 20px 0px 20px' }}>
                <ul style={ulStyle}>
                <li style={liStyle}>
                انتشارات دانشگاه کمبریج ، یکی از پیشگامان عرصه آموزش زبان، در سال 2019  یکی از بهترین کتب آموزش زبان انگلیسی را با عنوان   Evolve  منتشر کرد.
                </li>   
                <li style={liStyle}>
                این کتاب با همکاری تیم بزرگی از نویسندگان، اساتید و مشاورین رسمی دانشگاه کمبریج تهیه شده است تا بتواند تمامی نیازهای دانشجویان در یادگیری زبان انگلیسی را برآورده کند.
                </li>
                </ul>
            </div>
            <div style={{maxWidth:"400px"}}>
            <video className='rounded w-100' controls>
              <source src="/videos/articles/evolve-books/1.mp4" type="video/mp4" />
            </video>
            </div>
            <div className='container px-0 mt-3'>
            <div className='row align-items-center justify-content-center border-top'>
                <div className='d-flex flex-column col-12 col-md-7 ms-0 ms-lg-4'>
                    <h1 className='mb-3 mt-3 pt-3 text-center text-center w-100' style={{fontFamily:"KalamehWeb-Bold" , fontSize:"25px" ,color:"#383E43" }}>با EVOLVE، از پایه تا آیلتس 8</h1>
                <div style={{ margin: '0 20px', padding: '20px 20px 0px 20px' }}>
                <ul style={ulStyle}>
                <li style={liStyle}>
                دانشگاه کمبریج برای شناخت هرچه بهتر نیازهای زبان آموزان ، با بیش از 2000 دانشجوی زبان انگلیسی مصاحبه ای را انجام داد تا بتواند جذاب ترین موضوعات و مهارت ها را از دیدگاه دانشجویان در کلاس درس شناسایی کند.
                </li>   
                <li style={liStyle}>
                نتیجه این پروژه پیچیده به تحریر در آوردن مجموعه ای 6 جلدی شد که سطح زبانی دانشجویان را از A1 (مبتدی) به C1 ( پیشرفته) میرساند.
                </li>
                <li style={liStyle}>
                این بدین معناست که یک زبان آموز که تنها فقط با الفبای زبان انگلیسی آشنایی دارد، پس از مطالعه کتب Evolve میتواند نمره میانگین 7.5 تا 8 را در آزمون آیلتس دریافت کند.
                </li>   
                <li style={liStyle}>
                شما با مشاهده ی چارت رو به رو میتوانید سطح بین المللی(CEFR) مجموعه Evolve و نمره ی آیلتس (IELTS) معادل آن را مشاهده کنید.
                </li>
                </ul>
            </div>
                </div>
                <div className='col-12 col-md-4'>
                <ArticleImage alt={"evolve-books"} style={{width:"200px"}} src={"/images/articles/evolve-books/1.jpg"} width={319} height={701} />
                </div>
            </div>
            <ReadMoreBox title="بیشتر بخوانید">
            <Link style={{fontSize:"16px" , fontFamily:"KalamehWeb-Bold"}} className='w-100 text-primary fw-bold' href="/articles/cefr-scales">برای آشنایی با مقیاس CEFR کلیک کنید</Link>
            </ReadMoreBox>
            </div>

            <MainTitle>اهداف کتاب EVOLVE</MainTitle>
            <SubTitle>تقویت اختصاصی مهارت مکالمه:</SubTitle>
            <div style={{ margin: '0 20px', padding: '20px 20px 0px 20px' }}>
                <ul style={ulStyle}>
                <li style={liStyle}>
                یکی از مهمترین اهداف کتابEvolve ، تقویت مهارت Speaking (مکالمه) میباشد.
                </li>   
                <li style={liStyle}>
                این کتاب در هر سطح،  12 موضوع جذاب و بروز را مورد بحث و بررسی قرار میدهد و با قرار دادن دانشجویان در موقعیت هایی مشابه آنچه در دنیای واقعی تجربه خواهند کرد، آنان را به استفاده از لغات و گرامری که در هر بخش به صورت موضوعی فرا میگیرند، تشویق میکند.  
                </li>
                <li style={liStyle}>
                کتاب Evolve با قراردادن نمونه های متعدد ویدیویی از زبان آموزان واقعی و متخصصین در حوزه های مختلف در قالب  QRکد تلاش کرده است تا اولین کتاب در دنیا باشد که با نمایش نمونه های دست یافتنی به زبان آموزان کمک کند تا نه تنها با اعتماد به نفس بالاتری انگلیسی صحبت کنند بلکه بتوانند در رابطه با موضوعات مختلف ایده پردازی کنند و به تفصیل صحبت کنند.   
                </li>
                <li style={liStyle}>
                کتاب Evolve  تنها به قراردادن فعالیت های رایج برای تقویت مکالمه بسنده نکرده و با اختصاص دادن 12 بخش کامل (Time To Speak) در کنار هزاران فعالیت مکالمه محور، آموزش اصطلاحات رایج انگلیسی در قالب  Insider English و Useful Phrases ، گامی بلند در راستای تقویت مهارت Speaking دانشجویان برداشته است.            
                </li>
                </ul>
            </div>
            <div style={{maxWidth:"400px"}}>
            <video className='rounded mb-3 border w-100' controls>
              <source  src="/videos/articles/evolve-books/2.mp4"  type="video/mp4" />
            </video>
            </div>       
            <SubTitle>تقویت اختصاصی گرامر</SubTitle>
            <div style={{ margin: '0 20px', padding: '20px 20px 0px 20px' }}>
                <ul style={ulStyle}>
                <li style={liStyle}>
            <Paragraph>یکی از عمده نگرانی‌های زبان آموزان، اشتباهات گرامری در مکالمه میباشد. بنابراین پنج ویژگی مهم کتاب Evolve در حوزه گرامر مطرح میگردد تا خیال زبان آموزان عزیز از یادگیری صحیح گرامر راحت باشد.</Paragraph>
                </li>
                </ul>
                <ol>   
                <li style={liStyle}>
            <Paragraph>1. معرفی 24 گرامر پرکاربرد زبان انگلیسی در هر سطح</Paragraph>
                
                </li>
                <li style={liStyle}>
            <Paragraph>2. تمرین‌های متعدد گرامر در کتاب درس و کتاب کار</Paragraph>
                
                </li>
                <li style={liStyle}>
            <Paragraph>3. وجود بخش‌های متعدد مکالمه طراحی شده مختص گرامر هدف</Paragraph>
                
                </li>
                <li style={liStyle}>
            <Paragraph>4. تمرین‌های طراحی شده مختص گرامر در انتهای کتاب درسی</Paragraph>
                
                </li>
                <li style={liStyle}>
            <Paragraph>5. تمرین‌های طراحی شده به صورت دیجیتال میباشند.</Paragraph>

                </li>
                </ol>
            </div>
            <MainTitle>خزانه اطلاعات آزمون های دانشگاه کمبریج (CLC)</MainTitle>
            <div style={{ margin: '0 20px', padding: '20px 20px 0px 20px' }}>
                <ul style={ulStyle}>
                <li style={liStyle}>
            <Paragraph>دانشگاه کمبریج ، به عنوان یکی از معتبرین ترین دانشگاه های جهان، همواره برای طراحی و اجرای آزمون هایی چون IELTS  ، CPE ، CAE، FCE و Lingua Skill ستوده شده است. اما تنها برگزاری این آزمون ها نیست که به قدرت دانشگاه کمبریج می افزاید بلکه این دانشگاه با راه اندازی CLC ( Cambridge Learner Corpus)  توانسته است، میلیون ها برگه آزمون کتبی و فایل ضبط شده آزمون شفاهی را توسط متخصصین خود آنالیز و دسته بندی کند.</Paragraph>
                </li>   
                <li style={liStyle}>
            <Paragraph>انتشارت کمبریج به لطفCLC  (خزانه اطلاعات آزمون های رسمی دانشگاه کمبریج) در مجموعه کتاب های Evolve بخش ویژه ای را باعنوان Accuracy Check قرار داده است. </Paragraph>            
                </li>
                <li style={liStyle}>
            <Paragraph>در این بخش دانشجویان با اشتباهات رایج زبان آموزانی آشنا میشوند که در آزمون های رسمی  دانشگاه کمبریج مانند IELTS  و … شرکت کرده اند.</Paragraph>      
                </li>
                </ul>
            </div>
            

            <MainTitle>تقویت مهارت های اصلی با Evolve</MainTitle>
            <div className='w-100' style={{ margin: '0 20px', padding: '20px 50px 0px 20px'  }}>
                <ul className='w-100 text-end' style={ulStyle}>
                <li style={liStyle}>
                هر درس درکتاب Evolve به 5 بخش تقسیم میشود:
                </li>
                </ul>
                <ol>
                    <li style={liStyle}>
            <Paragraph>1. در بخش اول و دوم، Vocabulary و Grammar ضروری آن درس معرفی و تمرین میشوند.</Paragraph>

                    </li>
                    <li style={liStyle}>
            <Paragraph>2. در بخش سوم، اصطلاحات و ساختارهای پرکاربرد در مکالمه و نکاتی برای تقویت تلفظ دانشجویان معرفی و تمرین میشوند.</Paragraph>

                    </li>
                    <li style={liStyle}>
            <Paragraph>3. در بخش چهارم، مهارت‌های اصلی Speaking – Listening – Reading و Writing به شیوه‌های مختلف تلفیق میشوند.</Paragraph>

                    </li>
                    <li style={liStyle}>
            <Paragraph>4. در بخش پنجم، Time to speak قرار گرفته که فرصتی برای تقویت مهارت مکالمه زبان آموزان میباشد.</Paragraph>

                    </li>
                </ol>   
            </div>

            <ArticleImage src={"/images/articles/evolve-books/2.jpg"} width={7680} height={294} alt={"evolve-books"} />
            <MainTitle>سوالات متداول</MainTitle>
            
            <ArticleAccordian caption={"کتاب های Evolve برای چه سطحی مناسب هستند؟"}>
            <Paragraph>این مجموعه برای زبان‌آموزان از سطح مبتدی تا پیشرفته مناسب است. هر کتاب این مجموعه، با توجه به چارچوب CEFR، یک سطح خاص را پوشش می‌دهد. کتاب اول برای سطح A1، کتاب دوم برای سطح A2، کتاب سوم برای سطح B1، کتاب چهارم برای سطح B1+، کتاب پنجم برای سطح B2 و کتاب ششم برای سطح C1 مناسب است.</Paragraph>
            </ArticleAccordian>
            <ArticleAccordian caption={"چگونه می‌توانم برای استفاده از کتاب‌های Evolve سطح خود را تعیین کنم؟"}>
            <Paragraph>از <Link className='fw-bold text-primary' href="/tests/public">آزمون تعیین سطح عمومی سایت</Link> استفاده کنید.</Paragraph>
            </ArticleAccordian>
            <ArticleAccordian caption={" چگونه میتوانم به یادگیری اصولی کتاب های Evolve بپردازم؟"}>
            <Paragraph>با شرکت در <Link className='fw-bold text-primary' href='/courses/termic'>دوره‌های ترمیک و فشرده</Link> میتوانید با بهترین کیفیت و در کمترین زمان ممکن به کتاب‌های Evolve مسلط شوید.</Paragraph>
            </ArticleAccordian>
            <ArticleAccordian caption={"چگونه می‌توانم به فایل‌های صوتی و ویدئویی مجموعه Evolve دسترسی داشته باشم؟"}>
            <Paragraph>1. استفاده از نسخه دیجیتال کتاب و دسترسی به فایل‌های صوتی و ویدئویی از طریق نرم‌افزار کمبریج ریدر.</Paragraph>
            <Paragraph>2.  استفاده از QRکدهای کتاب.</Paragraph>
            </ArticleAccordian>
            </>

        </div>
    );
};

export default ArticleContent;