import React from 'react'
import { Link } from 'react-router-dom'
import servicePersonnel from '../../images/practice/management/management-07.jpeg'
import samplePortrait from '../../images/practice/management/director-of-finance/dof-03.jpeg'
import AESLPeopleNav from '../../components/organisms/navs/AESL_PeopleNav'
import AESLPageFooter from '../../components/organisms/footers/AESLPageFooter'
import SectionFooter from '../../components/organisms/footers/SectionFooter'
import servicePersonnelList from '../../data/servicePersonnelList'
import StaffImage from '../../components/shared/StaffImage'

const ServicePersonnel = () => {

        return (
            <div className="min-vh-100 w-100">
                {/* Page Header */}
                <header className="grid gtc12">
                    <figure className="gc1s12">
                        <img src={servicePersonnel} alt="Service Personnel" className="vh-60 cover" />
                    </figure>
                    <hgroup className="gc1s12 w-100 blue0">
                        <h2 className="w-100 h-100 pa1-00 ph1-00 pb1-00 mb0-00 f3-00 ttu">Service Personnel</h2>
                    </hgroup>
                    <AESLPeopleNav />
                </header>
                {/* Page Main */}
                <main className="bg-white">
                    <div className="grid gtc4 w-100">
                        <div className="gc1s4 gc1s3-l min-vh-100 ph1-00 mb1-00">
                            <div className="grid gtc12 ggap1-00 mb1-00">
                                <header className="gr1s1 gc2s10">
                                    <div className="flex ggap1-00 w-100 blue0 mt6-00 mb4-00 lh-copy f1-25 tj">
                                        <div>
                                            Service Personnel Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta nulla asperiores pariatur, fugit autem sed eos blanditiis sint quia possimus ex voluptatem qui incidunt adipisci sit in optio, saepe, sequi debitis cumque at ad quas iure! Saepe quam corrupti magni doloremque numquam minima harum blanditiis sed amet? Porro, temporibus nobis.
                                        </div>
                                    </div>
                                </header>
                                {/* Service Personnel Gallery */}
                                <div className="gc1s12 blue0">
                                    {servicePersonnelList.length === 0 ? (
                                        <div className="tc pv4-00 f2-00 fw7 red">No service personnel available.</div>
                                    ) : (
                                        <ul className="grid gtc1 gtc2-s gtc4-m ggap1-00 w-100 blue0">
                                            {servicePersonnelList.map((person) => (
                                                <li key={person.id} className="blue0 w-100">
                                                    <article className="flex flex-column items-center justify-center">
                                                        <figure className="shadow-5 mb0-50">
                                                            <StaffImage
                                                                src={person.thumbnailImage || samplePortrait}
                                                                alt={person.thumbnailImageAlt || person.name}
                                                                className="pa0-50"
                                                            />
                                                        </figure>
                                                        <hgroup className="flex flex-column items-center justify-start pa0-25 blue0">
                                                            <h5 className="mb0-50">{person.name}</h5>
                                                            <h6>{person.role}</h6>
                                                            <h6>{person.office}</h6>
                                                            <h6>{person.department}</h6>
                                                        </hgroup>
                                                    </article>
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </div>
                                <SectionFooter sectionTitle="Service Personnel" />
                            </div>
                        </div>
                        {/* Aside Navigation */}
                        <aside className="gc4s1 blue0 relative">
                            <div className="flex flex-column justify-between min-vh-100 ph2-00 pt6-00 sticky top-0">
                                <ul className="mb1-00 bl bw4 b--green pl2-00 f0-75">
                                    <h3>Service Personnel</h3>
                                    <li className="mb1-00">
                                        <a href="#people_service_personnel_description" className="blue0 i">AESL Service Personnel</a>
                                    </li>
                                    <li className="mb1-00">
                                        <a href="#people_service_personnel_gallery" className="blue0 i">AESL Service Personnel List</a>
                                    </li>
                                </ul>
                                <div className="mb1-00" >
                                    <small>Previous</small> <br/>
                                    <Link to ="/people/probationers" className="mb1-00 blue0 f0-75 b">Probationers</Link><br/><br/>
                                    <small>Next</small> <br/>
                                    <Link to ="/people/support-team" className="mb1-00 blue0 f0-75 b">Support Team</Link> 
                                </div>
                            </div>
                        </aside>
                    </div>
                </main>
                <AESLPageFooter pageTitle="Service Personnel" />
            </div>
        );
}

export default ServicePersonnel
