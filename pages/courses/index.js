
import Head from 'next/head';
import CoursesPage from '../../components/templates/CoursesPage'

const Courses = () => {
    return (
        <div className='page-padding-tops pb-4'>
            <Head>
              <meta name="description" content="" />
              <meta name="robots" content="index, follow" />
              <meta name="googlebot" content="index, follow" />

              <meta name="og:title" content="Mobash Academy | دوره ها و کلاس های آموزشی" />
              <meta name="og:description" content="" />

              <title>Mobash Academy | دوره ها و کلاس های آموزشی</title>
            </Head>
           <CoursesPage />
        </div>
    );
};

export default Courses;