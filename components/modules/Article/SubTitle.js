import React from 'react';

const SubTitle = ({children}) => {
    return (
        <h3 className='text-end  w-100' style={{fontFamily:"KalamehWeb-Bold" ,fontSize:"25px" , fontWeight:"800" , color:"#383e43" , lineHeight:"1.88"  , direction:"rtl" }}>
                {children}
        </h3>
    );
};

export default SubTitle;