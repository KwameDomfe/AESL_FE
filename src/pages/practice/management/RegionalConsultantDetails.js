import React, { useEffect, useMemo } from 'react';
import { Link, useParams } from 'react-router-dom';
import SubCategoryHeaderBanner from '../../../components/molecules/banners/SubCategoryHeaderBanner';
import managementHeader from '../../../images/practice/management/00.jpeg';
import { regionalConsultants } from '../../../data/managementInfo';

const byIdMap = () => {
  const map = new Map();
  (regionalConsultants || []).forEach((rc) => {
    if (rc.id) {
      map.set(rc.id, rc);
    }
  });
  return map;
};

const RegionalConsultantDetails = () => {
  const { id } = useParams();
  const byId = useMemo(() => byIdMap(), []);
  const rc = byId.get(id);

  useEffect(() => {
    if (rc?.name && rc?.region) {
      document.title = `Regional Consultant — ${rc.region} — ${rc.name} | AESL`;
    } else {
      document.title = 'Regional Consultant | AESL';
    }
  }, [rc?.name, rc?.region]);

  if (!rc) {
    return (
      <div className="min-vh-100">
        <header>
          <SubCategoryHeaderBanner image={managementHeader} title="Regional Consultant" />
        </header>
        <main className="pa2-00">
          <h2 className="red">Regional Consultant not found</h2>
          <p className="mb1-00">No entry found for id: {id}</p>
          <Link className="blue0" to="/practice/management">Back to Management</Link>
        </main>
      </div>
    );
  }

  return (
    <div className="min-vh-100 w-100">
      <header>
        <SubCategoryHeaderBanner image={managementHeader} title={`Regional Consultant — ${rc.region}`} />
      </header>
      <main className="ph1-00">
        <div className="grid gtc12 ggap1-00 white-90">
          <article className="gr1s1 gc1s6 pa2-00 bg-blue1">
            <figure className="shadow-5 bg-blue2 mb0-50">
              <img loading="lazy" decoding="async" src={rc.image} alt={`${rc.name} — Regional Consultant, ${rc.region}`} className="pa0-50 bg-blue0 w-100" />
            </figure>
            <hgroup className="pa0-50 bg-blue0">
              <h2 className="mb0-50">{rc.name}</h2>
              <h3 className="mt0-00">{rc.region}</h3>
            </hgroup>
          </article>
          <article className="gr1s1 gc7s6 pa2-00 bg-blue1">
            <div className="tj lh-copy">
              <p>
                The Regional Consultant for {rc.region} represents AESL within the region, coordinating projects and client engagement while maintaining quality and delivery standards.
              </p>
              <p>
                Content can be expanded with official copy when available. For now, this page provides a consistent layout and navigation pattern across management profiles.
              </p>
              <div className="mt1-00">
                <Link to="/practice/management" className="ba br0-25 pa0-50 white-90">Back to Management</Link>
              </div>
            </div>
          </article>
        </div>
      </main>
    </div>
  );
};

export default RegionalConsultantDetails;
