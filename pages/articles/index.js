
import Head from 'next/head';
import ArticlesPage from '../../components/templates/ArticlesPage';


const Articles = () => {
    return (
        <div className='page-padding-tops pb-4'>
            <Head>
              <meta name="description" content="" />
              <meta name="robots" content="index, follow" />
              <meta name="googlebot" content="index, follow" />

              <meta name="og:title" content="Mobash Academy | مقالات" />
              <meta name="og:description" content="" />

              <title>Mobash Academy | مقالات</title>
            </Head>
            <ArticlesPage />
        </div>
    );
};

export default Articles;