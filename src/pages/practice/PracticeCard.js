import React from 'react'
import { Link } from 'react-router-dom'

const PracticeCard = (props) => {

    const {image, 
        description, 
        title, 
        url
    } = props

    return (
        <article id="l__sector_ministry"
            className="grid gtc12 ggap0-25
                container h-100
                pa1-00 bg-white shadow-grey br1-00 ba b--blue0"
        >
            <div id="" 
                className="grid gr2s1 gc1s12 gr1s1-m gc1s5-m items-center justify-center
                    w-100 h-100 bg-blue0 shadow-grey br0-50"
            >
                <hgroup id = ""
                    className="gr1s1 gc1s1 flex flex-column items-center justify-center
                        w-100 h-100
                        ph1-00
                        white-90 f0-75 tc
                            ">
                        <h2 className= " mv2-00 lh-copy">
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
                            white-90
                            ba b br0-25
                            f1-00
                            ttu"
                    >
                        {title}
                    </Link>
                </hgroup> 
            </div>
            <figure id=""
                className="gc1s12 gr1s1 gr1s1-m gc7s6-m grid items-center justify-center
                w-100 h-100 shadow-grey br0-50"
            >
                <img id=""
                    src={image}
                    alt=""
                    className="gc1s1 gr1s1 h-100 w-100 cover br0-50"
                />
            </figure>
        </article>
    )
}

export default PracticeCard