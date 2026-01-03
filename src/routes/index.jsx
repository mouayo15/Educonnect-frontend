import { useState, useEffect } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { layoutsRoutes, singlePageRoutes } from './Routes';
import PageWrapper from '@/components/PageWrapper';

const AppRoutes = () => {
  const [routes, setRoutes] = useState([]);
  const [userRole, setUserRole] = useState(() => {
    const initialRole = localStorage.getItem('userRole') || 'eleve';
    console.log(`🚀 APP ROUTES INIT: Initial userRole is '${initialRole}'`);
    return initialRole;
  });
  const [routesLoading, setRoutesLoading] = useState(true);

  // Listen for localStorage changes (for cross-tab logout/login)
  useEffect(() => {
    const handleStorageChange = (e) => {
      if (e.key === 'userRole') {
        console.log('🔄 STORAGE CHANGE: userRole changed from', e.oldValue, 'to', e.newValue);
        setUserRole(e.newValue || 'eleve');
      }
    };

    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

  // Log when userRole state changes
  useEffect(() => {
    console.log(`👤 USER ROLE STATE: Changed to '${userRole}' at ${new Date().toISOString()}`);
  }, [userRole]);

  useEffect(() => {
    const loadRoutes = async () => {
      setRoutesLoading(true);
      setRoutes([]); // Clear existing routes
      console.log(`🚀 ROUTE LOADING: Loading routes for role '${userRole}'...`);
      const loadedRoutes = await layoutsRoutes(); // Call the function
      console.log(`📋 ROUTES LOADED: ${loadedRoutes.length} routes loaded for role '${userRole}'`);
      setRoutes(loadedRoutes);
      setRoutesLoading(false);
    };
    loadRoutes();
  }, [userRole]); // Re-load routes when userRole changes

  // Show loading while routes are being loaded
  if (routesLoading) {
    console.log('⏳ ROUTES LOADING: Showing loading screen while routes load...');
    return (
      <div className="h-screen w-full flex justify-center items-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading dashboard...</p>
        </div>
      </div>
    );
  }

  console.log('✅ ROUTES READY: Routes loaded, rendering app...');

  return <>
      <Routes>
        {/* Redirect root path to cover-login */}
        <Route path="/" element={<Navigate to="/cover-login" replace />} />

        {routes.map(route => <Route key={route.name} path={route.path} element={<PageWrapper>{route.element}</PageWrapper>} />)}

        {singlePageRoutes.map(route => <Route key={route.name} path={route.path} element={route.element} />)}
        
        {/* Only show 404 when routes are loaded and no match found */}
        {!routesLoading && <Route path="*" element={<Navigate to="/404" replace />} />}
      </Routes>
    </>;
};

export default AppRoutes;