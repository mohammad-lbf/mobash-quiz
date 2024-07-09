import React from 'react';
import Link from 'next/link';

const GrammarTestLevel = ({level , pastLevel ,name , userStatus , userMark , pastLevelStatus}) => {
    return (
        <div style={{overflow:"hidden" , borderRadius:"10px" , backgroundColor:"#29235c"}} className='w-100 my-3 py-3 d-flex align-items-center '>
        <div className='px-3 d-flex flex-column flex-sm-row align-items-center justify-content-center justify-content-sm-between w-100'>
        <div className='text-center text-sm-end' >
            <p style={{fontSize:"15px" , color:"#ffb400" , fontFamily:'KalamehWeb-SemiBold'}} className='fw-bold text-center text-sm-end'>{name}</p>
            <p style={{fontSize:"13px" , fontFamily:'KalamehWeb-Medium' , color:"#f9f8f8"}} className={`lh-lg text-center text-sm-end my-2 mb-sm-0 ms-2`}>
                {
                    userStatus=="not-passed" && level=="A1Low" ?  `برای شرکت در آزمون، روی "ورود به آزمون" کلیک کنید` : 
                    userStatus=="passed" && level=="A1Low" ? `شما در این آزمون شرکت کرده اید. نمره شما : ${userMark} از  100` :
                    userStatus=="failed" && level=="A1Low" && `شما در این آزمون شرکت کرده و مردود شده اید. نمره شما : ${userMark} از 100`
                }
                {
                    userStatus=="not-passed" && level!=="A1Low" && pastLevelStatus =="passed" ? `برای شرکت در آزمون، روی "ورود به آزمون" کلیک کنید` : 
                    userStatus=="not-passed" && level!=="A1Low" && pastLevelStatus =="not-passed" || pastLevelStatus=="failed" ? `برای شرکت در این آزمون، باید در آزمون سطح ${pastLevel} نمره قبولی را کسب نمایید ` : 
                    userStatus=="passed" && level!=="A1Low" ? `شما در این آزمون شرکت کرده اید. نمره شما : ${userMark} از 100` :
                    userStatus=="failed" && level!=="A1Low" && `شما در این آزمون شرکت کرده و مردود شده اید. نمره شما : ${userMark} از 100`
                }
            </p>
        </div>
        {
            level == "A1Low" && userStatus == "not-passed" ? 
            <Link className="btn btn-linear d-inline-block hover-up hover-shadow mt-3 mt-sm-0 d-flex align-items-center justify-content-center" style={{fontFamily:'KalamehWeb-Regular',  width:"175px" , height:"40px"}} href={`/tests/public/${level}`}>ورود به آزمون</Link> :
            userStatus == "not-passed" && pastLevelStatus == "passed" ?
            <Link className="btn btn-linear d-inline-block hover-up hover-shadow mt-3 mt-sm-0 d-flex align-items-center justify-content-center" style={{fontFamily:'KalamehWeb-Regular',  width:"165px" , height:"40px"}} href={`/tests/public/${level}`}>ورود به آزمون</Link> :
            userStatus == "not-passed" && pastLevelStatus !=="passed" ?
            <Link className="btn btn-linear d-inline-block hover-up hover-shadow disabled mt-3 mt-sm-0 d-flex align-items-center justify-content-center" style={{fontFamily:'KalamehWeb-Regular',  width:"175px" , height:"40px"}} href={`/tests/public/${level}`}>ورود به آزمون<i className="bi bi-lock-fill me-1 pt-1"></i></Link> :
            userStatus =="passed" ? <Link className="btn btn-linear disabled d-inline-block hover-up hover-shadow mt-3 mt-sm-0 d-flex align-items-center justify-content-center" style={{fontFamily:'KalamehWeb-Regular',  width:"165px" , height:"50px"}} href={`/tests/public/${level}`}>شما در این آزمون شرکت کرده اید</Link> :
            userStatus =="failed" && <Link className="btn btn-danger text-white d-inline-block text-white mt-3 mt-sm-0 d-flex align-items-center justify-content-center" style={{fontFamily:'KalamehWeb-Regular',  width:"165px" , height:"40px"}} href={`/tests/public/${level}`}>آزمون مجدد</Link>
        }
        </div>
    </div>
    );
};

export default GrammarTestLevel;