import Image from 'next/image';
import React from 'react';

const ArticleCoverPhoto = ({coverPhoto}) => {
    return (
        <Image alt='image-coverPhoto' width={1000} height={300} className="rounded mt-4 img-fluid" src={coverPhoto} />
    );
};

export default ArticleCoverPhoto;