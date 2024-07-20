import React from 'react';
import ArticleImage from '../../Article/ArticleImage';
import MainTitle from '../../Article/MainTitle';
import Paragraph from '../../Article/Paragraph';
import SubTitle from '../../Article/SubTitle';
import ArticleAccordian from '../../Article/ArticleAccordian';
import Link from 'next/link';

const ArticleContent = () => {
    return (
        <div className='mt-2'>
            <MainTitle>دوره اختصاصی گرامر</MainTitle>
<Paragraph>دوره جامع گرامر (Grammar) زبان انگلیسی یک فرصت عالی برای تقویت مهارت‌های زبانی و ارتقاء دانش زبان انگلیسی شماست که به کمک آن می‌توانید ساختار جملات را به درستی متوجه شوید, اشتباهات رایج تان را کاهش داده و توانایی صحبت کردن (Speaking) و نوشتن (Writing) بهتری پیدا کنید.</Paragraph>

<SubTitle>هدف اصلی دوره جامع گرامر چیست؟</SubTitle>
<Paragraph>1. تمرکز اصلی این دوره بر شکستن رویکرد سنتی تدریس گرامر است که بر اساس آموزش فرمولی بنا شده بود.</Paragraph>
<Paragraph>2. در رویکرد جدید از روش‌های نوآورانه استفاده شده که تاکید آن بر کاربرد عملی گرامر در زندگی روزمره است.</Paragraph>
<Paragraph>3. این مسئله به کاهش وابستگی به فرمول‌های گرامری و یادگیری مادام العمر زبان آموز منجر میشود.</Paragraph>

<SubTitle>مباحث دوره جامع گرامر چیست؟</SubTitle>
<Paragraph>موضوعات این دوره بصورت مبحثی به بحث و گفتگو گذاشته شده و جمع‌بندی می‌گردند. مباحث مهم دوره به شرح زیر میباشند:</Paragraph>
<Paragraph>1. زمان‌های انگلیسی (Tenses)</Paragraph>
<Paragraph>2. جملات شرطی (Conditionals)</Paragraph>
<Paragraph>3. افعال ناقص (Models)</Paragraph>
<Paragraph>4. جملات مجهول (The passive)</Paragraph>
<Paragraph>5. حروف اضافه (Prepositions)</Paragraph>
<Paragraph>6. افعال ایستا و اکشن (Gerunds and the Infinitives)</Paragraph>
<Paragraph>7. نقل قول (Reported speech)</Paragraph>
<Paragraph>علاوه بر موارد بالا به سایر ساختارهای گرامری از جمله: اسم و انواع آن (noun)، صفات (adjectives)، ضمایر (pronouns)، حروف تعریف (articles) و... نیز پرداخته خواهد شد.</Paragraph>

<SubTitle>این دوره به چه کسانی پیشنهاد می‌شود؟</SubTitle>
<Paragraph>1. افرادی که می‌خواهند از پایه و بصورت اصولی و کاربردی گرامر زبان انگلیسی را بیاموزند.</Paragraph>
<Paragraph>2. کسانی که تجربه ناموفقی از یادگیری سنتی گرامر داشته اند.</Paragraph>
<Paragraph>3. افرادی که قصد تصحیح ایرادات مکالمه خود را دارند.</Paragraph>
<Paragraph>4. افرادی که در نوشتن متن (Writing) مشکل ساختاری دارند.</Paragraph>
<Paragraph>5. افرادی که قصد شرکت در آزمون IELTS و یا TOEFL و یا PTE دارند.</Paragraph>
<br />
<Link href={"/tests/grammar"} className="text-primary fw-bold my-4" style={{fontSize:"16px"}}>برای شرکت در آزمون تعیین سطح گرامر کلیک کنید.</Link>

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
<Paragraph>برای دریافت مشاوره و راهنمایی بیشتر دراین زمینه از طریق راه‌های ارتباطی سایت با استاد در تماس باشید.</Paragraph>
</ArticleAccordian>

        </div>
    );
};

export default ArticleContent;