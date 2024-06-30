import React , {useState , useEffect} from 'react';
import { useSelector , useDispatch } from 'react-redux';

const Question = (props) => {
    const dispatch = useDispatch();
    const [answer , setAnswer] = useState(0);
    
    useEffect(()=>{
        if(answer > 0){
            if(answer == props.correctanswer){
                dispatch({
                    type:"TRUE_ANSWER",
                    payload:{
                        ...props,
                        clientAnswer:answer
                    }
                })
            }
            else{
                dispatch({
                    type:"FALSE_ANSWER",
                    payload:{
                        ...props,
                        clientAnswer:answer
                    }
                })
            }
        }
    } , [answer])

    const changeHandler = (e)=>{
        setAnswer(e.target.value);

    }
    return (
        <div style={{fontSize:"17px"}} className="text-black fw-bold d-flex flex-column align-items-end w-100 border-bottom border-primary pb-3 mb-2">
            <div className="d-flex flex-column align-items-end mb-3">
                <div className="d-flex align-items-start mt-2">
                <p style={{direction:"ltr" , lineHeight:"25px"}} className="me-1 mb-0 mt-1">{props.question}</p>
                <p className="text-end me-1 bg-primary text-white p-2 pb-1 rounded lh-0">{props.number}</p>
                </div>
            </div>
            <div className='w-100'>
                <label htmlFor={`option1${props.number}`} style={{border:`2px solid ${answer=="1" ? "#007bff" : "#728188"}`}} className={` d-flex align-items-center w-100 py-3 ps-2 rounded mb-2 flex-row-reverse`}>
                    <input className="cur-poin me-2" onChange={changeHandler} type="radio" id={`option1${props.number}`} value={1}  name={`option${props.number}`}/>
                    <label style={{direction:"ltr"}} className="fw-200 me-1 cur-poin fs-13 fs-sm-15" htmlFor={`option1${props.number}`}>{props.option1}</label>
                </label>
                <label htmlFor={`option2${props.number}`} style={{border:`2px solid ${answer=="2" ? "#007bff" : "#728188"}`}} className={` d-flex align-items-center w-100 py-3 ps-2 rounded mb-2 flex-row-reverse`}>
                    <input className="cur-poin me-2" onChange={changeHandler} type="radio" value={2} id={`option2${props.number}`}  name={`option${props.number}`}/>
                    <label style={{direction:"ltr"}} className="fw-200 me-1 cur-poin fs-13 fs-sm-15" htmlFor={`option2${props.number}`}>{props.option2}</label>
                </label>
                <label htmlFor={`option3${props.number}`} style={{border:`2px solid ${answer=="3" ? "#007bff" : "#728188"}`}} className={` d-flex align-items-center w-100 py-3 ps-2 rounded mb-2 flex-row-reverse`} >
                    <input className="cur-poin me-2" onChange={changeHandler} type="radio" id={`option3${props.number}`} value={3} name={`option${props.number}`} />
                    <label style={{direction:"ltr"}} className="fw-200 me-1 cur-poin fs-13 fs-sm-15" htmlFor={`option3${props.number}`}>{props.option3}</label>
                </label>
                <label htmlFor={`option4${props.number}`} style={{border:`2px solid ${answer=="4" ? "#007bff" : "#728188"}`}} className={` d-flex align-items-center w-100 py-3 ps-2 rounded mb-2 flex-row-reverse`} >
                    <input className="cur-poin me-2" onChange={changeHandler} type="radio" id={`option4${props.number}`} value={4} name={`option${props.number}`} />
                    <label style={{direction:"ltr"}} className="fw-200 me-1 cur-poin fs-13 fs-sm-15" htmlFor={`option4${props.number}`}>{props.option4}</label>
                </label>
            </div>
        </div>
    );
};

export default Question;