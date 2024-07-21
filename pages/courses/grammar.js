
import Head from 'next/head';
import GrammarPage from '../../components/templates/courses/GrammarPage';


const Grammar = () => {
    return (
        <div className='pb-4'>
            <Head>
              <meta name="description" content="دوره جامع گرامر (Grammar) زبان انگلیسی یک فرصت عالی برای تقویت مهارت‌های زبانی و ارتقاء دانش زبان انگلیسی شماست که به کمک آن می‌توانید ساختار جملات را به درستی متوجه شوید, اشتباهات رایج تان را کاهش داده و توانایی صحبت کردن (Speaking) و نوشتن (Writing) بهتری پیدا کنید." />
              <meta name="robots" content="index, follow" />
              <meta name="googlebot" content="index, follow" />

              <meta name="og:title" content="Mobash Academy | دوره اختصاصی گرامر" />
              <meta name="og:description" content="دوره جامع گرامر (Grammar) زبان انگلیسی یک فرصت عالی برای تقویت مهارت‌های زبانی و ارتقاء دانش زبان انگلیسی شماست که به کمک آن می‌توانید ساختار جملات را به درستی متوجه شوید, اشتباهات رایج تان را کاهش داده و توانایی صحبت کردن (Speaking) و نوشتن (Writing) بهتری پیدا کنید." />

              <title>Mobash Academy | دوره اختصاصی گرامر</title>
            </Head>
            <GrammarPage />
        </div>
    );
};

export default Grammar;