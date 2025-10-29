import React, { useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import SubCategoryHeaderBanner from '../../../components/molecules/banners/SubCategoryHeaderBanner'
import managementHeader from '../../../images/practice/management/00.jpeg'
import { heads } from '../../../data/managementInfo'

const flattenHeads = () => {
  const sections = [
    { key: 'architecture-and-planning', list: heads.architectureAndPlanning },
    { key: 'engineering', list: heads.engineering },
    { key: 'administrative', list: heads.administrative },
  ];
  const map = new Map();
  sections.forEach(({ key, list }) => {
    list.forEach(item => {
      map.set(item.id, { ...item, section: key });
    });
  });
  return map;
};

const HODDetails = () => {
  const { id } = useParams();
  const byId = React.useMemo(() => flattenHeads(), []);
  const hod = byId.get(id);
  
  useEffect(() => {
    if (hod?.name && hod?.role) {
      document.title = `Head of Department — ${hod.role} — ${hod.name} | AESL`;
    } else {
      document.title = 'Head of Department | AESL';
    }
  }, [hod?.name, hod?.role]);

  if (!hod) {
    return (
      <div className="min-vh-100">
        <header>
          <SubCategoryHeaderBanner image={managementHeader} title="Head of Department" />
        </header>
        <main className="pa2-00">
          <h2 className="red">Head of Department not found</h2>
          <p className="mb1-00">No entry found for id: {id}</p>
          <Link className="blue0" to="/practice/management">Back to Management</Link>
        </main>
      </div>
    );
  }

  return (
    <div className="min-vh-100 w-100">
      <header>
        <SubCategoryHeaderBanner image={managementHeader} title={`Head of Department — ${hod.role}`} />
      </header>

      <main className="ph1-00">
        <div className="grid gtc12 ggap1-00 white-90">
          <article className="gr1s1 gc1s6 pa2-00 bg-blue1">
            <figure className="shadow-5 bg-blue2 mb0-50">
              <img loading="lazy" decoding="async" src={hod.image} alt={`${hod.name} — ${hod.role}`} className="pa0-50 bg-blue0 w-100" />
            </figure>
            <hgroup className="pa0-50 bg-blue0">
              <h2 className="mb0-50">{hod.name}</h2>
              <h3 className="mt0-00">{hod.role}</h3>
              {hod.email && (
                <p className="mt0-50 mb0-00">
                  <a className="link blue0 underline" href={`mailto:${hod.email}`}>{hod.email}</a>
                </p>
              )}
            </hgroup>
          </article>

          <article className="gr1s1 gc7s6 pa2-00 bg-blue1">
            <div className="tj lh-copy">
              <p>
                This department is responsible for delivering excellence in {hod.role.toLowerCase()} within AESL. Content can be expanded with real copy when available.
              </p>
              <p>
                For more information about AESL management and services, please explore related sections.
              </p>
              <div className="mt1-00">
                <Link to="/practice/management" className="ba br0-25 pa0-50 white-90">Back to Management</Link>
              </div>
            </div>
          </article>
        </div>
      </main>
    </div>
  )
}

export default HODDetails
