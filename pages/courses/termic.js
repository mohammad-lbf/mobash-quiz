
import Head from 'next/head';
import TermicPage from '../../components/templates/courses/TermicPage';


const Termic = () => {
    return (
        <div className=' pb-4'>
            <Head>
              <meta name="description" content="" />
              <meta name="robots" content="index, follow" />
              <meta name="googlebot" content="index, follow" />

              <meta name="og:title" content="Mobash Academy | دوره های ترمیک و فشرده" />
              <meta name="og:description" content="" />

              <title>Mobash Academy | دوره های ترمیک و فشرده</title>
            </Head>
            <TermicPage />
        </div>
    );
};

export default Termic;