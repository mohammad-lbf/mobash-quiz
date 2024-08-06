import Link from 'next/link';
import React from 'react';
import ArticleImage from '../../Article/ArticleImage';
import MainTitle from '../../Article/MainTitle';
import Paragraph from '../../Article/Paragraph';
import SubTitle from '../../Article/SubTitle';
import ArticleAccordian from '../../Article/ArticleAccordian';
import Image from 'next/image';
import ReadMoreBox from '../../Article/ReadMoreBox';

const ArticleContent = () => {
    return (
        <div className='mt-2 d-flex flex-column align-items-center'>
            <MainTitle>دوره های ترمیک و فشرده</MainTitle>
            <Paragraph>در این دوره در کنار تدریس هر 4 مهارت اصلی زبان انگلیسی شامل: Reading، Writing، Listening، Speaking و زیرمهارت های Vocabulary، Grammar، Pronunciation تاکید بسیار ویژه ای بر ارتقا مهارت مکالمه وجود دارد به طوری که زبان آموزان بتوانند پس از پایان هر ترم به راحتی از تمامی ساختارها و لغات نو آموخته خود در مکالمات روزمره استفاده نمایند.</Paragraph>

            <SubTitle>منابع دوره</SubTitle>
            <div className='d-flex flex-column flex-lg-row align-items-center align-items-lg-start'>
                <Paragraph>
                    منابع آموزشی دوره های ترمیک و فشرده، کتاب‌های Evolve از سری کتب دانشگاه کمبریج هستند که با اهداف این دوره مطابقت کامل داشته و می‌توانند زبان آموزان را در کوتاه ترین زمان ممکن به اهداف خود برسانند.
                    
                </Paragraph>
                <div className='me-lg-4'>
                </div>
            </div>
                    <ArticleImage src={"/images/courses/termic/1.jpg"} width={1030} height={295} alt="Evolve-books" />
            <div className='d-flex flex-column flex-lg-row align-items-center justify-content-center w-100'>
            <p style={{fontFamily:"Vazirmatn" , fontSize:"16px" , lineHeight:"20px"}} className="text-center">علاوه بر سری کتب Evolve، از مجموعه کتاب‌های Oxford word skills نیز استفاده خواهد شد.</p>
            <div className='me-lg-4'>
            </div>
            </div>
            <div className='w-100 my-4'>
            <ReadMoreBox title={"بیشتر بخوانید"}>
            <Link className='text-primary fw-bold mb-3' style={{fontSize:"16px" , fontFamily:"KalamehWeb-Bold"}} href={"/articles/evolve-books"}>برای آشنایی با کتاب های Evolve کلیک کنید</Link>     
            </ReadMoreBox>
            </div>
            <MainTitle>سطوح مختلف کلاس های ترمیک</MainTitle>
            
            <ArticleAccordian caption={"پایه"}>
                <div className='d-flex flex-column align-items-center flex-lg-row'>
                    <Image alt='Evolve-book' className='rounded shadow-sm ms-lg-4 mb-3 mb-lg-0' width={700} height={700} style={{width:"150px" , height:"150px"}} src={"/images/courses/termic/A1.webp"} />            
                        <div className='d-flex flex-column'>
                            <SubTitle>سطح پایه (Elementary)</SubTitle>
                            <Paragraph>در این دوره ۶ ترمی به تمام مباحث پایه‌ای، گرامرها و واژگان مناسب این سطح مسلط می‌شوید و در کنار آن، این موارد را فرا می‌گیرید:</Paragraph>
                            <Paragraph>1. مکالمه درباره سفر و تفریح</Paragraph>
                            <Paragraph>2. توصیف محیط پیرامون</Paragraph>
                            <Paragraph>3. مکالمه درباره بیماری‌های ساده و درمان آن‌ها</Paragraph>
                            <Paragraph>4. صحبت درباره روتین‌ها و عادت‌ها</Paragraph>
                            <Paragraph>5. صحبت درباره غذاها و خوراکی‌ها</Paragraph>
                            <Paragraph>6. شیوه معرفی‌ و صحبت‌ کردن درباره افراد</Paragraph>
                            <Paragraph>7. یادگیری حال استمراری برای توصیف اتفاق‌های جاری</Paragraph>
                            <Paragraph>8. یادگیری حال ساده برای صحبت کردن راجع‌‌به اتفاق‌های روتین</Paragraph>
                            <Paragraph>9. یادگیری گذشته ساده برای توصیف اتفاق‌های گذشته</Paragraph>
                        </div>
                </div>
            </ArticleAccordian>
            <ArticleAccordian caption={"پیش متوسط"}>
                    <div className='d-flex flex-column align-items-center flex-lg-row'>
                        <Image alt='Evolve-book' className='rounded shadow-sm ms-lg-4 mb-3 mb-lg-0' width={700} height={700} style={{width:"150px" , height:"150px"}} src={"/images/courses/termic/A2.webp"} />
                        <div className='d-flex flex-column'>
                            <SubTitle>سطح میانی (Pre-Intermediate)</SubTitle>
                            <Paragraph>این سطح به‌عنوان مکمل سطح پایه عمل می‌کند و علاوه‌بر تکرار مباحث پایه در آن برای یادگیری بیشتر و عمیق‌تر شما، آموزش‌های پیشرفته‌تری به آن اضافه می‌شود تا با دست پر و آمادگی بالایی به سطح‌های بالاتر بروید.</Paragraph>
                            <Paragraph>در این سطح به لطف کتاب Evolve با زبان رسمی و مودبانه انگلیسی آشنا می‌شوید و آن را در مکالمه‌هایتان به‌کار می‌برید. در کنار آن، در این سطح به این موارد نیز مسلط می‌شوید:</Paragraph>
                            <Paragraph>1. مقایسه انواع زمان‌های گذشته و حال</Paragraph>
                            <Paragraph>2. آشنایی با زمان آینده</Paragraph>
                            <Paragraph>3. صحبت کردن راجع‌به ملیت‌ها و فرهنگ‌ها</Paragraph>
                            <Paragraph>4. توصیف شهر و محل زندگی با جزئیات</Paragraph>
                            <Paragraph>5. صحبت کردن در مورد پدیده ارتباطات و فضای مجازی</Paragraph>
                            <Paragraph>6. برنامه‌ریزی و اقدام برای رسیدن به اهداف</Paragraph>
                        </div>
                    </div>



            </ArticleAccordian>
            <ArticleAccordian caption={"متوسط"}>
                    <div className='d-flex flex-column align-items-center flex-lg-row'>
                        <Image alt='Evolve-book' className='rounded shadow-sm ms-lg-4 mb-3 mb-lg-0' width={700} height={700} style={{width:"150px" , height:"150px"}} src={"/images/courses/termic/B1.webp"} />
                        <div className='d-flex flex-column'>
                            <SubTitle>سطح متوسط (Intermediate)</SubTitle>
                            <Paragraph>این سطح هم مانند سطح‌های قبلی در ۶ ترم ارائه می‌شود. در این سطح، مهارت مکالمه شما به حدی می‌رسد که می‌توانید درباره مسائل روزمره صحبت کنید و مکالمات روزانه را به‌راحتی انجام دهید. علاوه بر موارد گفته شده، با مفاهیم انتزاعی و غیر روزمره نیز آشنا می‌شوید. در مجموع هر دانشی که برای رفع نیازهای زبانی خود در یک محیط انگلیسی لازم داشته باشید را فرا می‌گیرید.</Paragraph>
                            <Paragraph>به‌طور کلی در این سطح با موضوع‌های زیادی آشنا شده و یاد می‌گیرید؛ که به برخی از آن‌ها اشاره می‌کنیم:</Paragraph>
                            <Paragraph>1. آشنایی با عجایب جهان</Paragraph>
                            <Paragraph>2. شیوه همدلی و همدردی با دیگران</Paragraph>
                            <Paragraph>3. آشنایی با زبان رسمی کتاب و مطبوعات</Paragraph>
                            <Paragraph>4. توصیف شخصیت افراد و رفتارهای شخصی</Paragraph>
                            <Paragraph>5. مدیریت مسائل زندگی و مقابله با چالش‌ها</Paragraph>
                            <Paragraph>6. یادگیری صفت‌های مقایسه‌ای و عالی در سطح بالاتر</Paragraph>
                            <Paragraph>7. صحبت کردن در مورد تجربه‌های خاص به‌واسطه یادگیری گرامر حال کامل</Paragraph>
                        </div>
                    </div>



            </ArticleAccordian>
            <ArticleAccordian caption={"بالای متوسط"}>
                    <div className='d-flex flex-column align-items-center flex-lg-row'>
                        <Image alt='Evolve-book' className='rounded shadow-sm ms-lg-4 mb-3 mb-lg-0' width={700} height={700} style={{width:"150px" , height:"150px"}} src={"/images/courses/termic/B1plus.webp"} />
                        <div className='d-flex flex-column'>
                        <SubTitle>سطح بالای متوسط (Upper-Intermediate)</SubTitle>
                                <Paragraph>اگر می‌خواهید زبان انگلیسی را فراتر از مکالمات روزمره یاد بگیرید یا قصد ادامه تحصیل یا کار در محیطی انگلیسی زبان را دارید، این سطح  ۶ ترمی مناسب شماست. در این سطح از دوره آموزش زبان انگلیسی برای بزرگسالان در سفیر، مهارتتان در مکالمه به حدی می‌رسد که به سادگی با افراد بومی (native) صحبت می‌کنید و به درجه‌ای می‌رسید که توانایی درک متن‌های پیچیده کاری و تخصصی را دارید.</Paragraph>
                                <Paragraph>برخی از مواردی که در این سطح یاد می‌گیرید به این شرح است:</Paragraph>
                                <Paragraph>1. صحبت کردن در مورد علایق و سلایق</Paragraph>
                                <Paragraph>2. روابط اجتماعی و بایدها و نبایدهای آن</Paragraph>
                                <Paragraph>3. قوانین و مجازات‌ها</Paragraph>
                                <Paragraph>4. مهارت‌های حل مسئله</Paragraph>
                                <Paragraph>5. مد و فشن</Paragraph>
                                <Paragraph>6. شغل‌ها و چالش‌های آن‌ها</Paragraph>
                        </div>
                    </div>



            </ArticleAccordian>
            <ArticleAccordian caption={"پیشرفته اول و دوم"}>
                    <div className='d-flex flex-column align-items-center flex-lg-row'>
                        <Image alt='Evolve-book' className='rounded shadow-sm ms-lg-4 mb-3 mb-lg-0' width={700} height={700} style={{width:"150px" , height:"150px"}} src={"/images/courses/termic/B2.webp"} />
                        <Image alt='Evolve-book' className='rounded shadow-sm ms-lg-4 mb-3 mb-lg-0' width={700} height={700} style={{width:"150px" , height:"150px"}} src={"/images/courses/termic/C1.webp"} />
                        <div className='d-flex flex-column'>
                            <SubTitle>سطح پیشرفته اول و دوم (Advanced)</SubTitle>
                            <Paragraph>سطح Advanced دوره‌های آموزش زبان انگلیسی بزرگسالان، برای کسانی مناسب است که به کم قانع نیستند و تمایل دارند مهارت‌های زبانی‌شان را به درجات بالا برسانند. اگر جز این دسته از افراد پیشتاز هستید، شک نکنید که این دوره مناسب شماست! البته، برای ورود به این سطح باید سطح زبان شما بالای متوسط باشد.</Paragraph>
                            <Paragraph>پس از گذراندن این دوره، نمره آزمون‌های بین‌المللی شما مانند آیلتس و تافل تا حد شگفت‌انگیزی افزایش می‌یابد و متن‌های پیچیده و طولانی انگلیسی برایتان مانند متن‌های فارسی قابل درک است. مهارت نوشتار متن‌های آکادمیک شما هم به حد اعلایی می‌رسد و می‌توانید علاوه‌بر مکالمه درباره مسائل تخصصی، درباره آن‌ها هر مطلبی که می‌خواهید را نیز بنویسید.</Paragraph>
                            <Paragraph>برخی از مطالب درسی این دو سطح، شامل این موضوعات است:</Paragraph>
                            <Paragraph>1. صحبت‌ کردن در مورد شبکه‌های اجتماعی</Paragraph>
                            <Paragraph>2. مطبوعات و رسانه‌ها</Paragraph>
                            <Paragraph>3. زندگی کاری و شرایط آن</Paragraph>
                            <Paragraph>4. علم تغذیه و تاثیرات آن بر دنیای مدرن</Paragraph>
                            <Paragraph>5. موفقیت و شادی در زندگی</Paragraph>
                            <Paragraph>6. فرهنگ کشورهای مختلف</Paragraph>
                        </div>
                    </div>



            </ArticleAccordian>
            <SubTitle>تعداد جلسات و مدت زمان هر ترم</SubTitle>
            <Paragraph>این دوره مجموعاً شامل دو بخش میباشد:</Paragraph>
            <Paragraph>1. دوره‌های مبتدی و متوسط در ۲۴ ترم.</Paragraph>
            <Paragraph>2. دوره‌های تخصصی و پیشرفته در ۱۸ ترم.</Paragraph>
            <Paragraph>هر ترم دارای 12 جلسه آموزشی میباشد که به یکی از اشکال زیر ارائه می‌گردد:</Paragraph>
            <Paragraph>1. ترمیک: دو جلسه در هفته (مدت زمان هر ترم یک ماه و نیم خواهد بود.)</Paragraph>
            <Paragraph>2. فشرده: چهار جلسه در هفته (مدت زمان هر ترم 21 روز خواهد بود.)</Paragraph>

            <SubTitle>ویژگی های دوره ترمیک و فشرده</SubTitle>
            <Paragraph>1. امکان انتخاب روز و ساعت توسط زبان آموزان.</Paragraph>
            <Paragraph>2. تدریس خصوصی و صرفه جویی در زمان.</Paragraph>
            <Paragraph>3. تمرکز کامل معلم روی نقاط قوت و ضعف زبان آموز.</Paragraph>
            <Paragraph>4. تدریس هر 4 مهارت اصلی با تاکید ویژه به ارتقاء مهارت مکالمه.</Paragraph>
            <Paragraph>5. مشاوره‌های منظم و پشتیبانی آموزشی مستمر در طول دوره.</Paragraph>
            <Paragraph>6. استفاده از بروز ترین منابع آموزشی.</Paragraph>
            <Paragraph>7. برنامه ریزی اختصاصی برای یادگیری هر زبان آموز.</Paragraph>

            <div className='d-flex flex-column flex-lg-row align-items-center justify-content-lg-between justify-content-center w-100 bg-gray-850 border-gray-800 p-3 rounded'>
                <div className='d-flex flex-column align-items-center align-items-lg-end'>
                    <SubTitle>سطح زبان خود را نمی‌دانید؟</SubTitle>
                    <Paragraph>با شرکت در آزمون تعیین سطح، علاوه‌بر اطلاع از سطح زبان خود، می‌توانید در دوره‌های آکادمی مبش شرکت کنید.</Paragraph>
                </div>
            <Link style={{fontFamily:"KalamehWeb-Bold"}} href="/tests/public" className='text-white btn-main-2 mt-3 mt-lg-0'>شروع کنید</Link>
            </div>
            <p className='mt-4 text-center' style={{fontFamily:"KalamehWeb-Bold" , lineHeight:"27px" , fontSize:"16px"}}>
            برای اطلاع از شرایط ثبت نام و هزینه های دوره می توانید از طریق راه های ارتباطی موجود در سایت (واتساپ و اینستاگرام)
اقدام نمایید.
            </p>
            

        </div>
    );
};

export default ArticleContent;