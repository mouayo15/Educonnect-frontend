import { lazy } from 'react';

// Dynamically import routes based on user role
const getRoutesByRole = () => {
  const userRole = localStorage.getItem('userRole') || 'eleve'; // default to eleve

  if (userRole === 'prof') {
    return import('./profRoutes').then(module => module.profRoutes);
  } else {
    return import('./eleveRoutes').then(module => module.eleveRoutes);
  }
};

// auth

const CoverCreatePassword = lazy(() => import('@/app/(auth)/cover-create-password'));
const CoverLogin = lazy(() => import('@/app/(auth)/cover-login'));
const CoverRegister = lazy(() => import('@/app/(auth)/cover-register'));
const CoverResetPassword = lazy(() => import('@/app/(auth)/cover-reset-password'));
const CoverLogout = lazy(() => import('@/app/(auth)/cover-logout'));
const CoverTwoStep = lazy(() => import('@/app/(auth)/cover-two-steps'));
const CoverVerifyEmail = lazy(() => import('@/app/(auth)/cover-verify-email'));

//  landing

const OnePageLanding = lazy(() => import('@/app/(landing)/onepage-landing'));
const ProductLanding = lazy(() => import('@/app/(landing)/product-landing'));

//Other

const Error404 = lazy(() => import('@/app/(others)/404'));
const CommingSoon = lazy(() => import('@/app/(others)/coming-soon'));
const Maintenance = lazy(() => import('@/app/(others)/maintenance'));
const Offline = lazy(() => import('@/app/(others)/offline'));

// Export layoutsRoutes as a promise that resolves to the correct routes
export const layoutsRoutes = getRoutesByRole();

export const singlePageRoutes = [{
  path: '/cover-login',
  name: 'CoverLogin',
  element: <CoverLogin />
}, {
  path: '/cover-register',
  name: 'CoverRegister',
  element: <CoverRegister />
}, {
  path: '/cover-create-password',
  name: 'CoverCreatePassword',
  element: <CoverCreatePassword />
}, {
  path: '/cover-reset-password',
  name: 'CoverResetPassword',
  element: <CoverResetPassword />
}, {
  path: '/cover-logout',
  name: 'CoverLogout',
  element: <CoverLogout />
}, {
  path: '/cover-two-steps',
  name: 'CoverTwoStep',
  element: <CoverTwoStep />
}, {
  path: '/cover-verify-email',
  name: 'CoverVerifyEmail',
  element: <CoverVerifyEmail />
}, {
  path: '/onepage-landing',
  name: 'OnePageLanding',
  element: <OnePageLanding />
}, {
  path: '/product-landing',
  name: 'ProductLanding',
  element: <ProductLanding />
}, {
  path: '/404',
  name: '404',
  element: <Error404 />
}, {
  path: '/coming-soon',
  name: 'ComingSoon',
  element: <CommingSoon />
}, {
  path: '/maintenance',
  name: 'Maintenance',
  element: <Maintenance />
}, {
  path: '/offline',
  name: 'Offline',
  element: <Offline />
}];