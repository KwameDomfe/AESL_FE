import React from 'react'
import { Outlet } from 'react-router-dom'
import CategoryHeaderBanner from '../components/molecules/banners/CategoryHeaderBanner'
import AESLPageFooter from '../components/organisms/footers/AESLPageFooter'

const CategoryPageLayout = (props) => {
    const {bannerImage, title} = props
    return (
        <div id={`${title} Page`}
            className=""
        >
            {/* Page Header Start */}
            <header id = {`${title}PageHeader`}
                className="bg-white"
            >
                <CategoryHeaderBanner 
                    image = {bannerImage}
                    title = {title}
                />
            </header>
            {/* Page Header End */}

            {/* Page Main Start */}
            <main id={`${title}PageMain`}
            >
                <Outlet />
            </main>
            {/* Page Main End */}

            {/* Page Footer Start */}
            <footer id = {`${title}PageFooter`}
                className="w-100 mb1-00"
            >
                <AESLPageFooter />
            </footer>
            {/* Page Footer End */}
        </div>
    )
}

export default CategoryPageLayout