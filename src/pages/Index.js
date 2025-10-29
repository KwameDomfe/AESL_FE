import HomePageHeader from './homepage/HomePageHeader'
import ProjectCategories from './homepage/ProjectCategories'
import Offices from './homepage/Offices'
import AESLPageFooter from '../components/organisms/footers/AESLPageFooter'
import { useEffect } from 'react'

const Index = () => {

    // UseEffect
    
    useEffect(() => {
            window.scroll(0,0)
        
        }, []
    )

    return (
        <div id="HomePage"
            className=""
        >
            {/* Page Header Start */}
            <HomePageHeader />
            {/* Page Header End */}

            {/* Page Main Start */}
            <main className="HomePageMain"
            >
                {/* Project Categories Start */}
                <ProjectCategories />
                {/* Project Categories End */}

                {/* Regional Offices Start */}
                <Offices />
                {/* Regional Offices End */}

                {/* Interactive Office Locations Map & List Start */}
                
                {/* Interactive Office Locations Map & List End */}
            </main>
            {/* Page Main End */}

            {/* Page Footer Start */}
            <footer id = "HomePageFooter"
                className="w-100 mv1-00"
            >
                <AESLPageFooter 
                    pageTitle = "Homepage"
                />
            </footer>
            {/* Page Footer End */}
        </div>
    )
}

export default Index