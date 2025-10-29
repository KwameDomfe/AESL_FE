import React from 'react'
import { Link } from 'react-router-dom'

const AESL_PageNav = (props) => {

    const {
        parent,
        parentURL,
        pageName,
        sectionOne,
        sectionOneUrl,
        sectionTwo,
        sectionTwoUrl,
        sectionThree,
        sectionThreeUrl,
        sectionFour,
        sectionFourUrl,
        sectionFive,
        sectionFiveUrl,
        previous,
        prevURL,
        next,
        nextURL

    } = props

    return (
        <div className="flex flex-column justify-between
            min-vh-100 
            ph1-00 pb1-00
            pt5-00
            sticky top-0"
        >
            <div>
                <Link to = {parentURL}
                    className="dib mb1-00 
                        f1-25 blue0 ttu fw6"
                >
                    Back to {parent}
                </Link>
                <ul className="mb1-00 pa1-00 
                    bl bw4 b--gray 
                    gray f0-75"
                >
                    <h3 >{pageName}</h3>
                    <li className="mb1-00 i"
                    >
                        <Link to={sectionOneUrl}
                            className="gray"
                        >
                            {sectionOne}
                        </Link>
                    </li>
                    <li className="mb1-00 i"
                    >
                        <Link to = {sectionTwoUrl}
                            className="gray"
                        >
                            {sectionTwo}
                        </Link>
                    </li>
                    <li className="mb1-00 i"
                    >
                        <Link to = {sectionThreeUrl}
                            className="gray"
                        >
                            {sectionThree}
                        </Link>
                    </li>
                    <li className="mb1-00 i"
                    >
                        <Link to={sectionFourUrl}
                            className="gray"
                        >
                            {sectionFour}
                        </Link>
                    </li>
                    <li className="mb1-00 i"
                    >
                        <Link to={sectionFiveUrl}
                            className="gray"
                        >
                            {sectionFive}
                        </Link>
                    </li>
                </ul>
            </div> 

            <div className="h6-00 gray">
                <small>Previous</small><br/>
                <Link to ={prevURL} 
                    className="mb1-00 f0-75 gray b"
                >
                    {previous}
                </Link> <br/><br/>
                <small>Next</small><br/>
                <Link to ={nextURL} 
                    className="mb1-00 f0-75 gray b"
                >
                    {next}
                </Link>
            </div>
        </div>
    )
}

export default AESL_PageNav
