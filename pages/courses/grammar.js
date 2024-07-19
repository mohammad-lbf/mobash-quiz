
import Head from 'next/head';
import GrammarPage from '../../components/templates/courses/GrammarPage';


const Grammar = () => {
    return (
        <div className='pb-4'>
            <Head>
              <meta name="description" content="" />
              <meta name="robots" content="index, follow" />
              <meta name="googlebot" content="index, follow" />

              <meta name="og:title" content="Mobash Academy | دوره اختصاصی گرامر" />
              <meta name="og:description" content="" />

              <title>Mobash Academy | دوره اختصاصی گرامر</title>
            </Head>
            <GrammarPage />
        </div>
    );
};

export default Grammar;