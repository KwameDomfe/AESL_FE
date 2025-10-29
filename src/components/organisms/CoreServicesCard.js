import React from 'react'

const CoreServicesCard = (props) => {
    
    const {image, alt, bgColour, title, description} = props
    
    return (
        <figure className="grid gtc2 
            ba br0-25 b--white-20 h12-00 h-100-m
            of-hidden"
        >
            <img src={image}
                alt = {alt}
                className="gc1s2 gr1s1
                    h-100
                    cover
                "
            />
            <figcaption className="gc1s2 gr1s1
                f1-00 flex flex-column justify-between
                bg-black-40 pa0-25 ba b--white-60
                "
            >
                <div className="pa0-25 ba b--white-40"
                >
                    <h2 className="ttu f1-00 ba b--white-40 pa0-25 mb0-00">{title}</h2>
                    <p className='dn ba b--white-40'>{description}</p>
                </div>
                <div className={`flex justify-between 
                    pa0-25 b
                    bg-${bgColour} ba b--white-40`}
                >
                    <div className="pa0-25 ba b--white-40">
                        LINK(s)
                    </div>
                    <div className="pa0-25 ba b--white-40">
                        CTA(s)
                    </div>
                </div>
            </figcaption>
        </figure>
    )
}

export default CoreServicesCard
