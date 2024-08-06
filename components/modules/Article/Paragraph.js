import React from 'react';

const Paragraph = ({children}) => {
    return (
        <p className='w-100 my-2' style={{fontFamily:"Vazirmatn" ,fontSize:"16px" , lineHeight:"1.88" , textAlign:"justify" , direction:"rtl" }}>
            {children}
        </p>
    );
};

export default Paragraph;