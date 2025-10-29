import React from 'react';
import { useParams } from 'react-router-dom';
import seniorProfessionalsList from '../../../data/seniorProfessionalsList';
import AESLPageFooter from '../../../components/organisms/footers/AESLPageFooter';
import SectionFooter from '../../../components/organisms/footers/SectionFooter';
import StaffImage from '../../../components/shared/StaffImage';

const SeniorProfessionalDetails = () => {
  const { slug } = useParams();
  const professional = seniorProfessionalsList.find(p => p.slug === slug);

  if (!professional) {
    return <div className="min-vh-100 w-100 pa4-00">Senior Professional not found.</div>;
  }

  return (
    <div id="" className="min-vh-100 w-100 bg-black-10">
      <header id="senior_professional_pageHeader" className="grid gtc12 bg-white">
        <figure className="gc1s12">
          <img src={professional.thumbnailImage || professional.image || '/images/placeholder.png'} 
            alt={professional.thumbnailImageAlt || professional.imageAlt || professional.name} 
            className="vh-50 contain" />
        </figure>
        <hgroup className="gc1s12 w-100 blue0">
          <h2 className="w-100 h-100 pa1-00 pb1-00 mb0-00 f3-00">
            {professional.name}
          </h2>
        </hgroup>
      </header>
      <main id="senior-professional-pagemain">
        <div className="grid gtc4 ph1-00">
          <div className="gc1s3 min-vh-100 mb1-00">
            <div className="pt2-00">
              <div className="grid gtc12 gc1s12 ggap1-00 white-90 mb2-00 tracked-tight">
                <article className="gr1s1 gc1s1 h10-00 w10-00 f1-00 bg-blue0">
                  <hgroup className="w-100 h-100 pa1-00 bg-green">
                    <h3>view CV</h3>
                  </hgroup>
                </article>
                <article className="gr1s1 gc2s11 w-100 pa0-50 bg-blue0">
                  <p className="mb1-50 f1-25">{professional.bio?.summary || 'No bio available.'}</p>
                  <p className="mb0-00">{professional.name}</p>
                </article>
              </div>
            </div>
            <div className="grid gtc12 ggap1-00 mb2-00 white-90">
              <article className="gr1s1 gc1s6 pa2-00 white-90 bg-blue1">
                <figure className="shadow-5 bg-blue2 mb0-50">
                  <StaffImage
                    src={professional.thumbnailImage || professional.image || '/images/placeholder.png'}
                    alt={professional.thumbnailImageAlt || professional.imageAlt || professional.name}
                    className="pa0-50 bg-blue0"
                  />
                </figure>
                <hgroup className="flex flex-column w-100 bg-blue0 white-90 pa0-50">
                  <h5 className="mb0-50">{professional.role}</h5>
                  <h6>{professional.department}</h6>
                </hgroup>
              </article>
              {/* Add more gallery or info as needed */}
            </div>
            <article className="gr2s1 gc1s12">
              <div className="flex ggap1-00 w-100 tj">
                <div className="w-50">
                  <p>{professional.office}</p>
                  <p>{professional.department}</p>
                </div>
                <div className="w-50">
                  <p>{professional.role}</p>
                </div>
              </div>
            </article>
            {/* Related Projects, News, etc. can be added here as needed */}
            <SectionFooter sectionTitle="Senior Professional Details" />
          </div>
          <aside className="gc4s1 blue0 relative">
            <div className="flex flex-column justify-start min-vh-100 pl1-00 sticky top-0">
              <h2 className="ttu ma0-50 pv1-00 f1-00">
                <a href="/senior-professionals">Back To Senior Professionals</a>
              </h2>
              <ul className="mb1-00 bl bw4 b--green pl1-00 f0-75">
                <h3>On this page</h3>
                <li className="mb1-00 i"><a href="#senior_professional_pageHeader" className="blue0">Professional Summary</a></li>
                <li className="mb1-00 i"><a href="#senior-professional-pagemain" className="blue0">Professional's Gallery</a></li>
                <li className="mb1-00 i"><a href="#senior-professional-pagemain" className="blue0">Professional's Description</a></li>
              </ul>
            </div>
          </aside>
        </div>
      </main>
      <AESLPageFooter pageTitle="Senior Professional Details" />
    </div>
  );
};

export default SeniorProfessionalDetails;