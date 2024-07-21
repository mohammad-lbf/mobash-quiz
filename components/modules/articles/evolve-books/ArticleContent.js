import Link from 'next/link';
import React from 'react';
import ArticleImage from '../../Article/ArticleImage';
import MainTitle from '../../Article/MainTitle';
import Paragraph from '../../Article/Paragraph';
import SubTitle from '../../Article/SubTitle';
import ArticleAccordian from '../../Article/ArticleAccordian';

const ArticleContent = () => {
    return (
        <div className='mt-2 d-flex flex-column align-items-center'>
            <>
            
            <MainTitle>آشنایی با مجموعه کتاب های Evolve:</MainTitle>
            <Paragraph>انتشارات دانشگاه کمبریج ، یکی از پیشگامان عرصه آموزش زبان، در سال 2019  یکی از بهترین کتب آموزش زبان انگلیسی را با عنوان   Evolve  منتشر کرد.</Paragraph>
            <Paragraph>این کتاب با همکاری تیم بزرگی از نویسندگان، اساتید و مشاورین رسمی دانشگاه کمبریج تهیه شده است تا بتواند تمامی نیازهای دانشجویان در یادگیری زبان انگلیسی را برآورده کند.</Paragraph>
            
            <div style={{maxWidth:"400px"}}>
            <video className='rounded w-100' controls>
              <source src="/videos/articles/evolve-books/1.mp4" type="video/mp4" />
            </video>
            </div>

            <div className='d-flex flex-column flex-lg-row  align-items-center'>
                <div className='d-flex flex-column ms-0 ms-lg-4'>
            <MainTitle>با EVOLVE، از پایه تا آیلتس 8</MainTitle>
            <Paragraph>دانشگاه کمبریج برای شناخت هرچه بهتر نیازهای زبان آموزان ، با بیش از 2000 دانشجوی زبان انگلیسی مصاحبه ای را انجام داد تا بتواند جذاب ترین موضوعات و مهارت ها را از دیدگاه دانشجویان در کلاس درس شناسایی کند.</Paragraph>
            <Paragraph>نتیجه این پروژه پیچیده به تحریر در آوردن مجموعه ای 6 جلدی شد که سطح زبانی دانشجویان را از A1 (مبتدی) به C1 ( پیشرفته) میرساند.</Paragraph>
            <Paragraph>این بدین معناست که یک زبان آموز که تنها فقط با الفبای زبان انگلیسی آشنایی دارد، پس از مطالعه کتب Evolve میتواند نمره میانگین 7.5 تا 8 را در آزمون آیلتس دریافت کند.</Paragraph>
            <Paragraph>شما با مشاهده ی چارت رو به رو میتوانید سطح بین المللی(CEFR) مجموعه Evolve و نمره ی آیلتس (IELTS) معادل آن را مشاهده کنید.</Paragraph>
            <Link style={{fontSize:"16px"}} className='w-100 text-primary fw-bold mt-3' href="/articles/cefr-scales">برای آشنایی با مقیاس CEFR کلیک کنید.</Link>
                </div>
            <ArticleImage alt={"evolve-books"} style={{height:"400px" , maxWidth:"250px"}} src={"/images/articles/evolve-books/1.jpg"} width={319} height={701} />
            </div>

            <MainTitle>اهداف کتاب EVOLVE</MainTitle>
            <SubTitle>تقویت اختصاصی مهارت مکالمه:</SubTitle>
            <Paragraph>یکی از مهمترین اهداف کتابEvolve ، تقویت مهارت Speaking (مکالمه) میباشد. </Paragraph>
            <Paragraph>این کتاب در هر سطح،  12 موضوع جذاب و بروز را مورد بحث و بررسی قرار میدهد و با قرار دادن دانشجویان در موقعیت هایی مشابه آنچه در دنیای واقعی تجربه خواهند کرد، آنان را به استفاده از لغات و گرامری که در هر بخش به صورت موضوعی فرا میگیرند، تشویق میکند.</Paragraph>
            <Paragraph>کتاب Evolve  تنها به قراردادن فعالیت های رایج برای تقویت مکالمه بسنده نکرده و با اختصاص دادن 12 بخش کامل (Time To Speak) در کنار هزاران فعالیت مکالمه محور، آموزش اصطلاحات رایج انگلیسی در قالب  Insider English وUseful Phrases ، گامی بلند در راستای تقویت مهارت Speaking دانشجویان برداشته است.</Paragraph>
            <Paragraph>کتاب Evolve با قراردادن نمونه های متعدد ویدیویی از زبان آموزان واقعی و متخصصین در حوزه های مختلف در قالب  QRکد تلاش کرده است تا اولین کتاب در دنیا باشد که با نمایش نمونه های دست یافتنی به زبان آموزان کمک کند تا نه تنها با اعتماد به نفس بالاتری انگلیسی صحبت کنند بلکه بتوانند در رابطه با موضوعات مختلف ایده پردازی کنند و به تفصیل صحبت کنند.</Paragraph>
            <div style={{maxWidth:"400px"}}>
            <video className='rounded mb-3 border w-100' controls>
              <source  src="/videos/articles/evolve-books/2.mp4"  type="video/mp4" />
            </video>
            </div>

            
            <SubTitle>تقویت اختصاصی گرامر</SubTitle>
            <Paragraph>یکی از عمده نگرانی‌های زبان آموزان، اشتباهات گرامری در مکالمه میباشد. بنابراین پنج ویژگی مهم کتاب Evolve در حوزه گرامر مطرح میگردد تا خیال زبان آموزان عزیز از یادگیری صحیح گرامر راحت باشد.</Paragraph>
            <Paragraph>1. معرفی 24 گرامر پرکاربرد زبان انگلیسی در هر سطح</Paragraph>
            <Paragraph>2. تمرین‌های متعدد گرامر در کتاب درس و کتاب کار</Paragraph>
            <Paragraph>3. وجود بخش‌های متعدد مکالمه طراحی شده مختص گرامر هدف</Paragraph>
            <Paragraph>4. تمرین‌های طراحی شده مختص گرامر در انتهای کتاب درسی</Paragraph>
            <Paragraph>5. تمرین‌های طراحی شده به صورت دیجیتال میباشند.</Paragraph>

            <MainTitle>خزانه اطلاعات آزمون های دانشگاه کمبریج (CLC)</MainTitle>
            <Paragraph>دانشگاه کمبریج ، به عنوان یکی از معتبرین ترین دانشگاه های جهان، همواره برای طراحی و اجرای آزمون هایی چون IELTS  ، CPE ، CAE، FCE و Lingua Skill ستوده شده است. اما تنها برگزاری این آزمون ها نیست که به قدرت دانشگاه کمبریج می افزاید بلکه این دانشگاه با راه اندازی CLC ( Cambridge Learner Corpus)  توانسته است، میلیون ها برگه آزمون کتبی و فایل ضبط شده آزمون شفاهی را توسط متخصصین خود آنالیز و دسته بندی کند.</Paragraph>
            <Paragraph>انتشارت کمبریج به لطفCLC  (خزانه اطلاعات آزمون های رسمی دانشگاه کمبریج) در مجموعه کتاب های Evolve بخش ویژه ای را باعنوان Accuracy Check قرار داده است. </Paragraph>
            <Paragraph>در این بخش دانشجویان با اشتباهات رایج زبان آموزانی آشنا میشوند که در آزمون های رسمی  دانشگاه کمبریج مانند IELTS  و … شرکت کرده اند.</Paragraph>


            <MainTitle>تقویت مهارت های اصلی با Evolve</MainTitle>
            <Paragraph>هر درس درکتاب Evolve به 5 بخش تقسیم میشود:</Paragraph>
            <Paragraph>1. در بخش اول و دوم، Vocabulary و Grammar ضروری آن درس معرفی و تمرین میشوند.</Paragraph>
            <Paragraph>2. در بخش سوم، اصطلاحات و ساختارهای پرکاربرد در مکالمه و نکاتی برای تقویت تلفظ دانشجویان معرفی و تمرین میشوند.</Paragraph>
            <Paragraph>3. در بخش چهارم، مهارت‌های اصلی Speaking – Listening – Reading و Writing به شیوه‌های مختلف تلفیق میشوند.</Paragraph>
            <Paragraph>4. در بخش پنجم، Time to speak قرار گرفته که فرصتی برای تقویت مهارت مکالمه زبان آموزان میباشد.</Paragraph>

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