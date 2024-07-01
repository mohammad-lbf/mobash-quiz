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
                top:400,
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
                    <div className="col-12 col-lg-8">
                        {!testStarted && <div>
                            <p 
                                style={{fontSize:"15px" , 
                                color:"#474d52" ,lineHeight:"2em" , 
                                textAlign:"justify" , 
                                fontFamily:"KalamehWeb-Medium"}} 
                                className='border-bottom pb-2 mb-2'>بعد از آزمون، حتما پاسخ های خود را تحلیل کرده و اشتباهات خود را بررسی کنید</p>
                        <p 
                                style={{fontSize:"15px" , 
                                color:"#474d52" ,lineHeight:"2em" , 
                                textAlign:"justify" , 
                                fontFamily:"KalamehWeb-Medium"}} 
                                className='border-bottom pb-2 mb-2 text-center'>زمان دریافت کارنامه: بلافاصله پس از آزمون</p>
                        <p 
                                style={{fontSize:"15px" , 
                                color:"#474d52" ,lineHeight:"2em" , 
                                textAlign:"justify" , 
                                fontFamily:"KalamehWeb-Medium"}} 
                                className='border-bottom pb-2 mb-2 text-center text-success'>موفق باشید</p>
                            <div className='text-center'>
                            <button
                            style={{fontSize:"15px" , fontFamily:'KalamehWeb-SemiBold'}} 
                            onClick={()=>setTestStarted(true)} 
                            className="btn-main-2 w-50 text-center rounded mb-4 border-0 fs-15 mt-3">
                                شروع آزمون
                            </button>
                            </div>
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
                                <button
                                style={{fontSize:"15px" , fontFamily:'KalamehWeb-SemiBold'}} 
                                className="btn-main-2 w-50 text-center rounded mb-2 border-0 fs-15 mt-1"       
                                onClick={()=>setTestFinished(true)} >
                                    پایان آزمون
                                </button>
                            </div>
                        }
                        
                        {data && testStarted && !testFinished &&
                        <Questions data={data} />
                        }
                        {
                            data && testStarted && !testFinished &&
                            <div className="text-black w-100 d-flex flex-column align-items-center">
                                <button
                                    style={{fontSize:"15px" , fontFamily:'KalamehWeb-SemiBold'}} 
                                    className="btn-main-2 w-50 text-center rounded mb-2 border-0 fs-15 mt-1"       
                                    onClick={()=>setTestFinished(true)} >
                                        پایان آزمون
                                </button>

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