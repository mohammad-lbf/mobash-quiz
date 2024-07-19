import Head from 'next/head';
import DiscussionPage from '../../components/templates/courses/DiscussionPage';


const Discussion = () => {
    return (
        <div className=' pb-4'>
            <Head>
              <meta name="description" content="" />
              <meta name="robots" content="index, follow" />
              <meta name="googlebot" content="index, follow" />

              <meta name="og:title" content="Mobash Academy | کلاس های مکالمه و بحث آزاد" />
              <meta name="og:description" content="" />

              <title>Mobash Academy | کلاس های مکالمه و بحث آزاد</title>
            </Head>
            <DiscussionPage />
        </div>
    );
};

export default Discussion;