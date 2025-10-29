import { heads, regionalConsultants } from './managementInfo';

const ap = heads.architectureAndPlanning;
const eng = heads.engineering;
const adm = heads.administrative;
const rc = regionalConsultants;

// Declarative card configurations per section to reduce JSX repetition
export const apCardsConfig = [
  {
    id: 'head-architecture',
    data: ap[0],
    wrapperClass: 'gr3s1 gc1s6 grid mb2-00',
    textClass: 'gr2s1 gc1s12 flex flex-column justify-between relative w-100 pa1-00',
    imageClass: 'gr1s1 gc1s12 flex items-center justify-center relative',
    imageClassName: 'pa0-50 w-100',
    containerAs: 'article',
    altText: `${ap[0].name} — Head of ${ap[0].role}`,
  },
  {
    id: 'head-valuation',
    data: ap[1],
    wrapperClass: 'gr3s1 gc7s6 grid  mb2-00 f1-00',
    textClass: 'gr2s1 gc1s12 flex flex-column justify-between relative w-100 pa1-00',
    imageClass: 'gr1s1 gc1s12 flex items-center justify-center relative',
    imageClassName: 'pa0-50 h-100',
    containerAs: 'article',
    altText: `${ap[1].name} — Head of ${ap[1].role}`,
  },
  {
    id: 'head-quantity-surveying',
    data: ap[2],
    wrapperClass: 'gr4s1 gc1s6 grid ',
    textClass: 'gr2s1 gc1s12 flex flex-column justify-between relative w-100 pa1-00',
    imageClass: 'gr1s1 gc1s12 flex items-center justify-center relative',
    imageClassName: 'pa0-50 w-100',
    containerAs: 'article',
    altText: `${ap[2].name} — Head of ${ap[2].role}`,
  },
  {
    id: 'head-land-surveying',
    data: ap[3],
    wrapperClass: 'gr4s1 gc7s6 grid  f1-00',
    textClass: 'gr2s1 gc1s12 flex flex-column justify-between relative w-100 pa1-00',
    imageClass: 'gr1s1 gc1s12 flex items-center justify-center relative',
    imageClassName: 'pa0-50 h-100',
    containerAs: 'article',
    altText: `${ap[3].name} — Head of ${ap[3].role}`,
  },
];

export const engCardsConfig = [
  {
    id: 'head-civil',
    data: eng[0],
    wrapperClass: 'gr2s1 gc1s6 grid ',
    textClass: 'gr2s1 gc1s12 flex flex-column justify-between relative w-100 pa1-00',
    imageClass: 'gr1s1 gc1s12 flex items-center justify-center relative',
    imageClassName: 'pa0-50 w-100',
    containerAs: 'div',
    altText: `${eng[0].name} — Head of ${eng[0].role}`,
  },
  {
    id: 'head-installations',
    data: eng[1],
    wrapperClass: 'gr2s1 gc7s6 grid ',
    textClass: 'gr2s1 gc1s12 flex flex-column justify-start relative w-100 pa1-00',
    imageClass: 'gr1s1 gc1s12 flex items-center justify-center relative',
    imageClassName: 'pa0-50 h-100',
    containerAs: 'article',
    altText: `${eng[1].name} — Head of ${eng[1].role}`,
  },
  {
    id: 'head-water',
    data: eng[2],
    wrapperClass: 'gr3s1 gc1s6 grid  mb2-00',
    textClass: 'gr2s1 gc1s12 flex flex-column justify-between relative w-100 pa1-00',
    imageClass: 'gr1s1 gc1s12 flex items-center justify-center relative',
    imageClassName: 'pa0-50 w-100',
    containerAs: 'article',
    altText: `${eng[2].name} — Head of ${eng[2].role}`,
  },
  {
    id: 'head-geotech',
    data: eng[3],
    wrapperClass: 'gr3s1 gc7s6 grid  mb2-00' ,
    textClass: 'gr2s1 gc1s12 flex flex-column justify-start relative w-100 pa1-00',
    imageClass: 'gr1s1 gc1s12 flex items-center justify-center relative',
    imageClassName: 'pa0-50 h-100',
    containerAs: 'article',
    altText: `${eng[3].name} — Head of ${eng[3].role}`,
  },
];

export const admCardsConfig = [
  {
    data: adm[0],
    id: 'head-finance',
    wrapperClass: 'gr3s1 gc1s6 grid  mb2-00',
    textClass: 'gr2s1 gc1s12 flex flex-column justify-between relative w-100 pa1-00',
    imageClass: 'gr1s1 gc1s12 flex items-center justify-center relative',
    imageClassName: 'pa0-50 w-100',
    containerAs: 'article',
  },
  {
    data: adm[1],
    id: 'head-hrms',
    wrapperClass: 'gr3s1 gc7s6 grid  mb2-00 f1-00',
    textClass: 'gr2s1 gc1s12 flex flex-column justify-start relative w-100 pa1-00',
    imageClass: 'gr1s1 gc1s12 flex items-center justify-center relative',
    imageClassName: 'pa0-50 h-100',
    containerAs: 'article',
  },
  {
    data: adm[2],
    id: 'head-it',
    wrapperClass: 'gr4s1 gc1s6 grid ',
    textClass: 'gr2s1 gc1s12 flex flex-column justify-between relative w-100 pa1-00',
    imageClass: 'gr1s1 gc1s12 flex items-center justify-center relative',
    imageClassName: 'pa0-50 w-100',
    containerAs: 'article',
  },
  {
    data: adm[3],
    id: 'research-and-development',
    wrapperClass: 'gr4s1 gc7s6 grid  f1-00',
    textClass: 'gr2s1 gc1s12 flex flex-column justify-start relative w-100 pa1-00',
    imageClass: 'gr1s1 gc1s12 flex items-center justify-center relative',
    imageClassName: 'pa0-50 h-100',
    containerAs: 'article',
  },
];

export const rcCardsConfig = [
  { id: 'regionalConsultant_1', data: rc[0], wrapperClass: 'gr2s1 gc1s6 grid ', textClass: 'gr2s1 gc1s12 flex flex-column justify-between relative w-100 pa1-00', imageClass: 'gr1s1 gc1s12 flex items-center justify-center relative', imageClassName: 'pa0-50 w-100', containerAs: 'article' },
  { id: 'regionalConsultant_2', data: rc[1], wrapperClass: 'gr2s1 gc7s6 grid  f1-00', textClass: 'gr2s1 gc1s12 flex flex-column justify-start relative w-100 pa1-00', imageClass: 'gr1s1 gc1s12 flex items-center justify-center relative', imageClassName: 'pa0-50 h-100', containerAs: 'article' },
  { id: 'regionalConsultant_3', data: rc[2], wrapperClass: 'gr3s1 gc1s6 grid  mb2-00', textClass: 'gr2s1 gc1s12 flex flex-column justify-between relative w-100 pa1-00', imageClass: 'gr1s1 gc1s12 flex items-center justify-center relative', imageClassName: 'pa0-50 w-100', containerAs: 'article' },
  { id: 'regionalConsuultant_6', data: rc[3], wrapperClass: 'gr3s1 gc7s6 grid  mb2-00 f1-00', textClass: 'gr2s1 gc1s12 flex flex-column justify-start relative w-100 pa1-00', imageClass: 'gr1s1 gc1s12 flex items-center justify-center relative', imageClassName: 'pa0-50 h-100', containerAs: 'article' },
  { id: 'regionalConsultant_4', data: rc[4], wrapperClass: 'gr4s1 gc7s6 grid  f1-00', textClass: 'gr2s1 gc1s12 flex flex-column justify-start relative w-100 pa1-00', imageClass: 'gr1s1 gc1s12 flex items-center justify-center relative', imageClassName: 'pa0-50 h-100', containerAs: 'article' },
  { id: 'regionalConsuultant_5', data: rc[5], wrapperClass: 'gr4s1 gc1s6 grid ', textClass: 'gr2s1 gc1s12 flex flex-column justify-between relative w-100 pa1-00', imageClass: 'gr1s1 gc1s12 flex items-center justify-center relative', imageClassName: 'pa0-50 w-100', containerAs: 'article' },
  { id: 'regionalConsuultant_7', data: rc[6], wrapperClass: 'gr6s1 gc1s6 grid ', textClass: 'gr2s1 gc1s12 flex flex-column justify-between relative w-100 pa1-00', imageClass: 'gr1s1 gc1s12 flex items-center justify-center relative', imageClassName: 'pa0-50 w-100', containerAs: 'article' },
  { id: 'regionalConsuultant_8', data: rc[7], wrapperClass: 'gr6s1 gc7s6 grid  f1-00', textClass: 'gr2s1 gc1s12 flex flex-column justify-start relative w-100 pa1-00', imageClass: 'gr1s1 gc1s12 flex items-center justify-center relative', imageClassName: 'pa0-50 h-100', containerAs: 'article' },
  { id: 'regionalConsuultant_9', data: rc[8], wrapperClass: 'gr5s1 gc1s6 grid ', textClass: 'gr2s1 gc1s12 flex flex-column justify-between relative w-100 pa1-00', imageClass: 'gr1s1 gc1s12 flex items-center justify-center relative', imageClassName: 'pa0-50 w-100', containerAs: 'article' },
  { id: 'regionalConsuultant_10', data: rc[9], wrapperClass: 'gr5s1 gc7s6 grid  f1-00', textClass: 'gr2s1 gc1s12 flex flex-column justify-start relative w-100 pa1-00', imageClass: 'gr1s1 gc1s12 flex items-center justify-center relative', imageClassName: 'pa0-50 h-100', containerAs: 'article' },
];
