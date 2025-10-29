import React from 'react'

const AddressCard = (props) => {
    
    const {image, alt, bgColour, title, description} = props
    
    return (
        <figure className="grid gtc2 
            ba br0-25 b--white-20 h-100
            of-hidden"
        >
            <figcaption className="gc1s2 gr1s1
                f1-00 flex flex-column justify-between
                bg-black-40
                "
            >
                <div className="pa0-50"
                >
                                        <h2 className="ttu f1-00 ba pa0-25 b--white-20">{title}</h2>
                                        {typeof description === 'object' && description !== null ? (
                                            <ul>
                                                {Object.values(description).map((desc, i) => (
                                                    <li key={i}>{desc}</li>
                                                ))}
                                            </ul>
                                        ) : <p className='dn'>{description}</p>}
                </div>
               
            </figcaption>
        </figure>
    )
}

export default AddressCard
