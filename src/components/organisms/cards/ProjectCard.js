import React from 'react'
import { Link } from 'react-router-dom'
const ProjectCard = (
        {
            name, 
            client,
            location, 
            thumbnail,
            description,
            url,
            category,
        }
    ) => {
    
    return (
        <article id="" 
            className="flex flex-column justify-start items-start
                bg-blue0 pa0-50 shadow-yellow
                br0-50 white-90"
        >
            <header 
                className="w-100"
            >
                <div className="flex flex-column
                    yellow"
                >
                    <div className="h4-50 
                        bg-white-10 
                        b br0-25 
                        f1-25"
                    >
                        {name}
                    </div>
                    <div className="mb0-25 h3-00 tt"
                    >
                        <span className="bb b b--yellow white-90">Client: </span>
                        <span className="ttc ">{client}</span> 
                    </div> 
                    <div className="h2-50">
                        <span className="bb b b--yellow white-90">
                            Location: 
                        </span>
                        <span> {location}</span>
                    </div>
                </div>
            </header>

            <main className="flex flex-column justify-between
                    mb2-00 w-100"
            >
                <figure className="w-100"
                >
                    <img src={thumbnail}
                        alt="something is not right" 
                        className="cover z5 w-100 h12-00"
                    />
                    <figcaption id=""
                        className="flex flex-column justify-between 
                            h12-00 w-100
                            mt1-00 
                            f1-00 lh-copy tj"
                    >
                        <p className="h10-00 i"
                        >
                            {description.substring(0,200) + ' ...' }
                        </p>
                        <div>
                            <Link to={url}
                                className="dib b ttu pv0-25 ph0-50 br0-25 bg-yellow"
                            >
                                read more...
                            </Link>
                        </div>
                    </figcaption>
                </figure>

            </main>

            <footer 
                className="w-100 f0-75"
            > 
                <div className="flex justify-between">
                    <h5 className="pa0-50 bg-white b blue0 br0-25"
                    >
                        {category.name}
                    </h5>
                    <small className="pa0-50 b ba b--yellow br0-25 yellow"
                    >
                        {category.subCategory}
                    </small>
                </div>
            </footer>
        </article>
    )
}

export default ProjectCard