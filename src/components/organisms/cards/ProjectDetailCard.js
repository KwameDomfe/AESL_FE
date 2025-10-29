import React, { useState } from 'react'

const ProjectDetailCard = (props) => {

    const [toggle, setToggle] = useState(false)
    
    const {image, title, location, description, onClick } = props

    return (
    <div className="grid items-end justify-center"
        
    >
    <figure className="shadow-5 gc1s1 gr1s1"
    title={onClick ? "Click to view image" : "Click on image for image info" }
    onClick={() => { if (onClick) { onClick(); } else { setToggle(!toggle); } }}
        >
            <img src={image}
                alt=""
                className="ba b--yellow bw2
                    cover" 
                
                
            /> 
        </figure>
        {!onClick && toggle ? <hgroup 
            className="gc1s1 gr1s1 pa0-50 
                w-100 bg-yellow 
                w-100"
           
        >
            <h3 className="
                    blue0 f">
                {title} - <span className="f1-00">{location}</span>
            </h3>
            <p className="blue0">
                {description}
            </p>    
        <span className="dib mv1-00 mr2-00 ba br0-25 pa0-25 b b--blue0 blue0">View Image</span>
        {/* <span className="dib mv1-00 ba br0-25 pa0-25 b--blue0 blue0">Read More</span> */}
    </hgroup> : ''}
    </div>
  )
}

export default ProjectDetailCard
