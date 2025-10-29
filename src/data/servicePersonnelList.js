import staff from './staff';

// Auto-generate service personnel list from staff records
const servicePersonnelList = staff
  .filter(
    s => (s.currentRank && s.currentRank.trim().toLowerCase() === 'service personnel')
  )
  .map((s, idx) => ({
    id: idx + 1,
    staffId: s.id,
    name: `${s.firstName ? s.firstName : ''}${s.lastName ? ` ${s.lastName}` : ''}`.trim(),
    slug: `${s.firstName ? s.firstName.toLowerCase().replace(/\s+/g, '-') : ''}${s.lastName ? '-' + s.lastName.toLowerCase().replace(/\s+/g, '-') : ''}`,
    role: s.profession || '',
    office: s.office || '',
    department: s.department || '',
    thumbnailImage: s.image || '',
    thumbnailImageAlt: s.imageAlt || '',
    social: s.social || {},
    bannerImage: s.image || '',
    bannerImageAlt: s.imageAlt || '',
    cv: '',
    quote: {},
    images: s.image ? [s.image] : [],
    bio: {},
    newsFeatures: [],
    relatedProjects: {},
  }));

export default servicePersonnelList;
