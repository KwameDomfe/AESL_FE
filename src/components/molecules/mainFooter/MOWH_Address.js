import React from 'react'
import { TbWorldWww } from "react-icons/tb";
import mowh from '../../../images/_partials/logos/mwh.jpg'

const MOWH_Address = () => {
    return (
        <div id="mwh_address"
            className="flex flex-column justify-start items-center 
                w-100
                f1-00 tc" 
            itemType=""
        >
            <figure className="flex flex-column justify-center items-center 
                w-100 mb1-00"
            >
                <img src={mowh} 
                    alt=""
                    className="br4-00 w3-00 mb1-00"
                />
                <figcaption itemProp="name" className="tc f1-00 ttu b">
                    Ministry of <br /> Works and Housing
                </figcaption>

            </figure> 

            <address id="Locational_address"
                className="tc f0-75 w-100"
            >
                <div className="" 
                >
                    <div className="mb0-25">
                        ---
                    </div> 
                    <div className="mb0-25">
                        Starlet 91 Road,
                    </div> 
                    <div className="mb0-25">
                        Ministries, Accra.
                    </div> 
                    <div className="mb0-25">
                        Ghana
                    </div> 
                </div>
            </address>
            <div className="flex flex-column justify-center 
                w-80 items-center
                
                f0-75"
            >
                <a  href="https://www.mwh.gov.gh" 
                    title="visit Ministry of Works and Housing Website" 
                    target="_blank" 
                    className="tc f0-75 "
                    rel="noopener noreferrer"
                >
                        <p className="flex items-center justify-center ba br5-00 pv0-25 ph1-00
                        white-90
                        b b--white-90">
                        <TbWorldWww className='f1-00 gc2s1 mr0-50' />
                        www.mwh.gov.gh
                        </p>
                </a>
            </div>
            <p className="lh-copy w-100 tj i">
                The Ministry of Works and Housing (MWH) is a key government agency responsible for the planning, development, and management of infrastructure and housing within the country..
            </p>
        </div>
    )
}

export default MOWH_Address