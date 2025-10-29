import facebook from '../../../svgs/socialMedia/facebook.svg'
import twitter from '../../../svgs/socialMedia/twitter.svg'
import linkedin from '../../../svgs/socialMedia/linkedin.svg'
import youtube from '../../../svgs/socialMedia/youtube.svg'
// import { useState } from 'react'
const SocialNavigation = (props) => {

    const socialNav= [
        {
            id : 1,
            icon : facebook,
            url : 'https://web.facebook.com/'
        },
        {
            id : 2,
            icon : twitter,
            url : 'https://www.twitter.com/'
        },
        {
            id : 3,
            icon : linkedin,
            url : 'https://www.linkedin.com/'
        },
        {
            id : 4,
            icon : youtube,
            url : 'https://www.youtube.com/'
        },
    ]
    const {menuClick} = props
    return (
        <ul id=""
            className="flex justify-around items-center w-100
                mb0-00-m pa0-5"
        >
            {socialNav.map((a)=>{
                        return (
                            <li key={a.id} 
                                className="mb0-00"
                                onClick={menuClick}
                            >
                                <a href = {a.url}
                                    className="flex justify-center items-center
                                        white-90"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <figure className="ba br-100"
                                    >
                                        <img src={a.icon}
                                            className="w1-25 h1-25 pa0-25"
                                            alt={a.url}
                                        />
                                    </figure>
                                </a>
                            </li>
                        )
                    }
                )
            }
        </ul>
    )
}

export default SocialNavigation