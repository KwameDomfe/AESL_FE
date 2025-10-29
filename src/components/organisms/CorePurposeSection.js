import React from 'react'
import jpg_1 from '../../images/SC-5-GOOD-1-691x432.jpg'
import jpg_2 from '../../images/LIV-B-691x432.jpg'
import jpg_3 from '../../images/OFB-3D-720x404.jpg'
import jpg_4 from '../../images/TEMA-CLINIC-DESIGN-3D1-720x404.jpg'

import CorePurposeCard from './CorePurposeCard'
function CorePurposeSection() {

    return (
        <section id="HeroSection" 
            className="grid gtc12
               mt4-00 min-vh-90"
        >   
            {/* <img id="HeroSection__Banner" 
                src={jpg_2}
                alt="" 
                className="gc1s12 gr1s2 w-100 h-100 cover bg-gray" 
            /> */}

            {/* <div id="HeroSection__Overlay" 
                className="grid gc1s12 gr1s2 
                    items-center justify-center
                    h-100 bg-black-10"
            >
            </div> */}

            <div id="HeroSection__Content" 
                className="container container90
                gc1s12 gr1s2
                pa0-25 h-100
                grid gtc12 ggap1-00 
                f2-00 blue0
                ba b--white-40"
            >
                <div className="gc1s12 gr1s1 flex flex-column items-center justify-cente ba b--white-20 pa0-25"
                >
                    <h1 className="mv0-00 f2-25 f4-00-m ba b--white-20 ttu"
                    >
                        our core purpose...
                    </h1>
                    <p className="mv0-00 f1-00 f1-50-m ba b--white-20 "
                    >
                        GLOBABUILD's purpose and philosophy...
                    </p>
                </div>
                <div className="gc1s12 gr2s6
                    grid gtc12 ggap0-25 ba b--white-60 pa0-25"
                >
                    <div className="gc1s9 gc1s6-m gr1s1 gc2s5-l gr1s1-l "
                    >
                        <CorePurposeCard image={jpg_1} 
                            alt = 'Buildings'
                            title = 'Buildings'
                            description ='We enjoy designing everything from the simplest smallest units to the complicated multi-structures, by “entering” your mind’s eye to dream and visualize with you, and bring it to life.'
                        />
                    </div>

                    <div className="gc10s3 gc7s6-m gr1s1 gc1s3-l gr2s1-l"
                    >
                        <div className='ba b--white-20 h-100 br0-25'></div>
                    </div>

                    <div className="gc1s3 gr2s1 gc4s3-l gr1s1-l"
                    >
                        <div className='h-100 br0-25'></div>
                    </div>

                    <div className="gc10s3 gc7s6-m gr3s1 gc10s3-l gr1s1-l"
                    >
                        <div className='h-100 br0-25'></div>
                    </div>

                    <div className="gc1s3 gr4s1 gc7s3-l gr2s1-l"
                    >
                        <div className='h-100 br0-25'></div>
                    </div>

                    <div className="gc4s9 gc2s5-l gr2s1-l"
                    >
                        <CorePurposeCard image={jpg_2} 
                            alt = 'Greenway'
                            title = 'Greenway'
                            description ='Going Green is the right way. We design and build to satisfy the “Green Codes”. We do it with Mother Earth.'
                        />
                    </div>

                    <div className="gc1s9 gc1s6-m gc7s5-l gr1s1-l"
                    >
                        <CorePurposeCard image={jpg_3} 
                            alt = 'Interior Design'
                            title = 'Interior Design'
                            description ='We capture your emotions and desires and interpret them with spaces, shapes, colours and textures to create your special haven.'
                        />
                    </div>

                    <div className="gc4s9 gc7s5-l gr2s1-l "
                    >
                        <CorePurposeCard image={jpg_4}
                            alt = 'Construction'
                            title = 'Costruction'
                            description ='To make your dream a reality, we build what your mind perceived. It will never remain a dream. Size does not limit us.'
                        />
                    </div>
                   
                </div>
            </div>

           
        </section>
    )
}

export default CorePurposeSection
