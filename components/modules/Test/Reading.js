import React from 'react';

const Reading = ({reading}) => {
    return (
        <div style={{direction:"ltr"}}>
        {reading.map((item, index) => {
            switch (item.type) {
                case "mainTitle":
                    return <h1 style={{fontSize:"30px"}} className="mt-2" key={index}>{item.content}</h1>;
                case "subTitle":
                    return <h2 style={{fontSize:"20px"}} className="mb-3 mt-4" key={index}>{item.content}</h2>;
                case "uList":
                    return (
                        <ul key={index}>
                            {item.content.map((li, idx) => (
                                <li style={{fontSize:"15px" , lineHeight:"22px" , textAlign:"justify"}} className="fw-bold mb-2" key={idx}>{li}</li>
                            ))}
                        </ul>
                    );
                case "oList":
                    return (
                        <ol key={index}>
                            {item.content.map((li, idx) => (
                                <li style={{fontSize:"15px" , lineHeight:"22px" , textAlign:"justify"}} className="fw-bold mb-2" key={idx}>{li}</li>
                            ))}
                        </ol>
                    );
                case "paragraph":
                    return <p style={{fontSize:"15px" , lineHeight:"22px" , textAlign:"justify"}} className="fw-bold mb-2" key={index}>{item.content}</p>;
                default:
                    return null;
            }
        })}
    </div>)
            };

export default Reading;