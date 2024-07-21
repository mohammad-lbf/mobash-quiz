
import Head from 'next/head';
import CoursesPage from '../../components/templates/CoursesPage'

const Courses = () => {
    return (
        <div className='page-padding-tops pb-4'>
            <Head>
              <meta name="description" content="با کلیک بر روی هر یک از دوره‌ها می‌توانید اطلاعات و جزئیات کامل آن دوره که شامل موضوعات, سرفصل‌ها, مدت زمان و نحوه ثبت نام می‌باشد را مشاهده کنید." />
              <meta name="robots" content="index, follow" />
              <meta name="googlebot" content="index, follow" />

              <meta name="og:title" content="Mobash Academy | دوره ها و کلاس های آموزشی" />
              <meta name="og:description" content="با کلیک بر روی هر یک از دوره‌ها می‌توانید اطلاعات و جزئیات کامل آن دوره که شامل موضوعات, سرفصل‌ها, مدت زمان و نحوه ثبت نام می‌باشد را مشاهده کنید." />

              <title>Mobash Academy | دوره ها و کلاس های آموزشی</title>
            </Head>
           <CoursesPage />
        </div>
    );
};

export default Courses;