import React from 'react';
import GrammarMainSection from '../modules/grammar/GrammarMainSection'
import GrammarAsideSection from '../modules/grammar/GrammarAsideSection'

const GrammarPage = () => {
    
    return (
        <div className='page-padding-tops'>
            <div className='pt-4'>
                <div className='container'>
                        <div className='row justify-content-between'>
                            <div className='col-12 col-xl-7'>
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