import ghie from '../../../images/_partials/logos/ghie.png'
import gia from '../../../images/_partials/logos/gia.png'
import ghip from '../../../images/_partials/logos/ghip.jpg'
import ghis from '../../../images/_partials/logos/ghis.jpg'
import { Link } from 'react-router-dom'

const ProfessionalInstitutions = () => {
    
    // functions
    
    return (
        <article id="m_professionalInstitutions" 
            className="grid gtc3 ggap1-00" 
            aria-hidden="False"
        >
            <figure id="GIA"
                className="gr1s2 gc1s1 
                    flex items-center 
                    br0-25 bg-white"  
                data-use-new="true"
            >
                <Link to="https://www.gia.com.gh"
                    className="w-100 h-100"
                    target="_blank"
                >
                    <img src={gia} 
                        alt=""
                        className="w-100 h-100"
                    />
                </Link>
            </figure>

            <figure id="GhIE"
                className="gr1s1 gc2s2 
                    flex items-center justify-center 
                    br0-5"
                data-use-new="true"
            >
                <Link to ="https://www.ghie.org.gh"
                    className="w-100 h-100"
                    target="_blank"
                >
                    <img src={ghie} 
                        alt="" 
                        className="br0-25"
                    />
                </Link>
            </figure>

            <figure id="Ghip"
                className="gr2s1 gc3s1 
                    flex items-center justify-center"
                data-use-new="true"
            >
                <Link to ="https://www.gip.org.gh"
                    className="w-100 h-100"
                    target="_blank"
                >
                    <img src={ghip} 
                        alt="" 
                        className="br0-25"
                    />
                </Link>
            </figure>

            <figure id="Ghis"
                className="gr2s1 gc2s1
                    flex items-center justify-center"
                data-use-new="true"
            >
                <Link to ="https://www.ghis.org.gh"
                    className="w-100 h-100"
                    target="_blank"
                >
                    <img src={ghis} 
                        alt="" 
                        className="br0-25 h-100 w-100"
                    />
                </Link>
            </figure>

        </article>
    )
}

export default ProfessionalInstitutions