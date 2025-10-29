import React from 'react'

const CategoryHeaderBanner = (props) => {

    const {image, title, icon} = props

    return (
        <section id = "princeples_pageHeader"
            className="grid gtc12
            "
        >
            <figure className="gc1s12"
            >
                <img src={image}
                    alt=""
                    className="w-100 vh-50 vh-60-l cover"
                />
            </figure>
            <hgroup className=" flex items-center w-100 blue0 ph1-00 gc1s12 f2-00 f2-50-m "
            >
                {icon}
                <h2 className="
                    ml2-00 ttu tl"
                >
                    {title}
                </h2>
            </hgroup>
        </section>
    )
}

export default CategoryHeaderBanner