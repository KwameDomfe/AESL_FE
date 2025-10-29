import React from 'react'
import { Link } from 'react-router-dom'

const ProjectCategoryCard = (props) => {

    const {url, image, caption} = props

    return (
        <Link to={url}
            className = ""  
        >
            <figure id=""
                className="grid w-100 h0-00 pb-100
                    shadow-5"
            >
                <img src={image}
                    alt=""
                    className="w-100 gr1s1 gc1s1
                        br0-50 cover"
                /> 
                <figcaption id =""
                    className="gr1s1 gc1s1
                        pa1-00 flex justify-end items-end
                        f0-75 tc"
                >
                    <h3 className="
                        pa0-25 mb0-00 
                        blue0 bg-white-50 
                        ba bw0 br0-25"    
                    >
                        {caption}
                    </h3>
                </figcaption>
            </figure> 
        </Link>
    )
}

export default ProjectCategoryCard