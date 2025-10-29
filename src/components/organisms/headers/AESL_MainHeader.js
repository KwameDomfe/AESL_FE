import React from 'react'
import { useMenu } from '../../../hooks/useContextHooks'
import Logo from '../../molecules/mainHeader/AESLLogo'
import MenuToggle from '../../molecules/mainHeader/MenuToggle'
import PrimaryNavigation from '../../molecules/mainHeader/PrimaryNavigation'
import UserAccounts from '../../molecules/mainHeader/UserAccounts'
import { Link } from 'react-router-dom'
import SearchForm from '../../molecules/mainHeader/SearchForm'
import SocialNavigation from '../../molecules/mainHeader/SocialNavigation'
import MiscNav from '../../molecules/mainHeader/MiscNav'
import PoweredBy from '../../molecules/mainHeader/PoweredBy'



const MainHeader = () => {
    
    const { menu, toggleMenu } = useMenu();

    return (
        <article id="o__TwoColumnHeader"
            className={`flex justify-between flex-column items-center
                ${menu.isOpen ? "vh-100" : "h-100"} of-hidden
                pv0-25 ph0-75 w20-00-l
                bg-blue0`}
            style={{ transition: 'height 0.3s cubic-bezier(.4,0,.2,1)' }}
        >
            <div id="m__AESLLogo"
                className="flex justify-between justify-center-l w-100"
                tabIndex="0"
                title="AESL Logo"
                aria-label="AESL Logo"
            >
                <Link to="/">
                    <Logo />
                </Link>
                <div id="m__MenuToggle"
                    className="flex items-center justify-center dn-l pointer"
                >
                    <MenuToggle menuToggle={menu.isOpen}
                        menuClick={toggleMenu}
                    />
                </div>
            </div>

            <div className={
                    `
                        ${menu.isOpen ? 
                            'flex menu-animate' : 
                            'dn'
                        } flex-l flex-column justify-between w-100-l h-100 pt4-00
                    `
                } 
                    style={{ transition: 'opacity 0.3s cubic-bezier(.4,0,.2,1)' }}
            >
                <div id="m__SearchForm" className="flex-l items-center justify-center w-100">
                    <SearchForm />
                </div>

                <nav id="m__MainNav" className="flex-l w-100">
                    <PrimaryNavigation menuClick={toggleMenu} />
                </nav>

                <nav id="m__SocialMediaNav" className="flex-l items-center justify-center w-100-l mv1-00-l" tabIndex="0">
                    <SocialNavigation menuClick={toggleMenu} />
                </nav>

                <section id="m__" className="flex-l flex-column-l">
                    <UserAccounts menuClick={toggleMenu} />
                </section>

                <footer id="m__" className="flex-l flex-column-l">
                    <MiscNav menuClick={toggleMenu} />
                    <PoweredBy menuClick={toggleMenu} />
                </footer>
            </div>
            <style>{`
                .menu-animate { opacity: 1; animation: fadeInMenu 0.3s; }
                @keyframes fadeInMenu { from { opacity: 0; transform: translateY(-10px); } to { opacity: 1; transform: none; } }
            `}</style>
        </article>
    );
};

export default MainHeader;