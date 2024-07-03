import React from 'react';
import { useEffect, useState } from 'react';

import PublicTestLevel from './PublicTestLevel';
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
    const  {A1Low , A1High , A2Low , A2High , B1Low , B1High , B2Low  , B2High , C1Low , C1High , C2CPE } = userData.userTests.public;
    return (
        <div>
            <PublicTestLevel
                 level={"A1Low"}
                 pastLevel={""}
                 pastLevelStatus={""}
                 name={"سطح Low - A1"}
                 userStatus={A1Low.userStatus}
                 userMark={A1Low.userMark}
                 />
                <PublicTestLevel
                 level={"A1High"}
                 pastLevel={"A1-Low"}
                 pastLevelStatus={A1Low.userStatus}
                 name={"سطح High - A1"}
                 userStatus={A1High.userStatus}
                 userMark={A1High.userMark}
                 />
                <PublicTestLevel
                 level={"A2Low"}
                 pastLevel={"A1-High"}
                 pastLevelStatus={A1High.userStatus}
                 name={"سطح Low - A2"}
                 userStatus={A2Low.userStatus}
                 userMark={A2Low.userMark}
                 />
                <PublicTestLevel
                 level={"A2High"}
                 pastLevel={"A2-Low"}
                 pastLevelStatus={A2Low.userStatus}
                 name={"سطح High - A2"}
                 userStatus={A2High.userStatus}
                 userMark={A2High.userMark}
                 />
                <PublicTestLevel
                 level={"B1Low"}
                 pastLevel={"A2-High"}
                 pastLevelStatus={A2High.userStatus}
                 name={"سطح Low - B1"}
                 userStatus={B1Low.userStatus}
                 userMark={B1Low.userMark}
                 />
                <PublicTestLevel
                 level={"B1High"}
                 pastLevel={"B1-Low"}
                 pastLevelStatus={B1Low.userStatus}
                 name={"سطح High - B1"}
                 userStatus={B1High.userStatus}
                 userMark={B1High.userMark}
                 />
                <PublicTestLevel
                 level={"B2Low"}
                 pastLevel={"B1-High"}
                 pastLevelStatus={B1High.userStatus}
                 name={"سطح Low - B2"}
                 userStatus={B2Low.userStatus}
                 userMark={B2Low.userMark}
                 />
                <PublicTestLevel
                 level={"B2High"}
                 pastLevel={"B2-Low"}
                 pastLevelStatus={B2Low.userStatus}
                 name={"سطح High - B2"}
                 userStatus={B2High.userStatus}
                 userMark={B2High.userMark}
                 />
                <PublicTestLevel
                 level={"C1Low"}
                 pastLevel={"B2-High"}
                 pastLevelStatus={B2High.userStatus}
                 name={"سطح Low - C1"}
                 userStatus={C1Low.userStatus}
                 userMark={C1Low.userMark}
                 />
                <PublicTestLevel
                 level={"C1High"}
                 pastLevel={"C1-Low"}
                 pastLevelStatus={C1Low.userStatus}
                 name={"سطح High - C1"}
                 userStatus={C1High.userStatus}
                 userMark={C1High.userMark}
                 />
                <PublicTestLevel
                 level={"C2CPE"}
                 pastLevel={"C1-High"}
                 pastLevelStatus={C1High.userStatus}
                 name={"سطح CPE - C2"}
                 userStatus={C2CPE.userStatus}
                 userMark={C2CPE.userMark}
                 />
                
        </div>
    );
};

export default GrammerTestLevels;