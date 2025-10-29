import React from 'react'
import { Link } from 'react-router-dom'

const BoardMemberCard = (props) => {

    const {
        name,
        overview,
        liknedInURL,
        twitterURL,
        url,
        image
    } = props

    return (
        <div className="grid gtc12 
            h-100
            white-90
            ba bw2 b--blue0"
        >
            <article id="tr" 
                className="gr2s1 gc1s12
                    flex flex-column justify-between
                    relative 
                    w-100 h-100
                    pa1-00 
                    bg-blue0"
            >
                <div>
                    <h3 className="mb1-00">{name}</h3>
                    <h4 className="mb1-00">Board Member</h4>
                    <p className="red">{overview}</p>
                </div>
                
                <div className="flex f0-75">
                    <a className="ma0-50 ba br0-50 pa0-50 white-90" href={liknedInURL}>LinkedIn</a>
                    <a className="ma0-50 ba br0-50 pa0-50 white-90" href={twitterURL}>Twitter</a>
                    <Link className="ma0-50 ba br0-50 pa0-50 white-90" 
                        to={url}
                    >
                            Read More
                    </Link>
                </div>
            </article>
           
            <figure className="gr1s1 gc1s12  
                flex items-center justify-center
                relative shadow-5">
                <img src={image}
                alt="" className="pa0-50"
                /> 
            </figure>
        </div>
    )
}

export default BoardMemberCard
