import React from 'react'
import { Link } from 'react-router-dom'
import consultants from '../../../images/practice/management/management-07.jpeg'
import AESLPeopleNav from '../../../components/organisms/navs/AESL_PeopleNav'
import AESLPageFooter from '../../../components/organisms/footers/AESLPageFooter'
import SectionFooter from '../../../components/organisms/footers/SectionFooter'
import consultantList from '../../../data/consultantList'
import StaffCard from './StaffCard'

const Consultants = () => {


    return (
      <div className="min-vh-100 w-100">
        {/* Page Header */}
        <header className="grid gtc12">
          <figure className="gc1s12">
            <img src={consultants} alt="Consultants" className="vh-60 cover" />
          </figure>
          <hgroup className="gc1s12 w-100 blue0">
            <h2 className="w-100 h-100 pa1-00 ph1-00 pb1-00 mb0-00 f3-00 ttu">Consultants</h2>
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
                      Consultants play a vital role in delivering tailored design and engineering solutions. They collaborate closely with clients to understand their needs and develop innovative strategies that address unique challenges. Consultants bring specialized knowledge in areas such as structural, mechanical, or electrical engineering, enhancing project quality. Through effective communication and teamwork, they ensure projects progress smoothly from inception to completion. Their commitment to sustainability and best practices helps create spaces that are both functional and environmentally friendly.
                    </div>
                  </div>
                </header>
                {/* Consultants Gallery */}
                <div className="gc1s12 blue0">
                  {consultantList.length === 0 ? (
                    <div className="tc pv4-00 f2-00 fw7 red">No consultants available.</div>
                  ) : (
                    <ul className="grid gtc1 gtc2-s gtc3-xl ggap1-00 w-100 blue0">
                      {consultantList.map((consultant) => (
                        <li key={consultant.id} className="blue0 w-100">
                          <StaffCard consultant={consultant} />
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
                <SectionFooter sectionTitle="Consultants" />
              </div>
            </div>
            {/* Aside Navigation */}
            <aside className="gc4s1 blue0 relative">
              <div className="flex flex-column justify-between min-vh-100 ph2-00 pt6-00 sticky top-0">
                <ul className="mb1-00 bl bw4 b--green pl2-00 f0-75">
                  <h3>Consultants</h3>
                  <li className="mb1-00">
                    <a href="#people_consultants_description" className="blue0 i">AESL Consultants</a>
                  </li>
                  <li className="mb1-00">
                    <a href="#people_consultants_gallery" className="blue0 i">AESL Consultants List</a>
                  </li>
                </ul>
                <div className="mb1-00">
                  <small>Previous</small> <br />
                  <Link to="/people/senior-consultants" className="mb1-00 blue0 f0-75 b">Senior Consultants</Link> <br /><br />
                  <small>Next</small> <br />
                  <Link to="/people/senior-professionals" className="mb1-00 blue0 f0-75 b">Senior Professionals</Link>
                </div>
              </div>
            </aside>
          </div>
        </main>
        <AESLPageFooter pageTitle="Consultants" />
      </div>
    );
}

export default Consultants