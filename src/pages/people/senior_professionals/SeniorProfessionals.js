import React from 'react';
import { Link } from 'react-router-dom';
import seniorProfessionals from '../../../images/practice/management/management-07.jpeg';
import AESLPeopleNav from '../../../components/organisms/navs/AESL_PeopleNav';
import AESLPageFooter from '../../../components/organisms/footers/AESLPageFooter';
import SectionFooter from '../../../components/organisms/footers/SectionFooter';
import seniorProfessionalsList from '../../../data/seniorProfessionalsList';
import StaffCard from '../consultants/StaffCard';

const SeniorProfessionals = () => {
  return (
    <div className="min-vh-100 w-100">
      {/* Page Header */}
      <header className="grid gtc12">
          <figure className="gc1s12">
            <img src={seniorProfessionals} alt="Senior Professionals" className="vh-60 cover" />
          </figure>
        <hgroup className="gc1s12 w-100 blue0">
          <h2 className="w-100 h-100 pa1-00 ph1-00 pb1-00 mb0-00 f3-00 ttu">Senior Professionals</h2>
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
                    Senior professionals bring a wealth of experience and expertise to complex projects. They lead multidisciplinary teams, ensuring that innovative design and engineering solutions are effectively implemented. With a deep understanding of industry standards and regulations, they guide projects through every phase, from initial concept to final execution. Their strong leadership and mentorship foster a culture of collaboration and continuous improvement within the organization. Committed to sustainability and client success, they consistently deliver results that exceed expectations while promoting environmentally responsible practices.
                  </div>
                </div>
              </header>
              {/* Senior Professionals Gallery */}
              <div className="gc1s12 blue0">
                {seniorProfessionalsList.length === 0 ? (
                  <div className="tc pv4-00 f2-00 fw7 red">No senior professionals available.</div>
                ) : (
                  <ul className="grid gtc1 gtc2-s gtc3-xl ggap1-00 w-100 blue0">
                    {seniorProfessionalsList.map(
                      (professional) => (
                        <li key={professional.id} className="blue0 w-100">
                          <StaffCard consultant={professional} type="senior-professional" />
                        </li>
                      )
                    )}
                  </ul>
                )}
              </div>
              <SectionFooter sectionTitle="Senior Professionals" />
            </div>
          </div>
          {/* Aside Navigation */}
          <aside className="gc4s1 blue0 relative">
            <div className="flex flex-column justify-between min-vh-100 ph2-00 pt6-00 sticky top-0">
              <ul className="mb1-00 bl bw4 b--green pl2-00 f0-75">
                <h3>Senior Professionals</h3>
                <li className="mb1-00">
                  <a href="#people_senior_professionals_description" className="blue0 i">AESL Senior Professionals</a>
                </li>
                <li className="mb1-00">
                  <a href="#people_senior_professionals_gallery" className="blue0 i">AESL Senior Professionals List</a>
                </li>
              </ul>
              <div className="mb1-00">
                <small>Previous</small> <br />
                <Link to="/people/senior-consultants" className="mb1-00 blue0 f0-75 b">Senior Consultants</Link> <br /><br />
                <small>Next</small> <br />
                <Link to="/people/professionals" className="mb1-00 blue0 f0-75 b">Professionals</Link>
              </div>
            </div>
          </aside>
        </div>
      </main>
      <AESLPageFooter pageTitle="Senior Professionals" />
    </div>
  );
};

export default SeniorProfessionals;

