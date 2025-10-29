import React from 'react'
import { Link } from 'react-router-dom'

const UserAccounts = (props) => {
    const {menuClick} = props
    return (
        <div className="
            f0-75"
        >
            <div className="ba b--none br0-25 ph0-50 pv1-00 mh0-50 ttu tc ">
                <Link to="/accounts/login"
                    className="white-90 b "
                    onClick={menuClick}
                >
                    {/* User Account */}
                </Link>
            </div> 
        </div>
    )
}

export default UserAccounts