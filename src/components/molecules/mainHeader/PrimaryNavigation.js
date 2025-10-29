import { NavLink } from 'react-router-dom'
// Icons
import { GrProjects } from "react-icons/gr";
import { BsPeople } from "react-icons/bs";
import { PiBuildingOfficeBold } from "react-icons/pi";
import { LuFootprints } from "react-icons/lu";
import { IoNewspaperOutline } from "react-icons/io5";
import { PiBookBold } from "react-icons/pi";



const  PrimaryNavigation = (props) => {
    
    const mainNav= [
        {
            id : 1,
            name :'projects',
            Icon : GrProjects,
            url : '/projects/'
        },
        {
            id : 3,
            name :'practice',
            Icon : PiBuildingOfficeBold,
            url : '/practice/'
        },
        {
            id : 4,
            name :'principles',
            Icon : LuFootprints,
            url : '/principles/'
        },
        {
            id : 2,
            name :'people',
            Icon : BsPeople,
            url : '/people'
        },
        {
            id : 5,
            name :'news',
            Icon : IoNewspaperOutline,
            url : '/news/'
        },
        {
            id : 6,
            name :'publications',
            Icon : PiBookBold,
            url : '/publications'
        },
    ]

    const {menuClick} = props;
    
    return (
        <ul className="flex flex-column ggap0-25 justify-start 
            pv1-00 bt bb b--white-90 w-100
            "
        >
            {mainNav.map
                (
                    (a) => { 
                    const {id, url, name, Icon} = a
                    return (
                        <li key = {id} 
                            className="flex bg-white-10 b--white-10
                                br0-25 shadow-5 w-100"
                            onClick = {menuClick}
                        >
                            <NavLink to = {url}
                                className="w-100 f1-00 flex items-center white-90 pa0-25"
                            >
                                
                                <Icon />
                                <div className="ml0-50"
                                >
                                    <span className="white-90 b--white-90 w-100 ttu"
                                    >
                                        { name }
                                    </span>
                                </div>
                            </NavLink>
                        </li>
                        )
                    }
                )
            }
        </ul>
    )
}

export default PrimaryNavigation