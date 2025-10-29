import React from 'react'
import AESLPracticeNav from '../../../components/organisms/navs/AESL_PracticeNav'
import AESLPageFooter from '../../../components/organisms/footers/AESLPageFooter'
import alliances from '../../../images/practice/alliances/00.jpg'
import SubCategoryHeaderBanner from '../../../components/molecules/banners/SubCategoryHeaderBanner'
const Alliances = () => {
    
    return (
        <div>
             {/* Page Header Start */}
            <header>
                <SubCategoryHeaderBanner
                    image = {alliances}
                    title = 'Alliances'
                />
                <AESLPracticeNav />
            </header>
            {/* Page Header End */}

            {/* Page Main Start */}
            
            {/* Page Main End */}
            
            {/* Page Footer Start */}
            <AESLPageFooter pageTitle="Alliances"/>
            {/* Page Footer End */}
        </div>
    )
}

export default Alliances