import menuClose from '../../../svgs/menu/close-svgrepo-com_1.svg'
import menuOpen from '../../../svgs/menu/burger-menu-svgrepo-com.svg'

const MenuToggle = (props) => {
    // Props
    const {menuClick, menuToggle} = props

    return (
        <figure id="menu__Toggle"
            className="flex items-center justify-center 
                w2-00 h2-00 pa0-25 ba b--white-90 br0-25 pointer
                "
            onClick={menuClick}
            title = "Menu Toggle"
        >
            <img src = {menuToggle ? menuClose: menuOpen}
                alt="Menu Toggle"
                className=""
            />
        </figure>
    )
}

export default MenuToggle