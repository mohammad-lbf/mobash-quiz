import React , {useEffect} from 'react';
import { useSelector , useDispatch } from 'react-redux';
import Link from 'next/link';
import ReportQuestion from './ReportQuestion';

const Report = (props) => {
    const {questions , noAnswers , corrects , incorrects} = useSelector(state => state);
    const dispatch = useDispatch()
    const{testName , testLevel , userStatus , passPoint , testTime , categoryInp} = props.testData;
    const pointPercent = (corrects.length / questions.length)*100;

    return (
        <div className="d-flex flex-column align-items-center text-dark w-100 mt-3">
            <div style={{width:"300px" , backgroundColor:"#151d38" , fontSize:"16px"}} className="text-dark text-center py-3 text-white rounded">
            <p>آزمون پایان یافت</p>
            <p className="mt-3">نمره شما {pointPercent} از 100</p>
            <p className="mt-3"> وضعیت  : {pointPercent < passPoint ? "مردود" : "قبول"}</p>
            </div>
            {
                pointPercent < passPoint ?
                <p style={{fontSize:"15px"}} className="fw-bold my-3">متاسفیم، شما نمی‌توانید به آزمون سطح بعد بروید</p> :
                <p style={{fontSize:"15px"}} className="fw-bold my-3">تبریک، شما می‌توانید در آزمون سطح بعد شرکت کنید</p>
            }
            <div className="text-center fs-15 w-100 d-flex  justify-content-center align-items-center flex-column">
                <p style={{width:"250px" , height:"40px" , direction:"ltr" , paddingTop:"13px"}} className="my-1 mx-1 mx-sm-2 px-3 rounded bg-light text-dark border"> {questions.length} : تعداد کل سوالات</p>
                <p style={{width:"250px" , height:"40px" , direction:"ltr" , paddingTop:"13px"}} className="my-1 mx-1 mx-sm-2 px-3 rounded bg-success text-white">{corrects.length} : تعداد پاسخ های درست</p>
                <p style={{width:"250px" , height:"40px" , direction:"ltr" , paddingTop:"13px"}} className="my-1 mx-1 mx-sm-2 px-3 rounded bg-danger  text-white">{incorrects.length} : تعداد پاسخ های نادرست</p>
                <p style={{width:"250px" , height:"40px" , direction:"ltr" , paddingTop:"13px"}} className="my-1 mx-1 mx-sm-2 px-3 rounded bg-warning text-main-1">{noAnswers.length} : تعداد سوالات بدون پاسخ</p>
                {/* <p style={{width:"250px" , height:"40px"}} className="py-1 mx-1 mx-sm-2 px-3 rounded bg-main-1"> وضعیت  : {pointPercent < passPoint ? "مردود" : "قبول"}</p> */}
            </div>
            <Link style={{backgroundColor:"#151d38"}} className="text-decoration-none text-white mt-4 text-dark py-2 px-3 rounded" href="/tests">بازگشت به صفحه آزمون ها</Link>
            <div className="w-100 text-end mt-3">
                <p className="fw-200 text-center w-100 fs-4 py-3 border-bottom border-top ">پاسخنامه سوالات:</p>
                {questions.map(item => <ReportQuestion {...item} /> )}
            </div>
            <Link style={{backgroundColor:"#151d38"}} className="text-decoration-none py-1 px-3 rounded text-white py-2 my-3" href="/tests">بازگشت به صفحه اصلی</Link>
        </div>
    );
};

export default Report;