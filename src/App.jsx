import 'flatpickr/dist/flatpickr.css';
import 'swiper/swiper-bundle.css';
import '@/assets/css/style.css';
import ProvidersWrapper from './components/ProvidersWrapper';
import AppRoutes from './routes';
import { useEffect } from 'react';

const App = () => {
  useEffect(() => {
    // Log initial authentication state on app load
    const token = localStorage.getItem('token');
    const userData = localStorage.getItem('user');
    const userRole = localStorage.getItem('userRole');
    
    console.log('🌟 APP STARTED: Application initialized');
    console.log('🔍 AUTH STATE CHECK:', {
      hasToken: !!token,
      hasUser: !!userData,
      userRole: userRole || 'none',
      timestamp: new Date().toISOString()
    });
    
    if (userData) {
      try {
        const user = JSON.parse(userData);
        console.log('👤 CURRENT USER:', user);
      } catch (e) {
        console.warn('⚠️ Could not parse stored user data');
      }
    }
  }, []);

  return <ProvidersWrapper>
      <AppRoutes />
    </ProvidersWrapper>;
};

export default App;