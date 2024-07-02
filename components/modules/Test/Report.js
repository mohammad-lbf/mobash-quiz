import React, { useEffect , useState} from 'react';
import { useSelector } from 'react-redux';
import Link from 'next/link';
import ReportQuestion from './ReportQuestion';
import { useRouter } from 'next/router';
import DownloadPdfButton from './DownloadPdfButton';

const Report = (props) => {
    const { questions, noAnswers, corrects, incorrects } = useSelector(state => state);
    const { testLevel, passPoint, categoryInp, category , nextLevel , nextLevelName } = props.testData;
    const [userLocalName , setUserLocalName] = useState("")
    const pointPercent = (corrects.length / questions.length) * 100;
    const router = useRouter()
    useEffect(() => {
        if (typeof window !== 'undefined') {
            const storedUserData = localStorage.getItem('userData');
            
            let userData = {};

            if (storedUserData) {
                userData = JSON.parse(storedUserData);
                setUserLocalName(localStorage.getItem('userName'))
            } else {
                // اگر userData وجود ندارد، یک شیء جدید ایجاد کنید
                userData = {
                    userName,
                    userTests: {
                      grammar: {
                        A1: { userStatus: 'not-passed', userMark: '0' },
                        A2: { userStatus: 'not-passed', userMark: '0' },
                        B1: { userStatus: 'not-passed', userMark: '0' },
                        B1Plus: { userStatus: 'not-passed', userMark: '0' },
                        B2: { userStatus: 'not-passed', userMark: '0' },
                        C1: { userStatus: 'not-passed', userMark: '0' },
                      },
                      public: {
                         A1Low: { userStatus: 'not-passed', userMark: '0' },
                          A1High: { userStatus: 'not-passed', userMark: '0' },
                           B1low: { userStatus: 'not-passed', userMark: '0' },
                            B2High: { userStatus: 'not-passed', userMark: '0' },
                             C1Low: { userStatus: 'not-passed', userMark: '0' },
                              C1High: { userStatus: 'not-passed', userMark: '0' },
                               C2Low: { userStatus: 'not-passed', userMark: '0' },
                                C2High: { userStatus: 'not-passed', userMark: '0' }
                      },
                    },
                  };
            }

            const newUserStatus = pointPercent < passPoint ? 'failed' : 'passed';
            const newUserMark = (pointPercent.toFixed(2)).toString();

            // به‌روزرسانی داده‌های آزمون کاربر
            if (!userData.userTests[category]) {
                userData.userTests[category] = {};
            }
            userData.userTests[category][testLevel] = { userStatus: newUserStatus, userMark: newUserMark };

            localStorage.setItem('userData', JSON.stringify(userData));
        }
    }, [pointPercent, passPoint, category, testLevel]);

    const handleBack = () => {
        router.back();
    };

    return (
        <div className="d-flex flex-column align-items-center text-dark w-100 mt-3">
            <div id='TEST_REPORT' className="d-flex flex-column align-items-center text-dark w-100 mt-3">
            <h5 style={{fontSize:"24px",color:"#464749" , 
                                    fontFamily:"KalamehWeb-Bold" , }} 
                                    className='text-center mb-4'>
                                    نتیجه آزمون:
            </h5>
            <div style={{ width: "300px", backgroundColor: "#151d38", fontSize: "16px" }} className="text-center py-3 rounded">
                <p  style={{fontSize:"15px" , 
                    lineHeight:"2em" , 
                    textAlign:"justify" , 
                    fontFamily:"KalamehWeb-Medium"}}
                    className="text-light text-center mb-2"
                    >آزمون پایان یافت</p>
                    <p  style={{fontSize:"15px" , 
                    lineHeight:"2em" , 
                    textAlign:"justify" , 
                    fontFamily:"KalamehWeb-Medium"}}
                    className="text-light text-center"
                    >آزمون دهنده: {userLocalName}</p>
                <p 
                style={{fontSize:"15px" , 
                    lineHeight:"2em" , 
                    textAlign:"justify" , 
                    fontFamily:"KalamehWeb-Medium"}}
                    className="text-light text-center mt-2"
                >نمره شما {pointPercent.toFixed(2)} از 100</p>
                <p 
                style={{fontSize:"15px" , 
                    lineHeight:"2em" , 
                    textAlign:"justify" , 
                    fontFamily:"KalamehWeb-Medium"}}
                    className="text-light text-center mt-2"
                > وضعیت  : {pointPercent < passPoint ? "مردود" : "قبول"}</p>
            </div>
            <p  style={{fontSize:"15px" , 
                    lineHeight:"2em" , 
                    textAlign:"justify" , 
                    fontFamily:"KalamehWeb-Medium"}}
                    className="text-center mt-3"
                    >{userLocalName} عزیز،</p>

            {
                nextLevel ?
                pointPercent < passPoint ?
                    <p  
                    style={{fontSize:"15px" , 
                    color:"#474d52" ,lineHeight:"2em" , 
                    textAlign:"center" , 
                    fontFamily:"KalamehWeb-Medium"}} 
                    className="mb-3 mt-1">{`متاسفیم، شما نمی‌توانید به آزمون سطح بعد (${nextLevelName}) بروید`}</p> :
                    <p  
                    style={{fontSize:"15px" , 
                    color:"#474d52" ,lineHeight:"2em" , 
                    textAlign:"center" , 
                    fontFamily:"KalamehWeb-Medium"}} 
                    className="my-3">{`تبریک، شما می‌توانید در آزمون سطح بعد(${nextLevelName}) شرکت کنید`}</p> :
                pointPercent < passPoint ?
                <p 
                style={{fontSize:"15px" , 
                color:"#474d52" ,lineHeight:"2em" , 
                textAlign:"center" , 
                fontFamily:"KalamehWeb-Medium"}} 
                className="my-3">{`متاسفیم، شما در آزمون این سطح مردود شده اید`}</p> :
                <p 
                style={{fontSize:"15px" , 
                color:"#474d52" ,lineHeight:"2em" , 
                textAlign:"center" , 
                fontFamily:"KalamehWeb-Medium"}} 
                className="my-3">{`تبریک! شما تمامی سطوح ${categoryInp} را با موفقیت پشت سر گذاشتید`}</p>
            }
            <DownloadPdfButton fileName={`${userLocalName} - ${category} ${testLevel} Test Result - www.mobash.ir`} />
            <div className="text-center fs-15 w-100 d-flex  justify-content-center align-items-center flex-column">
                <p style={{ width: "250px", height: "40px", direction: "ltr", paddingTop: "13px" , fontFamily:"KalamehWeb-Medium" }} className="my-1 mx-1 mx-sm-2 px-3 rounded bg-light text-dark border"> {questions.length} : تعداد کل سوالات</p>
                <p style={{ width: "250px", height: "40px", direction: "ltr", paddingTop: "13px" , fontFamily:"KalamehWeb-Medium" }} className="my-1 mx-1 mx-sm-2 px-3 rounded bg-success text-white">{corrects.length} : تعداد پاسخ های درست</p>
                <p style={{ width: "250px", height: "40px", direction: "ltr", paddingTop: "13px" , fontFamily:"KalamehWeb-Medium" }} className="my-1 mx-1 mx-sm-2 px-3 rounded bg-danger  text-white">{incorrects.length} : تعداد پاسخ های نادرست</p>
                <p style={{ width: "250px", height: "40px", direction: "ltr", paddingTop: "13px" , fontFamily:"KalamehWeb-Medium" }} className="my-1 mx-1 mx-sm-2 px-3 rounded bg-warning text-main-1">{noAnswers.length} : تعداد سوالات بدون پاسخ</p>
            </div>
            </div>
            <Link 
            href={
            
                    nextLevel ?
                    pointPercent < passPoint ? `/tests/${category}` :
                    `/tests/${category}/${nextLevel}`:
                    pointPercent < passPoint ? `/tests/${category}` :
                    `/tests/${category}`
                }
            
            style={{fontSize:"15px" , fontFamily:'KalamehWeb-SemiBold'}} 
            className="btn-main-2 text-decoration-none text-white mt-4 px-3 rounded" 
            >
                {
                    nextLevel ?
                    pointPercent < passPoint ? `بازگشت به صفحه ${categoryInp}` :
                    `ورود به آزمون سطح بعد (${nextLevelName})`:
                    pointPercent < passPoint ? `بازگشت به صفحه ${categoryInp}` :
                    `بازگشت به صفحه ${categoryInp}`
                }
            </Link>
            <div className="w-100 text-end mt-3">
            <h5 style={{fontSize:"24px",color:"#464749" , 
                                    fontFamily:"KalamehWeb-Bold" , }} 
                                    className='text-center border-bottom py-4 mb-2 mt-3 border-top'>
                                    پاسخنامه سوالات:
            </h5>
                {questions.map(item => <ReportQuestion key={item.id} {...item} />)}
            </div>
            <Link 
            href={
            
                    nextLevel ?
                    pointPercent < passPoint ? `/tests/${category}` :
                    `/tests/${category}/${nextLevel}`:
                    pointPercent < passPoint ? `/tests/${category}` :
                    `/tests/${category}`
                }
            
            style={{fontSize:"15px" , fontFamily:'KalamehWeb-SemiBold'}} 
            className="btn-main-2 text-decoration-none text-white mt-1 mb-4 text-dark px-3 rounded" 
            >
                {
                    nextLevel ?
                    pointPercent < passPoint ? `بازگشت به صفحه ${categoryInp}` :
                    `ورود به آزمون سطح بعد (${nextLevelName})`:
                    pointPercent < passPoint ? `بازگشت به صفحه ${categoryInp}` :
                    `بازگشت به صفحه ${categoryInp}`
                }
            </Link>
        </div>
    );
};

export default Report;
