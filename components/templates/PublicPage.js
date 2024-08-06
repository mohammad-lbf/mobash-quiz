import React , {useEffect} from 'react';
import PublicMainSection from '../modules/public/PublicMainSection'
import PublicAsideSection from '../modules/public/PublicAsideSection'
import { useDispatch } from 'react-redux';

const PublicPage = () => {
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
                                <PublicMainSection />
                            </div>
                            <div className='col-12 col-xl-4'>
                                <PublicAsideSection />
                            </div>
                        </div>
                </div>
            </div>
        </div>
    );
};

export default PublicPage;