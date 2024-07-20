import React from 'react';

const MainTitle = ({children}) => {
    return (
        <h1 className='my-4' style={{fontFamily:"KalamehWeb-Bold" , fontSize:"25px" ,color:"#383E43" }}>
            {children}
        </h1>
    );
};

export default MainTitle;