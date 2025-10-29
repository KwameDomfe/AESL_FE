import SectionHeader from '../../components/organisms/headers/SectionHeader'
import SectionFooter from '../../components/organisms/footers/SectionFooter'
import officesbgImage from '../../images/_partials/backgrounds/4-2.jpg'
import OfficeLocations from './OfficeLocations'

const Offices = () => {

   
    return (
        <section id="RegionalOffices"
            className=""
        >
            <SectionHeader 
                bgImage= {officesbgImage}
                title = 'Offices' 
                overview = 'Our offices are strategically located in primes, with our head Office in the Accra central and other offices in the 16 regions of Ghana. They reflect our commitment to creating functional and aesthetically pleasing environment for clients and employees.'
            />
            <OfficeLocations />
            <SectionFooter 
                sectionTitle = 'offices'
            />
        </section>
    )
}

export default Offices