import React from 'react';

const SubTitle = ({children}) => {
    return (
        <h3 style={{fontFamily:"Vazirmatn" ,fontSize:"16px" , fontWeight:"800" , color:"#383e43" , lineHeight:"1.88" , textAlign:"justify" , direction:"rtl" }}>
                {children}
        </h3>
    );
};

export default SubTitle;