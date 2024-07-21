
import Head from 'next/head';
import EntrancePage from '../../components/templates/courses/EntrancePage';


const Entrance = () => {
    return (
        <div className=' pb-4'>
            <Head>
              <meta name="description" content="زبان انگلیسی یکی از شیرین‌ترین، کاربردی‌ترین و پرطرفدارترین زبان‌های دنیا محسوب می‌شود. افراد زیادی در سرتاسر جهان به این زبان صحبت می‌کنند و بسیاری از پژوهش‌ها و تعاملات علمی دنیا به زبان انگلیسی صورت می‌گیرد. علاوه برآن، فرصت‌های شغلی این رشته تنوع بسیار بالایی دارد و به همین دلیل است که سالانه تعداد زیادی از دانش آموزان، در کنکور زبان‌های خارجه به عنوان رشته تخصصی و یا شناور، به رقابت می‌پردازند." />
              <meta name="robots" content="index, follow" />
              <meta name="googlebot" content="index, follow" />

              <meta name="og:title" content="Mobash Academy | کلاس های کنکوری و رفع اشکال" />
              <meta name="og:description" content="زبان انگلیسی یکی از شیرین‌ترین، کاربردی‌ترین و پرطرفدارترین زبان‌های دنیا محسوب می‌شود. افراد زیادی در سرتاسر جهان به این زبان صحبت می‌کنند و بسیاری از پژوهش‌ها و تعاملات علمی دنیا به زبان انگلیسی صورت می‌گیرد. علاوه برآن، فرصت‌های شغلی این رشته تنوع بسیار بالایی دارد و به همین دلیل است که سالانه تعداد زیادی از دانش آموزان، در کنکور زبان‌های خارجه به عنوان رشته تخصصی و یا شناور، به رقابت می‌پردازند." />

              <title>Mobash Academy | کلاس های کنکوری و رفع اشکال</title>
            </Head>
            <EntrancePage />
        </div>
    );
};

export default Entrance;