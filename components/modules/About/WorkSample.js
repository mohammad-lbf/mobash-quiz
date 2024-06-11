
import React from 'react';

const WorkSample = ({title , link , image}) => {
    return (
        <div className="col-12 col-md-6">
                <div style={{borderRadius:"12px" , marginBottom:"23px"}} className="d-flex align-items-center justify-content-sm-between flex-column flex-sm-row bg-gray-850 border-gray-800 p-3 shadow-sm">
                    <div className='d-flex align-items-center flex-column flex-sm-row mb-4 mb-sm-0'>
                        <img className='rounded ms-0 ms-sm-2 mb-4 mb-sm-0 ' width={50} height={50} src={`/images/components/modules/workSamples/${image}`}  />
                        <p className="fw-bold color-gray-600 ms-2 mb-0 skill-card__skill mb-0">{title}</p>
                    </div>
                    <a href={link} rel="noreferrer" target="_blank">
                        مشاهده در گیت هاب
                    </a>
            </div>
        </div>
    );
};

export default WorkSample;