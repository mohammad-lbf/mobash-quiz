
import Head from 'next/head';
import TermicPage from '../../components/templates/courses/TermicPage';


const Termic = () => {
    return (
        <div className=' pb-4'>
            <Head>
              <meta name="description" content="در این دوره زبان انگلیسی در کنار تدریس هر 4 مهارت اصلی زبان انگلیسی شامل: Reading، Writing، Listening، Speaking و زیرمهارت های Vocabulary، Grammar، Pronunciation تاکید بسیار ویژه ای بر ارتقا مهارت مکالمه وجود دارد به طوری که زبان آموزان بتوانند پس از پایان هر ترم به راحتی از تمامی ساختارها و لغات نو آموخته خود در مکالمات روزمره استفاده نمایند." />
              <meta name="robots" content="index, follow" />
              <meta name="googlebot" content="index, follow" />

              <meta name="og:title" content="Mobash Academy | دوره های ترمیک و فشرده" />
              <meta name="og:description" content="در این دوره زبان انگلیسی در کنار تدریس هر 4 مهارت اصلی زبان انگلیسی شامل: Reading، Writing، Listening، Speaking و زیرمهارت های Vocabulary، Grammar، Pronunciation تاکید بسیار ویژه ای بر ارتقا مهارت مکالمه وجود دارد به طوری که زبان آموزان بتوانند پس از پایان هر ترم به راحتی از تمامی ساختارها و لغات نو آموخته خود در مکالمات روزمره استفاده نمایند." />

              <title>Mobash Academy | دوره های ترمیک و فشرده</title>
            </Head>
            <TermicPage />
        </div>
    );
};

export default Termic;