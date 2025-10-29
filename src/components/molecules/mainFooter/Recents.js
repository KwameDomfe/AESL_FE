import React from 'react'
import aesl_logo from '../../../images/_partials/logos/aesl_logo.png'
const Recents = () => {
    return (
        <div id="m_otherLinks" 
            className="grid gtc2 ggap1-00 mt1-00 fw5" 
            aria-hidden="False"
        >
            <div id="m_otherLinks--1"
                className="br1-00 gr1s1 gc1s1"  
                data-use-new="true"
            >
                <figure id="recentProjects"
                    className="grid items-end justify-center"
                >
                    <img src={aesl_logo} 
                        alt=""
                        className="w-100 br0-50 gc1s1 gr1s1"
                    />
                    <figcaption className="gc1s1 gr1s1 
                        h-100 
                        tc bg-gradient1TB gold"
                    >
                        Recent Projects
                    </figcaption>
                </figure> 
            </div>
            <div id="m_otherLinks--2"
                className=" br1-00 gr1s1 gc2s1"  
                data-use-new="true"
            >
                <figure id="recentNews"
                    className="grid items-end justify-center"
                >
                    <img src={aesl_logo}
                        alt=""
                        className="w-100 br0-50 gc1s1 gr1s1"
                    />
                    <figcaption className="gc1s1 gr1s1 
                        h-100 
                        tc bg-gradient1TB gold"
                    >
                        Recent News
                    </figcaption>
                </figure> 
            </div>
        </div>

    )
}

export default Recents