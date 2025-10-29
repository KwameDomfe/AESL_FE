import React from 'react'
import { Link } from 'react-router-dom'

const MiscNav = (props) => {
    const miscNav= [
        {
            id : 1,
            name : 'Legal',
            url : '/'
        },
        {
            id : 2,
            name : 'Policies',
            url : '/'
        },
        {
            id : 3,
            name : 'Privacy',
            url : '/'
        },
        {
            id : 4,
            name : 'Guidelines',
            url : '/'
        },
    ]

        const {menuClick} = props
        return (
        <ul id="m__horizontal-list"
            className="flex items-center justify-center 
                pv0-50 mb1-50
                bb
                f0-75 white-90"
        >
            { miscNav.map((x) => {
                    return (
                        <li key={x.id}
                            className="ml0-50"
                            onClick={menuClick}
                        >
                            <Link to="/"
                                className="white-90"
                            >
                                {x.name}
                            </Link>
                        </li>)
                    }
                )
            }
        </ul> 
    )
}

export default MiscNav