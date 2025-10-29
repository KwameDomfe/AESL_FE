import persons from './persons';
import staffDetails from './staffList';

// Audit: Ensure every person is represented as staff, merging all available details
const staff = persons.map((person, idx) => {
  const custom = staffDetails[person.id] || {};
  // Only merge non-empty custom fields
  const merged = { ...person };
  Object.keys(custom).forEach(key => {
    if (custom[key] !== '' && custom[key] !== undefined && custom[key] !== null) {
      merged[key] = custom[key];
    }
  });
  return {
    id: `staff_${String(idx + 1).padStart(2, '0')}`,
    personID: person.id,
    staffNumber: `AESL${String(idx + 1).padStart(3, '0')}`,
    ...merged
  };
});

export default staff;
