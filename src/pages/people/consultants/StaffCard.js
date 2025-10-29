import React from 'react'

import { socialNavMenu } from '../../../data/navItems';
import { Link } from 'react-router-dom';
import StaffImage from '../../../components/shared/StaffImage';

const StaffCard = ({ consultant, type = 'consultant' }) => {
  // Determine profile link and role label based on type
  const profileBase = type === 'senior-professional' ? '/people/senior-professionals/' : '/people/consultants/';
  const roleLabel = consultant.role && consultant.role.trim() ? consultant.role : (type === 'senior-professional' ? 'Senior Professional' : 'Consultant');

  return (
    <article className="flex flex-column items-center justify-between 
      h-100 
      ba br0-50 b--black-10 
      shadow-5"
    >
      <figure className="w-100 mb0-50 h-100">
        <StaffImage
          src={consultant.image || consultant.thumbnailImage || '/images/placeholder.png'}
          alt={consultant.imageAlt || consultant.thumbnailImageAlt || 'Portrait'}
          className="pa0-50 h20-00 cover"
        />
      </figure>
      <hgroup className="flex flex-column items-center justify-start pa0-25 mb1-00 blue0 f1-00">
        <h2 className="f1-50 b">
          {consultant.title ? `${consultant.title} ` : ''}
          {consultant.name && consultant.name.trim() ? consultant.name : 'Name Unavailable'}
        </h2>
        {consultant.officialEmail && (
          <div className="mb1-00 f1-00 gray">
            <span className="b">@</span><a href={`mailto:${consultant.officialEmail}`}>{consultant.officialEmail}</a>
          </div>
        )}
        <p className="mb0-25 bb">~ {roleLabel} ~</p>
        <h6>
          {(consultant.office && consultant.office.trim()) ? consultant.office : 'Office'}
          {' - '}
          <span>{(consultant.department && consultant.department.trim()) ? consultant.department : 'Department'}</span>
        </h6>
        
      </hgroup>
      <footer className="flex justify-between items-center w-100 pa1-00 bg-green">
        <div className="flex items-center justify-around pv0-25">
          <ul className="flex justify-start items-center f1-25 pt0-50">
            {socialNavMenu.map(({ key, icon, label }) => {
              const socialUrl = consultant.social && consultant.social[key] ? consultant.social[key] : '';
              return (
                <li key={key} className="mh0-50">
                  {socialUrl ? (
                    <a href={socialUrl.startsWith('http') ? socialUrl : `https://${socialUrl}`}
                      target="_blank" rel="noopener noreferrer" aria-label={label}>
                      {icon}
                    </a>
                  ) : (
                    <div className='black-20'>{icon}</div>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
        <div>
          <Link className="pa0-25 ba br0-25" to={`${profileBase}${consultant.slug}`}>View Profile</Link>
        </div>
      </footer>
    </article>
  )
}

export default StaffCard