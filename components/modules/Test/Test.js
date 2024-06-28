import React , {useState , useEffect} from 'react';
import { useSelector , useDispatch } from 'react-redux'
import Report from './Report';
import AnimatedProgress from './AnimatedProgress';
import Questions from './Questions';
import Timer from './Timer';
import PreventRefresh from '../PreventRefresh';


const Test = (props) => {
    
    const [testStarted , setTestStarted] = useState(false);
    const [testFinished , setTestFinished] = useState(false);
    const testState = useSelector(state => state);
    const dispatch = useDispatch();
    const{testName , testLevel , userStatus , passPoint , testTime , questions , categoryInp} = props.testData
    const data = questions;

    useEffect(()=>{
        data &&
        dispatch(
            {type:"ADD_QUESTIONS" , 
            payload:[...data]
        })
    } , [data]);
    useEffect(()=>{
        const scrollCenter = ()=>{
            window.scrollTo({
                top:300,
                left:0,
                behavior:'smooth'
            })
        }
        scrollCenter();
    } , [testFinished])
    useEffect(()=>{
        scrollTop()
    } , [])
        const scrollTop = ()=>{
            window.scrollTo({
                top:0,
                left:0,
                behavior:'smooth'
            })
        }
    return (
        <div style={{paddingBottom:"0.65rem"}}>

                <div className="row justify-content-center gy-2 gy-xl-0">
                    <div className="col-12 col-lg-8" style={{minHeight:"40vh"}}>
                        {!testStarted && <div>
                            <p className="text-end text-black fs-13 fw-200 lh-lg" >بعد از آزمون، حتما پاسخ های خود را تحلیل کرده و اشتباهات خود را بررسی کنید</p>
                        <p className="text-end text-black fs-13 my-2 fw-200">زمان دریافت کارنامه: بلافاصله پس از آزمون</p>
                        <p className="text-end text-black fs-13 fw-200 text-success fw-bold">موفق باشید</p>
                            <button style={{backgroundColor:"#151D3B"}} onClick={()=>setTestStarted(true)} className="text-light w-100 rounded border-0 p-3 fs-15 mt-3">شروع آزمون</button>
                            </div>}
                        {
                            data && testStarted && !testFinished &&
                            <div className="text-black mt-3 w-100 d-flex flex-column align-items-center pb-2 mb-1">
                                <PreventRefresh />
                                <p className="w-100 d-flex align-items-center fw-200 fs-15 justify-content-center fw-bold"><i className="pt-1 ms-1 bi bi-alarm"></i> زمان باقیمانده:</p>
                                {<Timer setTestFinished={setTestFinished} testTime={testTime} />}
                                <AnimatedProgress testTime={testTime} />
                                <p className="text-black mb-2 border-top pt-1 mt-4 w-100 text-center">پاسخنامه</p>
                                <div className="d-flex flex-row-reverse border-bottom pb-1 w-100 justify-content-center" style={{flexWrap:"wrap"}}>
                                    {testState.questions.map(item => <div key={item.id} className="m-1 bg-light text-center rounded border" style={{width:"30px" , height:"50px" , overflow:"hidden"}}>
                                        <p className="text-secondary border-bottom" style={{fontSize:"15px" , paddingTop:"2px"}}>{item.number}</p>
                                        {item.status != "no-answer" && <div className="bg-secondary" style={{height:"30px" , width:"30px"}}></div>} 
                                    </div>)}
                                </div>
                                {/* <button onClick={()=>setTestFinished(true)} className="mt-2 btn-main-1 border-0 py-2 px-3 rounded text-black">پایان آزمون</button> */}

                            </div>
                        }
                        {
                            data && testStarted && !testFinished &&
                            <div className="justify-content-center d-flex border-bottom pb-2 pt-0 mb-2">
                                <button style={{backgroundColor:"#151D3B"}} onClick={()=>setTestFinished(true)} className="mt-0 btn-main-1 border-0 py-2 px-3 rounded text-light w-50">پایان آزمون</button>
                            </div>
                        }
                        
                        {data && testStarted && !testFinished &&
                        <Questions data={data} />
                        }
                        {
                            data && testStarted && !testFinished &&
                            <div className="text-black w-100 d-flex flex-column align-items-center">
                                <button style={{backgroundColor:"#151D3B"}} onClick={()=>setTestFinished(true)} className="btn-main-1 border-0 py-2 px-3 my-2 rounded text-white w-50">پایان آزمون</button>

                            </div>
                        }
                        {
                            testFinished &&
                            <Report testData={props.testData} />
                        }
                    </div>
                </div>

            </div>
    );
};

export default Test;