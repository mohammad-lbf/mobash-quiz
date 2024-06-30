import React from 'react';
import Link from 'next/link';

const GrammarTestLevel = ({level , pastLevel ,name , userStatus , userMark , pastLevelStatus}) => {
    return (
        <div style={{overflow:"hidden" , borderRadius:"10px"}} className='w-100 my-3 py-3 shadow-sm d-flex align-items-center border-gray-800 bg-gray-850'>
        <div className='px-3 d-flex flex-column flex-sm-row align-items-center justify-content-center justify-content-sm-between w-100'>
        <div className='text-center text-sm-end'>
            <p style={{fontSize:"14px"}} className='article-subTitle fw-bold text-center text-sm-end'>{name}</p>
            <p style={{fontSize:"12px"}} className={`article-subTitle text-center text-sm-end my-2 mb-sm-0 ms-2`}>
                {
                    userStatus=="not-passed" && level=="A1" ?  `برای شرکت در آزمون، روی "شروع آزمون" کلیک کنید` : 
                    userStatus=="passed" && level=="A1" ? `شما در این آزمون شرکت کرده اید. نمره شما : ${userMark} از  100` :
                    userStatus=="failed" && level=="A1" && `شما در این آزمون شرکت کرده و مردود شده اید. نمره شما : ${userMark} از 100`
                }
                {
                    userStatus=="not-passed" && level!=="A1" && pastLevelStatus =="passed" ? `برای شرکت در آزمون، روی "شروع آزمون" کلیک کنید` : 
                    userStatus=="not-passed" && level!=="A1" && pastLevelStatus =="not-passed" || pastLevelStatus=="failed" ? `برای شرکت در این آزمون، باید در آزمون سطح ${pastLevel} نموه قبولی را کسب نمایید ` : 
                    userStatus=="passed" && level!=="A1" ? `شما در این آزمون شرکت کرده اید. نمره شما : ${userMark} از 100` :
                    userStatus=="failed" && level!=="A1" && `شما در این آزمون شرکت کرده و مردود شده اید. نمره شما : ${userMark} از 100`
                }
            </p>
        </div>
        {
            level == "A1" && userStatus == "not-passed" ? 
            <Link class="btn btn-linear d-inline-block hover-up hover-shadow mt-3 mt-sm-0 d-flex align-items-center justify-content-center" style={{width:"130px" , height:"40px"}} href={`/tests/grammar/${level}Level`}>ورود به آزمون</Link> :
            userStatus == "not-passed" && pastLevelStatus == "passed" ?
            <Link class="btn btn-linear d-inline-block hover-up hover-shadow mt-3 mt-sm-0 d-flex align-items-center justify-content-center" style={{width:"130px" , height:"40px"}} href={`/tests/grammar/${level}Level`}>ورود به آزمون</Link> :
            userStatus == "not-passed" && pastLevelStatus !=="passed" ?
            <Link class="btn btn-linear d-inline-block hover-up hover-shadow disabled mt-3 mt-sm-0 d-flex align-items-center justify-content-center" style={{width:"140px" , height:"40px"}} href={`/tests/grammar/${level}Level`}>ورود به آزمون<i class="bi bi-lock-fill me-1 pt-1"></i></Link> :
            userStatus =="passed" ? <Link class="btn btn-linear disabled d-inline-block hover-up hover-shadow mt-3 mt-sm-0 d-flex align-items-center justify-content-center" style={{width:"140px" , height:"50px"}} href={`/tests/grammar/${level}Level`}>شما در این آزمون شرکت کرده اید</Link> :
            userStatus =="failed" && <Link class="btn btn-danger text-white d-inline-block text-white mt-3 mt-sm-0 d-flex align-items-center justify-content-center" style={{width:"130px" , height:"40px"}} href={`/tests/grammar/${level}Level`}>آزمون مجدد</Link>
        }
        </div>
    </div>
    );
};

export default GrammarTestLevel;