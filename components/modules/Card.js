import Image from 'next/image';
import Link from 'next/link';

const Card = ({title , caption, slug}) => {
    return (
        <Link className='mb-3' href={`/tests/${slug}`}>
            <div className='lbf-card border-gray-800 bg-gray-850 mb-0'>
            <div className='lbf-card-image-article'>
                <Image
                 className='w-100'
                 width={1080} height={170} 
                 alt='article-cover-photo' 
                 src={`/images/tests/${slug}.jpg`} />
            </div>
            <div className='p-relative'>
                <div className='lbf-card-author-image'>
                    <Image
                     style={{width:"60px" , height:"60px"}}
                     alt='author-image'
                     width={300} height={300}
                     src={'/images/20220719_222926.jpg'} />
                </div>
                <div class="lbf-after-card-img"></div>
                <div className='lbf-card-desc'>
                    <h2 class="lbf-card-title">آزمون {title}</h2>
                    <div class="lbf-card-teacher mb-3">
                    <i class="bi bi-pen-fill"></i> امیرحسین مبشری
                    </div>
                    <div class="article-duration">
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است
                    </div>
                </div>
            </div>
            <Link style={{borderRadius:"0"}} className="btn btn-linear d-inline-block hover-shadow w-100" href={`/tests/${slug}`}>شرکت در آزمون</Link>
        </div>
        </Link>
    );
};

export default Card;