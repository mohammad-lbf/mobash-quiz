
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';


const NotFound = () => {
    return (
        <div className='page-padding-tops pb-2 mt-2'>
            <Head>
              <title>صفحه مورد نظر یافت نشد!</title>
            </Head>
            <section className="my-3 mt-4 py-3 p-lg-4 section-block aos-init aos-animate" id="about-section" data-aos="fade-up">
      <div className="container">
            <div className='row bg-white border flex-column align-items-center justify-content-center py-4 rounded'>
                <h3 className='text-center mb-2' style={{fontFamily:"KalamehWeb-Bold" , fontSize:"25px"}}>صفحه مورد نظر شما یافت نشد</h3>
                <Image style={{maxWidth:"400px" , height:"300px"}} className='img-fluid rounded-circle my-4' src={"/images/404.png"} width={752} height={564} />
                <Link style={{width:"fit-content" , fontFamily:"KalamehWeb-Bold"}} className='mt-3 btn-main-2 text-white' href={"/"}>بازگشت به صفحه اصلی</Link>
            </div>
      </div>
    </section>
        </div>
    );
};

export default NotFound;