import React from 'react'

const SectionHeader = (props) => {
    const {bgImage, title, overview} = props
    return (
        <header id="ProjectCategories__header"
            className="grid"
        >
            <img src={bgImage}
                alt=""
                className="gc1s1 gr1s1 
                    h6-00 h12-00-m cover"
            /> 
            <hgroup className="gc1s1 gr1s1
                flex 
                ph1-00 ph4-00-s 
                bg-gradientLR"
            >
                <h3 className="pt0-50 mb0-00
                    white-90 f3-00 ttu"
                >
                    {title}
                </h3>
                <h4 className="dn dib-m 
                    w-75-m 
                    pa1-00 mb0-00 
                    gold f1-50 tj tracked-tight lh-title"
                >
                    {overview}
                </h4>
            </hgroup>
        </header>
    )
}

export default SectionHeader