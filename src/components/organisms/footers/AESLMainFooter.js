import React from 'react'
import AESLAddress from '../../molecules/mainFooter/AESL_Address'
import MOWHAddress from '../../molecules/mainFooter/MOWH_Address'
import AESLSubscription from '../../molecules/mainFooter/AESL_Subscription'
import MainFooterNav from '../../molecules/mainFooter/MainFooterNav'
import ProfessionalInstitutions from '../../molecules/mainFooter/ProfessionalInstitutions'
// import Recents from '../../molecules/mainFooter/Recents' // Unused import

const MainFooter = () => {

    // const currentYear = new Date().getFullYear()

    return (
        <div id="page-footer" 
            className="flex
            w-100 min-vh-100
            pa1-00
            bg-blue0
            white-90"
        >
            <div id="container" 
                className=" grid gtc12 ggap1-00
                    w-100"      
                tabIndex="0" 
                title="" 
                aria-label=""
            >
                <section id="description_and_address"
                    className="gr2s1 gc1s12 ggap1-00
                        flex flex-column flex-row-s flex-start ggap2-00 
                        w-100
                        f1-00 tj"
                >
                    <AESLAddress />
                    <MOWHAddress />
                </section>

                <section id="o_subscription"
                    className="gr3s1 gc1s12 gc1s6-m
                        w-100 h-100"
                >
                    <AESLSubscription />
                </section> 
                
                <section id="o_navigation"
                    className="gr1s1 gc1s12"
                    sections=""
                >
                    <MainFooterNav />
                </section> 

                <section id="o_links" 
                    className="gr5s1 gc1s12 gc7s6-m gr3s1-m
                        flex flex-column 
                        w-100" 
                    
                    data-use-new="true" 
                    role="tabpanel" 
                    aria-label="people" 
                    section-index=""
                >
                    <ProfessionalInstitutions />
                    {/* <Recents /> */}
                </section>
            </div> 
        </div>
    )
}

export default MainFooter
