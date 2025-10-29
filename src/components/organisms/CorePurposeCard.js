import React, { useState } from 'react'

const CorePurposeCard = (props) => {
    
    const [showText, setShowText ] = useState(1);

    const {image, alt, title, description} = props;
    
    return (
        <div className="grid gtc2 
            ba br0-25 b--white-20 h20-00
            of-hidden"
            onMouseEnter={() => setShowText(!showText)}
            onMouseLeave={() => setShowText(!showText)}
        >
            <img src={image}
                className="gc1s2 gr1s1
                    h-100
                    cover
                "
                alt = {alt}
            />
            <div className="gc1s2 gr1s1
                f1-00 flex flex-column justify-end
                bg-black-40 white-90 pa0-25 b--white-60
                "
            >
                <div className={`pa0-25 ba b--white-40 mb0-25 ${showText ? '' : 'h-100' }`}
                >
                    <h2 className="ttu f1-00 b--white-20 ba pa0-25 mb0-50">{title}</h2>
                                        {showText ? '' : (
                                            typeof description === 'object' && description !== null ? (
                                                <ul>
                                                    {Object.values(description).map((desc, i) => (
                                                        <li key={i}>{desc}</li>
                                                    ))}
                                                </ul>
                                            ) : <p className="f1-25  ba b--white-20">{description}</p>
                                        )}
                </div>
                <div className="flex justify-between 
                    pv1-00 ph0-25
                    bg-black-60 ttu ba b--white-40"
                >
                    <div className=" ba b--white-20 pa0-25">
                        LINK(s)
                    </div>
                    <div className="ba b--white-20 pa0-25">
                        CTA(s)
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CorePurposeCard
