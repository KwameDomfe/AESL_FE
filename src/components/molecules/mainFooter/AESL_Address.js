import React from 'react'
import aesl_logo from '../../../images/_partials/logos/aesl_logo.png'
import { Link } from 'react-router-dom'
import { TfiEmail } from "react-icons/tfi";

<TfiEmail />
const AESL_Address = () => {
  return (
    <div id="aesl_address"
    className=" w-100 
        flex flex-column justify-start items-center
        f1-00 tl" 
    itemType=""
>
    <figure id="aesl_address--LogoAndName" 
        className="flex flex-column justify-center items-center
            w-100 mb1-00"
    >
        <img src={aesl_logo} 
                alt=""
                className="br4-00 w3-00 mb1-00 "
        />
        <div itemProp="name" className="tc ttu b">
            AESL <br /> Head Office

        </div>
    </figure>

    <address id="aesl_address--Locational_address"
        className="f0-75 w-100 tc"
        itemProp="address" 
        itemScope="" 
        itemType="http://schema.org/PostalAddress"
    >
        <span className="dib" 
            itemProp="streetAddress"
        >
            <div className="mb0-25">
                The Hall of Technology
            </div> 
            <div className="mb0-25">
                Opposite The Ministry of Roads and Highways
            </div> 
            <div className="mb0-25">
                Ministries, Accra.
            </div> 
            <div className="mb0-25">
                Ghana
            </div> 
        </span>
    </address>
    <div id="aesl_address--email"
        className="flex flex-column justify-center 
            w-80 items-center
            f0-75"
    >
        <Link  to="/" 
            title="Get In Touch on WhatsApp" 
            target="_blank" 
            className="tc"
            rel="noopener noreferrer"
        >
            <p className="flex items-center justify-between 
                w-100
                pv0-25 ph1-00
                ba br5-00 white-90 
                b b--white-90"
            > 
                <TfiEmail className='f1-00 gc2s1 mr0-50' />
                info@aesl.com 
            </p>
        </Link>
    </div>
    <p className="lh-copy tj i">
        The Architectural & Engineering Services Limited (AES Ltd) initially came to be known as AESC when consultancy services were separated from the Public Works Department (PWD) under NRCD 193, 1973. 
    </p>
</div>
  )
}

export default AESL_Address