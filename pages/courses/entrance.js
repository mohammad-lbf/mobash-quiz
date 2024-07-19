
import Head from 'next/head';
import EntrancePage from '../../components/templates/courses/EntrancePage';


const Entrance = () => {
    return (
        <div className=' pb-4'>
            <Head>
              <meta name="description" content="" />
              <meta name="robots" content="index, follow" />
              <meta name="googlebot" content="index, follow" />

              <meta name="og:title" content="Mobash Academy | کلاس های کنکوری و رفع اشکال" />
              <meta name="og:description" content="" />

              <title>Mobash Academy | کلاس های کنکوری و رفع اشکال</title>
            </Head>
            <EntrancePage />
        </div>
    );
};

export default Entrance;