import React from 'react'
import { Link } from 'react-router-dom'

const PageNotFound = () => {
  
    return (
        <div className="vh-90 flex flex-column items-center justify-center">
            <h2>
                Welcome to AESL Website
            </h2>

            <div>
                <p className="mb2-00  ">Go to the <Link className="dib w16-00 ba ma2-00 pa1-00 tc ttu b f2-00" to = '/'>Homepage</Link></p>
                <p className="mb2-00  ">Go to the <Link className="dib w16-00 ba ma2-00 pa1-00 tc ttu b f2-00" to = '/projects'>Projects</Link></p>
                <p className="mb2-00  ">Go to the <Link className="dib w16-00 ba ma2-00 pa1-00 tc ttu b f2-00" to = '/practice'>Practice</Link></p>
                <p className="mb2-00  ">Go to the <Link className="dib w16-00 ba ma2-00 pa1-00 tc ttu b f2-00" to = '/people'>People</Link></p>
            </div>
        </div>
    )
}

export default PageNotFound
