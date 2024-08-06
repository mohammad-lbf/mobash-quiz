import React from 'react';

const MainTitle = ({children}) => {
    return (
        <h1 className='mb-3 mt-3 pt-3 text-center text-center w-100 border-top' style={{fontFamily:"KalamehWeb-Bold" , fontSize:"25px" ,color:"#383E43" }}>
            {children}
        </h1>
    );
};

export default MainTitle;