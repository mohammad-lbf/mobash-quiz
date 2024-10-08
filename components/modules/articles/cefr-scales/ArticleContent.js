import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import ArticleAccordian from '../../Article/ArticleAccordian';
import ArticleImage from '../../Article/ArticleImage';
import MainTitle from '../../Article/MainTitle';
import Paragraph from '../../Article/Paragraph';
import ReadMoreBox from '../../Article/ReadMoreBox';
import SubTitle from '../../Article/SubTitle';
import LearningHoursTable from './LearningHoursTable';

const ArticleContent = () => {
  const subTitleStyle={
    fontFamily:"KalamehWeb-Bold" ,fontSize:"20px" , fontWeight:"800" , color:"#383e43" , lineHeight:"1.88"  , direction:"rtl" 
  }
  const ulStyle = {
    listStyleType: 'inherit',
    padding: '0',
    direction: 'rtl',
    fontFamily: 'Arial, sans-serif',
  };

  // استایل برای آیتم‌های لیست
  const liStyle = {
    fontFamily:"Vazirmatn" ,fontSize:"16px" , lineHeight:"1.88" , textAlign:"justify" , direction:"rtl" , marginBottom:"27px"
  };

    return (
        <>
        <div className='mt-2'>
            <MainTitle>مقیاس CEFR چیست؟</MainTitle>
            <div style={{ margin: '0px 20px', padding: '20px 20px 0 20px' }}>
      <ul style={ulStyle}>
        <li style={liStyle}>

          استاندارد CEFR در سطح بندی زبان انگلیسی، مخفف Common European Framework of Reference for Languages است. یک استاندارد اروپایی برای زبان انگلیسی که به عنوان مهم‌ترین و رایج‌ترین استاندارد انگلیسی در دنیا مطرح است.
        </li>
        <li style={liStyle}>

          استاندارد CEFR سطح‌های زبان را به شش سطح از A1 تا C2 تقسیم‌بندی می‌کند. این سطوح می‌توانند در سه دسته بزرگ‌تر به صورت سطح پایه، سطح متوسط و سطح پیشرفته قرار گیرند.
        </li>
        <li style={liStyle}>

          مقیاس CEFR در یادگیری زبان انگلیسی بسیار موفق عمل کرده زیرا رویکرد آن برمبنای مهارت ارتباطی تعریف شده است. در واقع، هدف CEFR صرفاً ارزیابی دانش زبانی خاصی نیست بلکه می‌کوشد انواع مهارت‌های خواندن، شنیدن، صحبت کردن، نوشتن و دستور زبان انگلیسی را به صورت کامل بررسی کند.
        </li>
      </ul>
    </div>
            <MainTitle>هر یک از مهارت‌های زبانی به چه معنایی هستند؟</MainTitle>
            <div style={{ margin: '0 20px', padding: '20px 20px 0px 20px' }}>
                <ul style={ulStyle}>
                <li style={liStyle}>
                برای مشاهده مهارت های زبانی هر سطح، روی آن کلیک کنید:
                </li>
                </ul>
            </div>
            {/* <SubTitle>برای مشاهده مهارت های زبانی هر سطح، روی آن کلیک کنید:</SubTitle> */}
            <br />
            <ArticleAccordian caption={"سطح A1"}>
  <div className='d-flex align-items-center flex-column flex-lg-row'>
    <Image
      style={{ width: "150px", height: "150px" }}
      className="mb-2 mb-lg-0"
      src={"/images/articles/cefr-scales/1.png"}
      width={1000}
      height={1000}
      alt="A1.png"
    />
    <div className='d-flex flex-column me-lg-4'>
      <h3 style={subTitleStyle}>درک مطلب: مهارت شنیداری</h3>
      <Paragraph>می‌توانید منظور کسی را متوجه شوید که آرام، شمرده، با مکث‌های طولانی و با استفاده از کلمات ساده صحبت می‌کند.</Paragraph>
      <h3 style={subTitleStyle}>درک مطلب: مهارت خواندن</h3>
      <Paragraph>می‌توانید متن‌های بسیار ساده و کوتاه را کلمه به کلمه خوانده و در آنها به دنبال عبارات آشنا بگردید.</Paragraph>
      <h3 style={subTitleStyle}>مهارت سخن گفتن: تعامل کلامی</h3>
      <Paragraph>1. می‌توانید به صورت ساده ارتباط برقرار کنید، اما با سرعت پایین و احتمالا با تکرار جملات.</Paragraph>
      <Paragraph>2. می‌توانید درباره موضوعات آشنا، سوالات بسیار ساده پرسیده یا به آنها به صورت کوتاه پاسخ دهید.</Paragraph>
      <h3 style={subTitleStyle}>مهارت سخن گفتن: تولید کلامی</h3>
      <Paragraph>می‌توانید با عبارات بسیار ساده که از قبل حفظ کرده‌اید درباره افراد، مکان‌ها و زندگی روزمره صحبت کنید.</Paragraph>
      <h3 style={subTitleStyle}>مهارت نوشتن: نوشتن</h3>
      <Paragraph>می‌توانید چندین جمله و عبارت محدود درباره موضوعات بسیار ساده بنویسید.</Paragraph>
    </div>
  </div>
</ArticleAccordian>

<ArticleAccordian caption={"سطح A2"}>
  <div className='d-flex align-items-center flex-column flex-lg-row'>
    <Image
      className='mb-2 mb-lg-0'
      style={{ width: "150px", height: "150px"}}
      src={"/images/articles/cefr-scales/2.png"}
      width={1000}
      height={1000}
      alt="A2.png"
    />
    <div className='d-flex flex-column me-lg-4'>
      <h3 style={subTitleStyle}>درک مطلب: مهارت شنیداری</h3>
      <Paragraph>1. می‌توانید صحبت‌ها درباره مسائل عادی و روزمره را متوجه شوید، به شرط آنکه به سادگی و وضوح کافی بیان شوند. </Paragraph>
      <Paragraph>2. اگر طرف مقابل با سرعت پایین و با استفاده از واژگان ساده صحبت کند، می‌توانید عبارت‌ها و اصطلاحات مربوط به مسائل اصلی (خانواده، خرید، محیط زندگی و کار) را درک کنید.</Paragraph>
      <h3 style={subTitleStyle}>درک مطلب: مهارت خواندن</h3>
      <Paragraph>1. می‌توانید متن‌های ساده و کوتاهی را که در آنها از واژه‌های ساده یا عبارات آشنا استفاده شده متوجه شوید.</Paragraph>
      <Paragraph>2. می‌توانید مطالب ساده درباره موضوعات عادی روزمره را مطالعه کرده و اطلاعات مورد نیاز خود را از داخل آنها پیدا کنید.</Paragraph>
      <Paragraph>3. می‌توانید نامه‌های کوتاه و ساده را متوجه شوید.</Paragraph>
      <h3 style={subTitleStyle}>مهارت سخن گفتن: تعامل کلامی</h3>
      <Paragraph>1. می‌توانید درباره موضوعات ساده و مشخص ارتباط برقرار کنید، به شرط آنکه طرف مقابل هم به شما کمک کند.</Paragraph>
      <Paragraph>2. می‌توانید در موضوعات پیش پا افتاده و قابل پیش‌بینی روزمره، سوالات کوتاه پرسیده و پاسخ‌های کوتاه بدهید.</Paragraph>
      <h3 style={subTitleStyle}>مهارت سخن گفتن: تولید کلامی</h3>
      <Paragraph>می‌توانید با استفاده از مجموعه‌ای از کلمات و جملات ساده، خانواده و دوستان، زندگی روزمره، اتفاقات گذشته، شغل و تحصیلات خود را توصیف کنید.</Paragraph>
      <h3 style={subTitleStyle}>مهارت نوشتن: نوشتن</h3>
      <Paragraph>می‌توانید درباره موضوعات ساده و روزمره جملات کوتاه نوشته و آنها را با حروف ربط به هم متصل کنید تا چیزی شبیه به یک پاراگراف ساده به دست آید.</Paragraph>
    </div>
  </div>
</ArticleAccordian>

<ArticleAccordian caption={"سطح B1"}>
  <div className='d-flex align-items-center flex-column flex-lg-row'>
    <Image
      style={{ width: "150px", height: "150px" }}
      className="mb-2 mb-lg-0"
      src={"/images/articles/cefr-scales/3.png"}
      width={1000}
      height={1000}
      alt="B1.png"
    />
    <div className='d-flex flex-column me-lg-4'>
      <h3 style={subTitleStyle}>درک مطلب: مهارت شنیداری</h3>
      <Paragraph>1. می‌توانید نکات اصلی و منظور کلی صحبت‌ها در مورد مسائل روزمره و آشنا (کار، تحصیل یا اوقات فراغت) را درک کنید به شرط آنکه با پیچیدگی خاصی بیان نشوند.</Paragraph>
      <Paragraph>2. در صورتی که طرف مقابل با سرعت بالا و لهجه نامعمول صحبت نکند، می‌توانید موضوعات ساده و آشنا را درک کرده و به جزئیات آنها نیز بپردازید.</Paragraph>
      <h3 style={subTitleStyle}>درک مطلب: مهارت خواندن</h3>
      <Paragraph>می‌توانید متن‌هایی درباره موضوعات واقعی، موضوعات مورد علاقه‌تان یا مرتبط با رشته کاری و تحصیلی خود را حد قابل قبولی درک کنید.</Paragraph>
      <h3 style={subTitleStyle}>مهارت سخن گفتن: تعامل کلامی</h3>
      <Paragraph>1. در هنگام سفر به یک کشور خارجی، خواهید توانست در موضوعات عادی و روزمره گلیم خود را از آب بیرون بکشید.</Paragraph>
      <Paragraph>2. می‌توانید بدون آمادگی قبلی در موضوعات آشنا شروع به صحبت کرده و با طرف مقابل به گفتگو بپردازید.</Paragraph>
      <h3 style={subTitleStyle}>مهارت سخن گفتن: تولید کلامی</h3>
      <Paragraph>1. می‌توانید به صورت ساده و نسبتا روان، جملاتی درباره موضوعات مورد علاقه خود بیان کنید.</Paragraph>
      <Paragraph>2. می‌توانید درباره نظرات و افکار خود، توضیح داده و دلیل بیاورید.</Paragraph>
      <h3 style={subTitleStyle}>مهارت نوشتن: نوشتن</h3>
      <Paragraph>1. می‌توانید یک متن معنادار و مشخص اما به زبان ساده درباره موضوعاتی که روی آنها تسلط دارید بنویسید.</Paragraph>
      <Paragraph>2. می‌توانید از علاقه‌ها و تجربیات شخصی خود جمله بسازید.</Paragraph>
    </div>
  </div>
</ArticleAccordian>

<ArticleAccordian caption={"سطح B2"}>
  <div className='d-flex align-items-center flex-column flex-lg-row'>
    <Image
      style={{ width: "150px", height: "150px" }}
      src={"/images/articles/cefr-scales/4.png"}
      className="mb-2 mb-lg-0"
      width={1000}
      height={1000}
      alt="B2.png"
    />
    <div className='d-flex flex-column me-lg-4'>
      <h3 style={subTitleStyle}>درک مطلب: مهارت شنیداری</h3>
      <Paragraph>1. می‌توانید صحبت کردن عادی افراد به صورت رو در رو، تلفنی، سخنرانی و... را درباره موضوعات آشنا یا ناآشنا متوجه شوید، مگر آنکه شخص مقابل از اصطلاحات دشوار استفاده کند.</Paragraph>
      <Paragraph>2. می‌توانید ایده و منظور اصلی افراد را در صحبت‌های استاندارد متوجه شده و در صورت آشنا بودن موضوع، جزئیات آن را نیز به خوبی درک کنید.</Paragraph>
      <Paragraph>3. می‌توانید در موضوعات آشنا، منظور طرف مقابل را به خوبی درک کنید، هر چند از عبارات دشوار و گرامرهای پیشرفته استفاده شود.</Paragraph>
      <h3 style={subTitleStyle}>درک مطلب: مهارت خواندن</h3>
      <Paragraph>1. می‌توانید با اعتماد به نفس بسراغ متن‌های استاندارد رفته و اطلاعات مورد نیاز خود را از آنها استخراج کنید.</Paragraph>
      <Paragraph>2. در درک متون مختلف مشکل چندانی ندارید، مگر آنکه در آنها از واژگان دشوار زیادی استفاده شده باشد.</Paragraph>
      <h3 style={subTitleStyle}>مهارت سخن گفتن: تعامل کلامی</h3>
      <Paragraph>1. می‌توانید به آسانی درباره موضوعات متفاوت با دیگران صحبت کنید و از واژه‌های رسمی نیز بهره بگیرید.</Paragraph>
      <Paragraph>2. می‌توانید با افراد Native ارتباط برقرار کرده و در مورد موضوعات نه چندان دشوار با آنها گفتگو کنید.</Paragraph>
      <h3 style={subTitleStyle}>مهارت سخن گفتن: تولید کلامی</h3>
      <Paragraph>می‌توانید به روشنی، درباره موضوعاتی که روی آن تسلط دارید صحبت کرده و جزئیات آن را توصیف کنید.</Paragraph>
      <h3 style={subTitleStyle}>مهارت نوشتن: نوشتن</h3>
      <Paragraph>می‌توانید متنی شفاف، روان و با جزئیات درباره موضوعات مورد علاقه یا تخصص خود نوشته و در صورت لزوم اطلاعات بیشتر ارائه کرده یا دلیل و مدرک بیاورید.</Paragraph>
    </div>
  </div>
</ArticleAccordian>

<ArticleAccordian caption={"سطح C1"}>
  <div className='d-flex align-items-center flex-column flex-lg-row'>
    <Image
      style={{ width: "150px", height: "150px" }}
      className="mb-2 mb-lg-0"
      src={"/images/articles/cefr-scales/5.png"}
      width={1000}
      height={1000}
      alt="C1.png"
    />
    <div className='d-flex flex-column me-lg-4'>
      <h3 style={subTitleStyle}>درک مطلب: مهارت شنیداری</h3>
      <Paragraph>1. می‌توانید سخنرانی‌‎های مختلف را درباره موضوعات متفاوت متوجه شوید، فقط اصطلاحات بسیار پیچیده و تخصصی یا لهجه ناآشنای طرف مقابل ممکن است کار را برای شما سخت کند.</Paragraph>
      <Paragraph>2. می‌توانید دامنه بزرگی از لغات و اصطلاحات متفاوت را متوجه شده و بدون دردسر منظور کلی هر صحبتی را بفهمید.</Paragraph>
      <h3 style={subTitleStyle}>درک مطلب: مهارت خواندن</h3>
      <Paragraph>1. می‌توانید متن‌های پیچیده و طولانی را مطالعه کنید، هرچند با موضوع تخصص شما مرتبط نباشند.</Paragraph>
      <Paragraph>2. احتمال دارد در بخش‌هایی که در آنها از واژگان تخصصی یا بسیار دشوار استفاده شده، نیاز داشته باشید جملات را چند بار خوانده یا معنی بعضی کلمات را در واژه نامه چک کنید.</Paragraph>
      <h3 style={subTitleStyle}>مهارت سخن گفتن: تعامل کلامی</h3>
      <Paragraph>1. می‌توانید بی مقدمه و به راحتی، با سرعت قابل قبول و بدون زحمت صحبت کنید و نظرات خود را با دیگران به اشتراک بگذارید.</Paragraph>
      <Paragraph>2. می‌توانید از زبان برای اهداف اجتماعی و حرفه‌ای و به شکلی کارآمد استفاده کنید.</Paragraph>
      <Paragraph>3. طبیعی است که در موضوعات بسیار دشوار و تخصصی ممکن است نتوانید به آسانی منظور خود را رسانده و نیاز به تکرار و توضیحات بیشتر احساس شود.</Paragraph>
      <h3 style={subTitleStyle}>مهارت سخن گفتن: تولید کلامی</h3>
      <Paragraph>می‌توانید با تسلط و آرامش درباره موضوعات نسبتا پیچیده سخنرانی کرده و برای جزئیات آن دلیل و برهان بیاورید.</Paragraph>
      <h3 style={subTitleStyle}>مهارت نوشتن: نوشتن</h3>
      <Paragraph>1. می‌توانید به خوبی و روشنی و با ساختاری استاندارد درباره نظرات خود نوشته و یا از کسی انتقاد کنید.</Paragraph>
      <Paragraph>2. می‌توانید با کیفیت بالا نامه یا گزارشی بنویسید که در آن نقاط قوت و ضعف، دلیل و مثال، مقدمه و نتیجه گیری مناسب وجود داشته باشد.</Paragraph>
    </div>
  </div>
</ArticleAccordian>

<ArticleAccordian caption={"سطح C2"}>
  <div className='d-flex align-items-center flex-column flex-lg-row'>
    <Image
      style={{ width: "150px", height: "150px" }}
      className="mb-2 mb-lg-0"
      src={"/images/articles/cefr-scales/6.png"}
      width={1000}
      height={1000}
      alt="C2.png"
    />
    <div className='d-flex flex-column me-lg-4'>
      <h3 style={subTitleStyle}>درک مطلب: مهارت شنیداری</h3>
      <Paragraph>1. می‌توانید انواع صحبت‌ها را به هر شکل ممکن (رو در رو، تلفنی، برنامه‌های رادیویی و...) متوجه شوید، هرچند سرعت آنها بالا بوده یا لهجه خاصی داشته باشند.</Paragraph>
      <Paragraph>2. می‌توانید برنامه‌های تلویزیونی و فیلم‌ها را بدون زحمت و دردسر متوجه شوید.</Paragraph>
      <h3 style={subTitleStyle}>درک مطلب: مهارت خواندن</h3>
      <Paragraph>1. می‌توانید به آسانی و بدون زحمت انواع متون ادبی و غیر ادبی را مطالعه کرده و معنا و مفهوم آنها را کاملا درک کنید.</Paragraph>
      <Paragraph>2. می‌توانید متن‌های پیچیده و طولانی مختلف را مطالعه کنید بی آنکه مشکلی در درک واژگان دشوار و اصطلاحات پیچیده داشته باشید.</Paragraph>
      <h3 style={subTitleStyle}>مهارت سخن گفتن: تعامل کلامی</h3>
      <Paragraph>1. تسلط خوبی روی انواع واژگان و اصطلاحات دشوار دارید و می‌توانید طرف مقابل را متقاعد به قبول نظرات خود کنید.</Paragraph>
      <Paragraph>2. می‌توانید دیدگاه‌های خود را به روشنی بیان کرده و حتی از اصطلاحات ظریف‌ و کنایه آمیز استفاده کنید.</Paragraph>
      <h3 style={subTitleStyle}>مهارت سخن گفتن: تولید کلامی</h3>
      <Paragraph>می‌توانید به روشنی، به شکلی ساختارمند و جذاب درباره هر موضوعی صحبت کرده و دلیل و برهان بیاورید، به شکلی که موضوع کاملا در ذهن شنونده نشسته و روی او تاثیری مثبت بگذارد.</Paragraph>
      <h3 style={subTitleStyle}>مهارت نوشتن: نوشتن</h3>
      <Paragraph>می‌توانید نامه‌ها، گزارش‌ها یا مقالات پیچیده‌ و تاثیرگذاری بنویسید که ادعایی را با ساختار مناسب مطرح میکنند، خواننده را متقاعد نموده و کاری میکنند تا او به نکات مهم پی متن برده و آنها را به خاطر بسپارد.</Paragraph>
    </div>
  </div>
</ArticleAccordian>


        </div>
        <>
            <div className='container'>
                          <MainTitle>میزان تناسب نمرات آزمون آیلتس با سطوح CEFR :</MainTitle>
                <div className='row align-items-center'>
                      <div className='col-12 col-md-6'>
                          <h3 className='text-center text-md-end' style={{fontSize:"15px" , fontFamily:"KalamehWeb-Bold"}}>این اطلاعات برگرفته از سایت جامع دانشگاه کمبریج میباشد:</h3>
                          
                          <Paragraph>1. نمره 4 تا 5 آزمون آیلتس در سطح B1</Paragraph>
                          <Paragraph>2. نمره 5 تا 6.25 در سطح B2</Paragraph>
                          <Paragraph>3. نمره 6.25 تا 7.5 در سطح C1</Paragraph>
                          <Paragraph>4. از نمره 7.5 به بالا در سطح C2</Paragraph>
                          <Paragraph>- توجه: برای نمرات بالا مقداری درصد خطا درنظر گرفته شود.</Paragraph>
                      </div>
                      <div className='col-12 col-md-6'>
                            <Image className='img-fluid' src={"/images/articles/cefr-scales/ielts.png"} width={957} height={1013} alt="IELTS" />
                      </div>
                </div>
            </div>

        </>
        <>
        <MainTitle>چقدر طول می‌کشد تا به سطوح بالاتر برسم؟</MainTitle>
        <div style={{ margin: '20px', padding: '20px' }}>
        <ul style={ulStyle}>
        <li style={liStyle}>
          بر اساس ارزیابی کمبریج، زبان‌آموز برای گذراندن یک سطح و رسیدن به سطح دیگر، به مدت زمان مشخصی برای یادگیری نیاز دارد که به آن «ساعت‌های آموزشی هدایت‌شده» (Guided Learning Hours) می‌گویند. در این زمینه، جدول زیر اطلاعات کاملی را دراختیار شما قرار خواهد داد:
        </li>
      </ul>
    </div>
        <LearningHoursTable />
        <div style={{ margin: '0 20px', padding: '20px 20px 0px 20px' }}>
                <ul style={ulStyle}>
                <li style={liStyle}>
                توجه: ساعت‌های آموزشی ممکن است برای همه یکسان نباشند اما میتوانند به زبان آموز کمک کنند تا بتواند مدت زمانی را که برای رسیدن به یک سطح خاص نیاز دارد، به طور حدودی تخمین بزند.
                </li>
                </ul>
            </div>
        {/* <Paragraph>توجه: ساعت‌های آموزشی ممکن است برای همه یکسان نباشند اما میتوانند به زبان آموز کمک کنند تا بتواند مدت زمانی را که برای رسیدن به یک سطح خاص نیاز دارد، به طور حدودی تخمین بزند. </Paragraph> */}
        </>
        <>

        <ReadMoreBox title={"منابع مقاله"}>
            <Link target="_blank" className='my-3 text-primary d-block text-start fw-bold' style={{fontSize:"13px"}} href={"https://www.cambridgeenglish.org/exams-and-tests/cefr"}>https://www.cambridgeenglish.org/exams-and-tests/cefr</Link>
            <Link target="_blank" className='my-3 text-primary d-block text-start fw-bold' style={{fontSize:"13px"}} href={"https://www.englishprofile.org/the-cefr "}>https://www.englishprofile.org/the-cefr </Link>
        </ReadMoreBox>
        </>
        </>
    );
};

export default ArticleContent;