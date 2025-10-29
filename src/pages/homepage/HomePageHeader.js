// Images
import bannerImage from '../../images/index/banner_images/index-01.jpg'
import engineering from '../../images/index/eng.jpg'
import architectureAndPlanning from '../../images/index/a_and_p.jpeg'

// Components
import HomePageHeaderCard from '../../components/organisms/cards/HomePageHeaderCard'
import SelectedClients from '../../components/organisms/cards/SelectedClients'
import AESLOverview from '../../components/AESLOverview'
const HomePageHeader = () => {
  return (
    <header id ="HomePageHeader"
        className="" 
    >   
        <figure id="HomePageHeader--mainBanner"
            className="ma0-00"
        >
            <img src= {bannerImage}
                alt=""
                className="w-100 vh-60 vh-50-s vh-60-m
                    cover"
            />
            <figcaption className = "ttu blue0"
            >
                <h1 className = "ph1-00 ph4-00-m pv2-00 pv4-00-s ma0-00 f2-25 f2-75-s f3-50-m f4-00-l"
            >
                    Architectural And Engineering Services Limited 
                </h1> 
            </figcaption>
        </figure>
        
        <div id="HomepageHeader--details"
            className="grid gtc12 ggap1-00 
                ph1-00 ph4-00-m"
        >
            {/* AESL Brief Start */}
            <article id="aesl-brief" 
                className="gc1s12 gr1s1 
                    gr1s3-m gc1s11-m
                    grid justify-between
                    w-100
                    mb4-00 mb0-00-m
                    blue0 f1-25 tj"     
            >
                <AESLOverview />
            </article>
            {/* AESL Brief End */}

            {/* AESL Architecture and Planning Start */}
            <article id="architecture-and-planning" 
                className="gc1s12 gr2s1 
                    gr1s1-m gc1s6-s gc12s1-m
                    w-100 w16-00-m
                    f1-25"
            >
                <HomePageHeaderCard
                    bgImage = {architectureAndPlanning}
                    heading = "Architecture & Planning"
                    dept01= "Architecture"
                    dept02= "Land Surveying"
                    dept03= "Quantity Surveying"
                    dept04= "Valuation"
                />
            </article>
            {/* AESL Architecture and Planning End */}

            {/* AESL Engineering Start */}
            <article id="engineering" 
                className="gc1s12 gr3s1 gr2s1-s gc7s6-s gr2s1-m gc12s1-m
                    w-100 w16-00-m
                    f1-25
                    grid gtc1"
            >
                <HomePageHeaderCard
                    bgImage = {engineering}
                    heading = "Engineering"
                    dept01= "Civil/Structural"
                    dept02= "Geotech"
                    dept03= "Installations"
                    dept04= "Water"
                />
            </article>
            {/* AESL Engineering End */}

            {/* Selected Clients Start */}
            <section id="HomePageMain--SelectedClients" 
                className="gc1s12 gr4s1"
            >
                <SelectedClients />
            </section>
            {/* Selected Clients End */}
        </div>
    </header>
  )
}

export default HomePageHeader