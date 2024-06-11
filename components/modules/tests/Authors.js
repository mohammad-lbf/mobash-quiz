import Image from 'next/image';

const Authors = () => {
    return (
        <>
            <h3 className="color-linear text-center text-lg-end">طراحان</h3>
            <div style={{width:"150px"}} className="lbf-after-card-img mx-lg-0 mb-4 mt-0 mx-auto"></div>
            <div style={{ borderRadius:"15px"}} className="bg-gray-850 border-gray-800 shadow-sm d-flex flex-column align-items-center">
                <div className="d-flex justify-content-start align-items-center w-100 px-2 py-3">
                    <Image alt='author-image' className='rounded-circle ms-3' width={55} height={55} src={'/images/20220719_222926.jpg'} />
                    <p className="weblogs__author-name mb-0">امیرحسین مبشری</p>

                </div>
            </div>

        </>
    );
};

export default Authors;