import Image from 'next/image';
import Link from 'next/link';
// import '../../styles/components/modules/card.css';

const Card = ({image , title , duration , slug}) => {
    return (
        <Link href={`/weblog/${slug}`}>
            <div className='lbf-card border-gray-800 bg-gray-850'>
            <div className='lbf-card-image-article'>
                <Image
                 className='w-100'
                 width={1080} height={170} 
                 alt='article-cover-photo' 
                 src={`/images/articles/${slug}/${image}`} />
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
                    <h2 class="lbf-card-title">{title}</h2>
                    <div class="lbf-card-teacher mb-3">
                    <i class="bi bi-pen-fill"></i> محمد لبافی
                    </div>
                    <div class="article-duration ">
                        <i class="bi bi-clock"></i> {duration}
                    </div>
                </div>
            </div>
        </div>
        </Link>
    );
};

export default Card;