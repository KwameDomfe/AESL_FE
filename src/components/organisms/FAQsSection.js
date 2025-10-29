import jpg_1 from '../../images/SC-5-GOOD-1-691x432.jpg'
import jpg_2 from '../../images/LIV-B-691x432.jpg'
import jpg_3 from '../../images/OFB-3D-720x404.jpg'
// import jpg_4 from '../../images/TEMA-CLINIC-DESIGN-3D1-720x404.jpg'
import FAQsCard from './FAQsCard'


function FAQsSection() {

    return (
        <section id="HeroSection" 
            className="grid gtc12
               mt4-00"
        >
            <div id="FAQs__Overlay" 
                className="grid gc1s12 gr1s2 
                    items-center justify-center
                    bg-blue0"
            >
            </div>

            <div id="FAQs__Content" 
                className="container container90
                gc1s12 gr1s2
                pa0-25 mv4-00
                grid gtc12 ggap1-00 
                f2-00 white-90
                ba "
            >
                <header className="gc1s12 gr1s1 flex flex-column items-center justify-start ba b--white-20 pa0-25"
                >
                    <h1 className="mv0-00 f2-25 f4-00-m ba b--white-20 ttu"
                    >
                        Frequently Asked Questions
                    </h1>
                    <p className="mv0-00 f1-00 f1-50-m ba b--white-20 "
                    >
                        Questions and Answers about GLOBABUILD.
                     </p>

                </header>

                <main className="gc1s12 gr2s6
                    grid gtc12 ggap0-25 ba b--white-60 pa0-25"
                >
                    <div className="gc1s12 gr1s1 gc1s6-m gr1s1-m gc1s4-m gr1s1-m "
                    >
                        <FAQsCard 
                            image={jpg_1}
                            question = 'Why should anyone approach GLOBABUILD?'
                            answer = {`Every design is seen and handled as a client specific, and unique project. The design is taken from the basic brief and sketches through the surreal of the client to the real actuals of its manifestation in construction.All allied technical consultants are involved from inception to completion for their engineering and technical input.`}
                            bgColour = 'red'
                        />
                    </div>
                    <div className="gc1s12 gc1s6-m gr2s1-m  "
                    >
                        <FAQsCard image={jpg_2} 
                            question = 'Do I really have a question to ask?'
                            answer = {`To make your dream a reality, we build what your mind perceived. It will never remain a dream. Size does not limit us.`}
                            bgColour = 'blue0'
                            
                        />
                    </div>
                    <div className="gc1s12 gc7s6-m gr1s1-m "
                    >
                        <FAQsCard image={jpg_3} 
                            question = 'Another Question'
                            answer = {`GLOBABUILD performs contracting FAQs (Renovation/Remodeling) – if the design is done by us, as well as for designs done by outside parties or on already existing buildings with a workable quotation from our qualified Quantity Surveyor. All relevant design and drawing solutions are provided with high expertise and responsibility. Our company is ready to carry out any construction, reconstruction, renovation, remodeling or decoration project which will satisfy your purpose and desires.`}
                            bgColour = 'black-20'
                        />
                    </div>
                    <div className="gc1s12 gr3s1-s gc7s6-m gr2s1-m "
                    >
                        <FAQsCard image={jpg_2} 
                            question = 'Yet Another Question'
                            answer = {`Each project is managed by an accomplished staff from its beginning stages to the end product. This includes project initiation, contracting, planning, executing, and closing.`}
                            bgColour = 'black-50'
                            
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

export default FAQsSection
