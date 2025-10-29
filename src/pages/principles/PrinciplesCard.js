import React from 'react'

const PrinciplesCard = (props) => {

    const {bgImage, title, overview, colour} = props

    return (
        <div className="grid items-center justify-center">
            <figure  className ={`gc1s1 gr1s1 grid items-center justify-center
                pa0-50 br0-50 bg-${colour}`
                }
            >
                <img src={bgImage}
                    alt=""
                    className="w-100 
                        cover"
                /> 
            </figure>
            <hgroup 
                className={`gc1s1 gr1s1 tj
                mh2-00 pv2-00 pa1-00 bg-${colour} z1 br0-25`}
            >
                <h2 className="ttu f2-00">
                    {title}
                </h2>
                <p className="mb2-00 f1-25">
                    {overview}
                </p>
            </hgroup>
        </div>
    )
}

export default PrinciplesCard
