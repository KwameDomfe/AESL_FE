import jpg_1 from '../../images/SC-5-GOOD-1-691x432.jpg'
import jpg_2 from '../../images/LIV-B-691x432.jpg'
import jpg_3 from '../../images/OFB-3D-720x404.jpg'
import jpg_4 from '../../images/TEMA-CLINIC-DESIGN-3D1-720x404.jpg'
import AddressCard from './AddressCard'


function AddressSection() {

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

            <div id="Address__Overlay" 
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
                        You can easily reach us
                    </h1>
                    <p className="mv0-00 f1-00 f1-50-m ba b--white-20 "
                    >
                        GLOBABUILD is easy to reach
                    </p>

                </header>

                <main className="gc1s12 gr2s6
                    grid gtc12 ggap0-25 ba b--white-60 pa0-25"
                >
                    <div className="gc1s12 gr1s1 gc1s6-l gr1s6-l vh-50 h-100-l"
                    >
                        <AddressCard 
                            image={jpg_1}
                            title = 'Location Map'
                            description = {`Every design is seen and handled as a client specific, and unique project. The design is taken from the basic brief and sketches through the surreal of the client to the real actuals of its manifestation in construction.All allied technical consultants are involved from inception to completion for their engineering and technical input.`}
                        />
                    </div>
                    <div className="gc1s6 gr2s1 gc1s4-m gc10s3-l gr1s2-l vh-30 h-100-l"
                    >
                        <AddressCard image={jpg_2} 
                            title = 'Email'
                            description = {`To make your dream a reality, we build what your mind perceived. It will never remain a dream. Size does not limit us.`}
                            bgColour = 'blue0'
                            
                        />
                    </div>
                    <div className="gc7s6 gr2s1 gc5s4-m gr2s1-m gc7s3-l gr1s2-l"
                    >
                        <AddressCard image={jpg_3} 
                            title = 'Telephone'
                            description = {`GLOBABUILD performs contracting Address (Renovation/Remodeling) – if the design is done by us, as well as for designs done by outside parties or on already existing buildings with a workable quotation from our qualified Quantity Surveyor. All relevant design and drawing solutions are provided with high expertise and responsibility. Our company is ready to carry out any construction, reconstruction, renovation, remodeling or decoration project which will satisfy your purpose and desires.`}
                            bgColour = 'black-20'
                        />
                    </div>
                    <div className="gc7s6 gr3s1 gc9s4-m gr2s1-m gc7s3-l gr5s2-l"
                    >
                        <AddressCard image={jpg_3} 
                            title = 'WhatsApp'
                            description = {`GLOBABUILD performs contracting Address (Renovation/Remodeling) – if the design is done by us, as well as for designs done by outside parties or on already existing buildings with a workable quotation from our qualified Quantity Surveyor. All relevant design and drawing solutions are provided with high expertise and responsibility. Our company is ready to carry out any construction, reconstruction, renovation, remodeling or decoration project which will satisfy your purpose and desires.`}
                            bgColour = 'black-20'
                        />
                    </div>
                   
                    <div className="gc1s6 gr3s1 gc1s12-m gr3s1-m gc7s3-l gr3s2-l"
                    >
                        <AddressCard image={jpg_4} 
                            title = 'Social Media'
                            description = {`GLOBABUILD performs contracting Address (Renovation/Remodeling) – if the design is done by us, as well as for designs done by outside parties or on already existing buildings with a workable quotation from our qualified Quantity Surveyor. All relevant design and drawing solutions are provided with high expertise and responsibility. Our company is ready to carry out any construction, reconstruction, renovation, remodeling or decoration project which will satisfy your purpose and desires.`}
                            bgColour = 'black-20'
                        />
                    </div>
                   
                    <div className="gc1s6 gr4s1 gc1s6-m gr4s1-m gc10s3-l gr5s2-l"
                    >
                        <AddressCard image={jpg_4} 
                            title = 'Postal'
                            description = {`GLOBABUILD performs contracting Address (Renovation/Remodeling) – if the design is done by us, as well as for designs done by outside parties or on already existing buildings with a workable quotation from our qualified Quantity Surveyor. All relevant design and drawing solutions are provided with high expertise and responsibility. Our company is ready to carry out any construction, reconstruction, renovation, remodeling or decoration project which will satisfy your purpose and desires.`}
                            bgColour = 'black-20'
                        />
                    </div>

                    <div className="gc7s6 gr4s1 gc7s6-m gr4s1-m gc10s3-l gr3s2-l"
                    >
                        <AddressCard image={jpg_4} 
                            title = 'Inquiries'
                            description = {`GLOBABUILD performs contracting Address (Renovation/Remodeling) – if the design is done by us, as well as for designs done by outside parties or on already existing buildings with a workable quotation from our qualified Quantity Surveyor. All relevant design and drawing solutions are provided with high expertise and responsibility. Our company is ready to carry out any construction, reconstruction, renovation, remodeling or decoration project which will satisfy your purpose and desires.`}
                            bgColour = 'black-20'
                        />
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

export default AddressSection
