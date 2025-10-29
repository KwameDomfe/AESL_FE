const positions = [
  { id: 'position_01', 
    title: 'Managing Director',
  },
  { id: 'position_02', 
    title: 'Deputy Managing Directors',
    section: [
      'architecture And Planning',
      'engineering',
    ]
  },
  { id: 'position_03', 
    title: 'HoDs',
    departments: [
      {
        'architecture and planning':[
          'architecture',
          'land valuation',
          'Quantity Surveying',
          'Land Surveying',
        ],
      },
      {
        'engineering': [
          'structural',
          'installations',
          'water',
          'geotechnical',
        ]
      },
      {
        'administrative': [
          'finance',
          'hrms',
          'it',
          'internal audit',
        ]
      }
    ]
  },
  { id: 'position_04', 
    title: 'Regional Consultants',
    regions: [
      'Greater Accra',
      'Ashanti',
      'Eastern',
      'Western and Western North',
      'Northern, North East and Savannah',
      'Volta and Oti',
      'Brong Ahafo, Bono and Ahafo',
      'Central',
      'Upper East',
      'Upper West',
    ]
  },
];

export default positions;
