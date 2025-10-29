import AESLPracticeNav from '../../../components/organisms/navs/AESL_PracticeNav'
import AESLPageFooter from '../../../components/organisms/footers/AESLPageFooter'
import clientSpeak from '../../../images/practice/client_speak/00.jpeg'
import SubCategoryHeaderBanner from '../../../components/molecules/banners/SubCategoryHeaderBanner'
const ClientSpeak = () => {
    return (
        <div>
             {/* Page Header Start */}
            <header>
                <SubCategoryHeaderBanner
                    image = {clientSpeak}
                    title = 'Client Speak'
                />
                <AESLPracticeNav />
            </header>
            {/* Page Header End */}

            {/* Page Main Start */}
            
            {/* Page Main End */}
            
            {/* Page Footer Start */}
            <AESLPageFooter pageTitle="Client Speak"/>
            {/* Page Footer End */}
        </div>
    )
}

export default ClientSpeak