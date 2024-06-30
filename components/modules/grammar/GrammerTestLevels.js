import React from 'react';
import { useEffect, useState } from 'react';

import GrammarTestLevel from './GrammarTestLevel';
const GrammerTestLevels = () => {
    const [userData, setUserData] = useState(null);
    
    useEffect(() => {
        if (typeof window !== 'undefined') {
            const storedUserData = localStorage.getItem('userData');
            if (storedUserData) {
                setUserData(JSON.parse(storedUserData));
            }
        }
        userData && console.log(userData)
    }, []);
    if (!userData) {
        return <div>Loading...</div>;
      }
    const  {A1 , A2 , B1 , B1Plus , B2  , C1 } = userData.userTests.grammar;
    return (
        <div>
            <h5 className='article-subTitle text-center text-xl-end'>سطوح آزمون تعیین سطح گرامر:</h5>
            <GrammarTestLevel
                 level={"A1"}
                 pastLevel={""}
                 pastLevelStatus={""}
                 name={"سطح ابتدایی (Elementary) - A1"}
                 userStatus={A1.userStatus}
                 userMark={A1.userMark}
                 />
                <GrammarTestLevel
                 level={"A2"}
                 pastLevel={"A1"}
                 pastLevelStatus={A1.userStatus}
                 name={"سطح ابتدایی (Elementary) - A2"}
                 userStatus={A2.userStatus}
                 userMark={A2.userMark}
                 />
                <GrammarTestLevel
                 level={"B1"}
                 pastLevel={"A2"}
                 pastLevelStatus={A2.userStatus}
                 name={"سطح متوسط (Intermediate) - B1"}
                 userStatus={B1.userStatus}
                 userMark={B1.userMark}
                 />
                <GrammarTestLevel
                 level={"B1Plus"}
                 pastLevel={"B1"}
                 pastLevelStatus={B1.userStatus}
                 name={"سطح متوسط (Intermediate) - B1 Plus"}
                 userStatus={B1Plus.userStatus}
                 userMark={B1Plus.userMark}
                 />
                <GrammarTestLevel
                 level={"B2"}
                 pastLevel={"B1 Plus"}
                 pastLevelStatus={B1Plus.userStatus}
                 name={"سطح پیشرفته (Advance) - B2"}
                 userStatus={B2.userStatus}
                 userMark={B2.userMark}
                 />
                <GrammarTestLevel
                 level={"C1"}
                 pastLevel={"B2"}
                 pastLevelStatus={B2.userStatus}
                 name={"سطح پیشرفته (Advance) - C1"}
                 userStatus={C1.userStatus}
                 userMark={C1.userMark}
                 />
                
        </div>
    );
};

export default GrammerTestLevels;