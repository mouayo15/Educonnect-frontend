import { useState, useEffect } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { layoutsRoutes, singlePageRoutes } from './Routes';
import PageWrapper from '@/components/PageWrapper';

const AppRoutes = () => {
  const [routes, setRoutes] = useState([]);

  useEffect(() => {
    const loadRoutes = async () => {
      const loadedRoutes = await layoutsRoutes;
      setRoutes(loadedRoutes);
    };
    loadRoutes();
  }, []);

  return <>
      <Routes>
        {/* Redirect root path to cover-login */}
        <Route path="/" element={<Navigate to="/cover-login" replace />} />

        {routes.map(route => <Route key={route.name} path={route.path} element={<PageWrapper>{route.element}</PageWrapper>} />)}

        {singlePageRoutes.map(route => <Route key={route.name} path={route.path} element={route.element} />)}
        <Route path="*" element={<Navigate to="/404" replace />} />
      </Routes>
    </>;
};

export default AppRoutes;