import React from 'react'
import { Link } from 'react-router-dom'

const HomePageHeaderCard = (props) => {

    const {
        bgImage, 
        heading,
        dept01,
        dept02,
        dept03,
        dept04,

    } = props
    return (
        <div className="grid gtc1">
            <figure id=""
                    className="gr1s1 gc1s1"
                >
                    <img src={bgImage}
                        alt=""
                        className="w-100
                            br0-50
                            cover"
                    />
                </figure>
                <hgroup id=""
                    className="gr1s1 gc1s1
                    grid justify-between
                    w-100 h0-00 pb-100
                    bg-black-70 white-90 br0-50
                    ttu"
                >
                    <h3 
                        className="pa1-00"
                    >
                        {heading}
                    </h3>
                    <ul className="grid ph1-00 lh-copy justify-between">
                        <li>
                            <Link className="gold" to ="/">{dept01}</Link>
                        </li>
                        <li>
                            <Link className="gold" to ="/">{dept02}</Link>
                        </li>
                        <li>
                            <Link className="gold" to ="/">{dept03}</Link>
                        </li>
                        <li>
                            <Link className="gold" to ="/">{dept04}</Link>
                        </li>
                    </ul>
                </hgroup> 
        </div>
    )
}

export default HomePageHeaderCard
