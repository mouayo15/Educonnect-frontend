import { menuItemsDataProf } from './menuProf';
import { menuItemsDataEleve } from './menuEleve';

// Dynamically export menu based on user role
const getMenuByRole = () => {
  const userRole = typeof window !== 'undefined' ? localStorage.getItem('userRole') || 'eleve' : 'eleve';

  if (userRole === 'prof') {
    return menuItemsDataProf;
  } else {
    return menuItemsDataEleve;
  }
};

export const menuItemsData = getMenuByRole();