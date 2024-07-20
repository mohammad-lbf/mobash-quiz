import Link from 'next/link';
import React from 'react';
import ArticleImage from '../../Article/ArticleImage';
import MainTitle from '../../Article/MainTitle';
import Paragraph from '../../Article/Paragraph';
import SubTitle from '../../Article/SubTitle';

const ArticleContent = () => {
    return (
        <div className='mt-2'>
            {/* <MainTitle>کلاس‌ های بحث آزاد و مکالمه</MainTitle> */}

<MainTitle>کلاس های بحث آزاد</MainTitle>
<Paragraph>1. هدف از کلاس های بحث آزاد (Free discussion)، استفاده از ساختار ها و لغات آموخته شده در مکالمات است. این کلاس ها تاثیر بسزایی در فصاحت و روان صحبت کردن زبان آموزان دارند.</Paragraph>
<Paragraph>2. در هرجلسه از این کلاس‌‌ها، یک موضوع توسط استاد به بحث گذاشته شده و درخصوص آن, بحث و تبادل نظر صورت میگیرد.</Paragraph>
<Paragraph>3. علاوه بر بهبود مهارت کلامی، این کلاس‌ها به یادگیری کلمات جدید و رفع اشکال‌های گرامری شما نیز کمک می‌کنند.</Paragraph>

<SubTitle>کلاس های بحث آزاد در سه سطح:</SubTitle>
<Paragraph>1. متوسط (Intermediate)</Paragraph>
<Paragraph>2. فوق متوسط (Upper Intermediate)</Paragraph>
<Paragraph>3. پیشرفته (Advanced) برگزار میگردند.</Paragraph>

<SubTitle>کلاس بحث آزاد برای چه افرادی مناسب است؟</SubTitle>
<Paragraph>1. افرادی که در سطح متوسط و پیشرفته هستند اما نمی‌توانند مکالمه کنند.</Paragraph>
<Paragraph>2. افرادی که لیسنینگ(Listening) خوبی دارند اما نمی‌توانند به خوبی مکالمه کنند.</Paragraph>
<Paragraph>3. افرادی که به گرامر انگلیسی ازجمله 12 زمان زبان انگلیسی مسلط هستند.</Paragraph>
<Paragraph>4. افرادی که به دوره های بدون کتاب آموزشی علاقه مند میباشند.</Paragraph>
<Link href="/courses/grammar" className='text-primary fw-bold' style={{fontSize:"16px"}}>برای یادگیری اختصاصی گرامر کلیک کنید.</Link>

<MainTitle>کلاس های مکالمه</MainTitle>

<SubTitle>اطلاعات کلی:</SubTitle>
<Paragraph>1. این دوره مناسب کسانی است که به‌دنبال کلاسی هستند که تمرکز اصلی آن روی صحبت کردن به زبان انگلیسی و مهارت‌های مرتبط با آن باشد و پیشرفت منطقی در توانایی گفت و گو برایشان مهم است.</Paragraph>
<Paragraph>2. این کلاسها شامل ۱۶ ترم آموزشی هستند که هرکدام دارای 10 جلسه میباشند.</Paragraph>
<Paragraph>3. منابع اصلی این کلاسها, سری کتاب های Oxford word skills و Speak Now میباشند.</Paragraph>

<SubTitle>این دوره به چه کسانی پیشنهاد می‌شود؟</SubTitle>
<Paragraph>1. افرادی که در سطح ابتدایی, متوسط و یا متوسط به بالا هستند اما نمی‌توانند مکالمه کنند.</Paragraph>
<Paragraph>2. افرادی که لیسنینگ(Listening) خوبی دارند اما نمی‌توانند به خوبی مکالمه کنند.</Paragraph>
<Paragraph>3. افراد پرمشغله که می‌خواهند در هر مکان و زمانی به آموزش‌های باکیفیت دسترسی داشته باشند.</Paragraph>
<Paragraph>4. افرادی که می‌خواهند برای آمادگی در آزمون‌های بین المللی، مهارت مکالمه خود را ارتقا داده و دایره لغات و اصطلاحات خود را در موضوع‌های رایج افزایش دهند.</Paragraph>

        </div>
    );
};

export default ArticleContent;