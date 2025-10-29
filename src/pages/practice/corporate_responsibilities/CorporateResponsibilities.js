import AESLPracticeNav from '../../../components/organisms/navs/AESL_PracticeNav'
import AESLPageFooter from '../../../components/organisms/footers/AESLPageFooter'
import corporateResponsibilities from '../../../images/practice/corporate_responsilities/00.png'
import SubCategoryHeaderBanner from '../../../components/molecules/banners/SubCategoryHeaderBanner'
const CorporateResponsibilities = () => {
    return (
        <div>
             {/* Page Header Start */}
            <header>
                <SubCategoryHeaderBanner
                    image = {corporateResponsibilities}
                    title = 'Corporate Responsibilities'
                />
                <AESLPracticeNav />
            </header>
            {/* Page Header End */}

            {/* Page Main Start */}
            
            {/* Page Main End */}
            
            {/* Page Footer Start */}
            <AESLPageFooter pageTitle="Corporate Responsibilities"/>
            {/* Page Footer End */}
        </div>
    )
}

export default CorporateResponsibilities