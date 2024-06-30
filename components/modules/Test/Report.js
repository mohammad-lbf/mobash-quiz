import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import Link from 'next/link';
import ReportQuestion from './ReportQuestion';
import { useRouter } from 'next/router';

const Report = (props) => {
    const { questions, noAnswers, corrects, incorrects } = useSelector(state => state);
    const { testLevel, passPoint, categoryInp, category , nextLevel , nextLevelName } = props.testData;
    const pointPercent = (corrects.length / questions.length) * 100;
    const router = useRouter()
    useEffect(() => {
        if (typeof window !== 'undefined') {
            const storedUserData = localStorage.getItem('userData');
            let userData = {};

            if (storedUserData) {
                userData = JSON.parse(storedUserData);
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
            <div style={{ width: "300px", backgroundColor: "#151d38", fontSize: "16px" }} className="text-dark text-center py-3 text-white rounded">
                <p>آزمون پایان یافت</p>
                <p className="mt-3">نمره شما {pointPercent.toFixed(2)} از 100</p>
                <p className="mt-3"> وضعیت  : {pointPercent < passPoint ? "مردود" : "قبول"}</p>
            </div>
            {
                nextLevel ?
                pointPercent < passPoint ?
                    <p style={{ fontSize: "15px" }} className="fw-bold my-3">{`متاسفیم، شما نمی‌توانید به آزمون سطح بعد (${nextLevelName}) بروید`}</p> :
                <p style={{ fontSize: "15px" }} className="fw-bold my-3">{`تبریک، شما می‌توانید در آزمون سطح بعد(${nextLevelName}) شرکت کنید`}</p> :
                pointPercent < passPoint ?
                <p style={{ fontSize: "15px" }} className="fw-bold my-3">{`متاسفیم، شما در آزمون این سطح مردود شده اید`}</p> :
                <p style={{ fontSize: "15px" }} className="fw-bold my-3">{`تبریک! شما تمامی سطوح ${categoryInp} را با موفقیت پشت سر گذاشتید`}</p>
            }
            <div className="text-center fs-15 w-100 d-flex  justify-content-center align-items-center flex-column">
                <p style={{ width: "250px", height: "40px", direction: "ltr", paddingTop: "13px" }} className="my-1 mx-1 mx-sm-2 px-3 rounded bg-light text-dark border"> {questions.length} : تعداد کل سوالات</p>
                <p style={{ width: "250px", height: "40px", direction: "ltr", paddingTop: "13px" }} className="my-1 mx-1 mx-sm-2 px-3 rounded bg-success text-white">{corrects.length} : تعداد پاسخ های درست</p>
                <p style={{ width: "250px", height: "40px", direction: "ltr", paddingTop: "13px" }} className="my-1 mx-1 mx-sm-2 px-3 rounded bg-danger  text-white">{incorrects.length} : تعداد پاسخ های نادرست</p>
                <p style={{ width: "250px", height: "40px", direction: "ltr", paddingTop: "13px" }} className="my-1 mx-1 mx-sm-2 px-3 rounded bg-warning text-main-1">{noAnswers.length} : تعداد سوالات بدون پاسخ</p>
            </div>
            <button style={{ backgroundColor: "#151d38" }} className="text-decoration-none text-white mt-4 text-dark py-2 px-3 rounded" onClick={handleBack}>
                {`بازگشت به ${categoryInp}`}
            </button>
            <div className="w-100 text-end mt-3">
                <p className="fw-200 text-center w-100 fs-4 py-3 border-bottom border-top ">پاسخنامه سوالات:</p>
                {questions.map(item => <ReportQuestion key={item.id} {...item} />)}
            </div>
            <button style={{ backgroundColor: "#151d38" }} className="text-decoration-none text-white mt-2 text-dark py-2 px-3 rounded" onClick={handleBack}>
                {`بازگشت به ${categoryInp}`}
            </button>
        </div>
    );
};

export default Report;
