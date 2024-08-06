import React , {useEffect} from 'react';
import GrammarMainSection from '../modules/grammar/GrammarMainSection'
import GrammarAsideSection from '../modules/grammar/GrammarAsideSection'
import { useDispatch } from 'react-redux';

const GrammarPage = () => {
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch({type:"RESET"})
    } , [])
    return (
        <div className='page-padding-tops'>
            <div className='pt-4'>
                <div className='container'>
                        <div className='row justify-content-between'>
                            <div className='col-12 col-xl-8'>
                                <GrammarMainSection />
                            </div>
                            <div className='col-12 col-xl-4'>
                                <GrammarAsideSection />
                            </div>
                        </div>
                </div>
            </div>
        </div>
    );
};

export default GrammarPage;