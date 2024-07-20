import Image from 'next/image';
import React from 'react';

const ArticleCoverPhoto = ({coverPhoto}) => {
    return (
        <div style={{maxWidth:"500px"}}>

            <Image alt='image-coverPhoto' width={1000} height={300} className="rounded border mt-4 img-fluid" src={coverPhoto} />
        </div>
    );
};

export default ArticleCoverPhoto;