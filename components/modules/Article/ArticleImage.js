import Image from 'next/image';
import React from 'react';

const ArticleImage = ({src , width , height , alt , style}) => {
    return (
        <div className='d-flex justify-content-center py-3'>
            <Image style={style} className='img-fluid' src={src} width={width} height={height} alt={alt} />
        </div>
    );
};

export default ArticleImage;