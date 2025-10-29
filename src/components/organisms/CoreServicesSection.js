import jpg_1 from '../../images/SC-5-GOOD-1-691x432.jpg'
import jpg_2 from '../../images/LIV-B-691x432.jpg'
import jpg_3 from '../../images/OFB-3D-720x404.jpg'
import jpg_4 from '../../images/TEMA-CLINIC-DESIGN-3D1-720x404.jpg'
import ServicesCard from './CoreServicesCard'


function ServicesSection() {

    return (
        <section id="HeroSection" 
            className="grid gtc12
               mt4-00 min-vh-100"
        >   
            {/* <img id="HeroSection__Banner" 
                src={jpg_2}
                alt="" 
                className="gc1s12 gr1s2 w-100 h-100 cover bg-gray" 
            /> */}

            <div id="Services__Overlay" 
                className="grid gc1s12 gr1s2 
                    items-center justify-center
                    bg-blue0 h-100"
            >
            </div>

            <div id="Service__Content" 
                className="container container90
                gc1s12 gr1s2
                pa0-25 h-100
                grid gtc12 ggap1-00 
                f2-00 white-90
                ba "
            >
                <header className="gc1s12 gr1s1 flex flex-column items-center justify-cente ba b--white-20 pa0-25"
                >
                    <h1 className="mv0-00 f2-25 f4-00-m ba b--white-20 ttu"
                    >
                        Core Services
                    </h1>
                    <p className="mv0-00 f1-00 f1-50-m ba b--white-20 "
                    >
                        GLOBABUILD is a one-stop design and build firm that focuses on you the client and involves you from conception through design to execution to satisfy your dream and desire through innovation and cost effective design and construction solutions. Our scope of work includes:
                    </p>

                </header>

                <main className="gc1s12 gr2s6
                    grid gtc12 ggap0-25 ba b--white-60 pa0-25"
                >
                    <div className="gc1s6 gr1s1 gc1s4-m gc3s4-l gr1s1-l"
                    >
                        <ServicesCard 
                            image={jpg_1}
                            title = 'Design'
                            description = {`Every design is seen and handled as a client specific, and unique project. The design is taken from the basic brief and sketches through the surreal of the client to the real actuals of its manifestation in construction.All allied technical consultants are involved from inception to completion for their engineering and technical input.`}
                            bgColour = "blue3"
                        />
                    </div>
                    <div className="gc1s6 gr2s1 gc1s4-m gc3s4-l gr3s1-l"
                    >
                        <ServicesCard image={jpg_2} 
                            title = 'Construction'
                            description = {`To make your dream a reality, we build what your mind perceived. It will never remain a dream. Size does not limit us.`}
                            bgColour = 'blue0'
                            
                        />
                    </div>
                    <div className="gc7s6 gr1s1 gc5s4-m gc7s4-l gr3s1-l"
                    >
                        <ServicesCard image={jpg_3} 
                            title = 'Contracting'
                            description = {`GLOBABUILD performs contracting services (Renovation/Remodeling) – if the design is done by us, as well as for designs done by outside parties or on already existing buildings with a workable quotation from our qualified Quantity Surveyor. All relevant design and drawing solutions are provided with high expertise and responsibility. Our company is ready to carry out any construction, reconstruction, renovation, remodeling or decoration project which will satisfy your purpose and desires.`}
                            bgColour = 'black-20'
                        />
                    </div>
                    <div className="gc1s6 gr3s1 gc5s4-m gr2s1-m gc1s4-l gr2s1-l"
                    >
                        <ServicesCard image={jpg_2} 
                            title = 'Project Management'
                            description = {`Each project is managed by an accomplished staff from its beginning stages to the end product. This includes project initiation, contracting, planning, executing, and closing.`}
                            bgColour = 'black-50'
                            
                        />
                    </div>
                    <div className="gc7s6 gc9s4-l gc9s4-m gr2s1-l"
                    >
                        <ServicesCard image={jpg_3} 
                            title = 'Supervision'
                            description = {`The importance of supervision cannot be overemphasized for a design to be successfully built. We at GLOBABUILD are dedicated and passionate about supervision from first strike of the grounds to the last fix on your building. This ensures the adherence to design, statutory and regulatory standards and client’s cherished brief.`}
                            bgColour = 'red'
                        />
                    </div>
                    <div className="gc7s6 gc9s4-m gc7s4-l gr1s1-l "
                    >
                        <ServicesCard image={jpg_4} 
                            title = 'Training'
                            description = {`We train in basic knowledge and skills needed and related to the built environment and real estate industry.`}
                            bgColour = 'gold'
                        />
                    </div>
                    <div className="dn db-l gc5s4-l gr2s1-l "
                    >
                        <div className="h-100 ba">
                            <code>
                                " Some 
                                Blockquote "
                            </code>
                        </div>
                    </div>
                   
                </main>

                <footer className="gc1s12 gr8s1 
                    flex flex-column items-center justify-cente ba b--white-20 pa0-25"
                >
                    <p className="mv0-00 f1-00 f1-50-m ba b--white-20 "
                    >
                       Section Footer
                    </p>
                </footer>
            </div>
        </section>
    )
}

export default ServicesSection
