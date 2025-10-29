import React from 'react'
import { Link } from 'react-router-dom'

const PracticeCardReverse = (props) => {

    const {image, description, title, url, altColour} = props

    return (

        <article id="l__management"
            className="grid gtc12 ggap0-25 
                container white-90
                db pa1-00 bg-blue0 shadow-grey br1-00
                "
        > 
            <figure id=""
                className="gc1s12 gr1s1-m gc1s6-m grid items-center justify-center
                shadow-grey br0-50"
            >
                <img id=""
                    src={image}
                    alt=""
                    className="gc1s1 gr1s1 h-100 w-100 cover br0-50"
                />
            </figure>
            <div id="" 
                className="grid gc1s12 gr1s1-m gc8s5-m items-center justify-center
                    w-100 h-100 bg-white br0-50 shadow-grey"
            >
                <hgroup id = ""
                    className="gr1s1 gc1s1 flex flex-column items-center justify-center
                        w-100 h-100
                        ph1-00
                        blue0 f0-75 tc
                            ">
                    <h2 className= {`mv2-00 lh-copy ${altColour}`}> 
                        {typeof description === 'object' && description !== null ? (
                          <ul>
                            {Object.values(description).map((desc, i) => (
                              <li key={i}>{desc}</li>
                            ))}
                          </ul>
                        ) : description}
                    </h2>    
                    <Link  to={url}
                        className="dib
                            pa0-50 mb1-00 
                            blue0
                            ba b br0-25
                            f1-00
                            ttu"
                    >
                        {title}
                    </Link>
                </hgroup> 
            </div>
        </article>
    
    )
}

export default PracticeCardReverse