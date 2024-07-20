import React from 'react';

const Paragraph = ({children}) => {
    return (
        <p className='my-3' style={{fontFamily:"Vazirmatn" ,fontSize:"16px" , color:"#383e43" , lineHeight:"1.88" , textAlign:"justify" , direction:"rtl" }}>
            {children}
        </p>
    );
};

export default Paragraph;