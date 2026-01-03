import { lazy } from 'react';

// admin Ecommerce

const Cart = lazy(() => import('@/app/(admin)/prof/(app)/(ecommerce)/cart'));
const Checkout = lazy(() => import('@/app/(admin)/prof/(app)/(ecommerce)/checkout'));
const OrderOverview = lazy(() => import('@/app/(admin)/prof/(app)/(ecommerce)/order-overview'));
const Orders = lazy(() => import('@/app/(admin)/prof/(app)/(ecommerce)/orders'));
const ProductCreate = lazy(() => import('@/app/(admin)/prof/(app)/(ecommerce)/product-create'));
const ProductGrid = lazy(() => import('@/app/(admin)/prof/(app)/(ecommerce)/product-grid'));
const ProductList = lazy(() => import('@/app/(admin)/prof/(app)/(ecommerce)/product-list'));
const ProductOverview = lazy(() => import('@/app/(admin)/prof/(app)/(ecommerce)/product-overview'));
const Sellers = lazy(() => import('@/app/(admin)/prof/(app)/(ecommerce)/sellers'));

// admin Hr

const Attendances = lazy(() => import('@/app/(admin)/prof/(app)/(hr)/attendance'));
const AttemdanceMain = lazy(() => import('@/app/(admin)/prof/(app)/(hr)/attendance-main'));
const CreateLeave = lazy(() => import('@/app/(admin)/prof/(app)/(hr)/create-leave'));
const CreateLeaveEmployee = lazy(() => import('@/app/(admin)/prof/(app)/(hr)/create-leave-employee'));
const CreatePayslip = lazy(() => import('@/app/(admin)/prof/(app)/(hr)/create-payslip'));
const Department = lazy(() => import('@/app/(admin)/prof/(app)/(hr)/department'));
const Employee = lazy(() => import('@/app/(admin)/prof/(app)/(hr)/employee'));
const Holidays = lazy(() => import('@/app/(admin)/prof/(app)/(hr)/holidays'));
const Leave = lazy(() => import('@/app/(admin)/prof/(app)/(hr)/leave'));
const LeaveEmployee = lazy(() => import('@/app/(admin)/prof/(app)/(hr)/leave-employee'));
const PayrollEmplyoeeSalary = lazy(() => import('@/app/(admin)/prof/(app)/(hr)/payroll-employee-salary'));
const PayRollSlip = lazy(() => import('@/app/(admin)/prof/(app)/(hr)/payroll-payslip'));
const SalesEstimate = lazy(() => import('@/app/(admin)/prof/(app)/(hr)/sales-estimates'));
const SalesExpense = lazy(() => import('@/app/(admin)/prof/(app)/(hr)/sales-expenses'));
const SalePayment = lazy(() => import('@/app/(admin)/prof/(app)/(hr)/sales-payments'));

// admin invoice

const InvoiceAddNew = lazy(() => import('@/app/(admin)/prof/(app)/(invoice)/add-new'));
const InvoiceList = lazy(() => import('@/app/(admin)/prof/(app)/(invoice)/list'));
const InvoiceOverview = lazy(() => import('@/app/(admin)/prof/(app)/(invoice)/overview'));

// USers

const UserGrid = lazy(() => import('@/app/(admin)/prof/(app)/(users)/users-grid'));
const UserList = lazy(() => import('@/app/(admin)/prof/(app)/(users)/users-list'));
const Calender = lazy(() => import('@/app/(admin)/prof/(app)/calendar'));
const Chat = lazy(() => import('@/app/(admin)/prof/(app)/chat'));
const MailBox = lazy(() => import('@/app/(admin)/prof/(app)/mailbox'));
const Notes = lazy(() => import('@/app/(admin)/prof/(app)/notes'));

// dashboard
const Analytics = lazy(() => import('@/app/(admin)/prof/(dashboards)/analytics'));
const Email = lazy(() => import('@/app/(admin)/prof/(dashboards)/email'));
const Hr = lazy(() => import('@/app/(admin)/prof/(dashboards)/hr'));
const Ecommerce = lazy(() => import('@/app/(admin)/prof/(dashboards)/index'));

// layouts
const DarkMode = lazy(() => import('@/app/(admin)/prof/(layouts)/dark-mode'));
const RTL = lazy(() => import('@/app/(admin)/prof/(layouts)/rtl-mode'));
const SideNavCompact = lazy(() => import('@/app/(admin)/prof/(layouts)/sidenav-compact'));
const SideNavDark = lazy(() => import('@/app/(admin)/prof/(layouts)/sidenav-dark'));
const SideNavHidden = lazy(() => import('@/app/(admin)/prof/(layouts)/sidenav-hidden'));
const SideNavHover = lazy(() => import('@/app/(admin)/prof/(layouts)/sidenav-hover'));
const SideNavHoverActive = lazy(() => import('@/app/(admin)/prof/(layouts)/sidenav-hover-active'));
const SideOffcanvas = lazy(() => import('@/app/(admin)/prof/(layouts)/sidenav-offcanvas'));
const SideNavSmall = lazy(() => import('@/app/(admin)/prof/(layouts)/sidenav-small'));

//Pages

const Faq = lazy(() => import('@/app/(admin)/prof/(pages)/faqs'));
const Pricing = lazy(() => import('@/app/(admin)/prof/(pages)/pricing'));
const Starter = lazy(() => import('@/app/(admin)/prof/(pages)/starter'));
const Timeline = lazy(() => import('@/app/(admin)/prof/(pages)/timeline'));

export const profRoutes = [{
  path: '/',
  name: 'Ecommerce',
  element: <Ecommerce />
}, {
  path: '/index',
  name: 'Ecommerce',
  element: <Ecommerce />
}, {
  path: '/cart',
  name: 'Cart',
  element: <Cart />
}, {
  path: '/checkout',
  name: 'Checkout',
  element: <Checkout />
}, {
  path: '/order-overview',
  name: 'OrderOverview',
  element: <OrderOverview />
}, {
  path: '/orders',
  name: 'Orders',
  element: <Orders />
}, {
  path: '/product-create',
  name: 'ProductCreate',
  element: <ProductCreate />
}, {
  path: '/product-grid',
  name: 'ProductGrid',
  element: <ProductGrid />
}, {
  path: '/product-list',
  name: 'ProductList',
  element: <ProductList />
}, {
  path: '/product-overview',
  name: 'ProductOverview',
  element: <ProductOverview />
}, {
  path: '/sellers',
  name: 'Sellers',
  element: <Sellers />
}, {
  path: '/attendance',
  name: 'Attendances',
  element: <Attendances />
}, {
  path: '/attendance-main',
  name: 'AttemdanceMain',
  element: <AttemdanceMain />
}, {
  path: '/create-leave',
  name: 'CreateLeave',
  element: <CreateLeave />
}, {
  path: '/create-leave-employee',
  name: 'CreateLeaveEmployee',
  element: <CreateLeaveEmployee />
}, {
  path: '/create-payslip',
  name: 'CreatePayslip',
  element: <CreatePayslip />
}, {
  path: '/department',
  name: 'Department',
  element: <Department />
}, {
  path: '/employee',
  name: 'Employee',
  element: <Employee />
}, {
  path: '/holidays',
  name: 'Holidays',
  element: <Holidays />
}, {
  path: '/leave',
  name: 'Leave',
  element: <Leave />
}, {
  path: '/leave-employee',
  name: 'LeaveEmployee',
  element: <LeaveEmployee />
}, {
  path: '/payroll-employee-salary',
  name: 'PayrollEmplyoeeSalary',
  element: <PayrollEmplyoeeSalary />
}, {
  path: '/payroll-payslip',
  name: 'PayRollSlip',
  element: <PayRollSlip />
}, {
  path: '/sales-estimates',
  name: 'SalesEstimate',
  element: <SalesEstimate />
}, {
  path: '/sales-expenses',
  name: 'SalesExpense',
  element: <SalesExpense />
}, {
  path: '/sales-payments',
  name: 'SalePayment',
  element: <SalePayment />
}, {
  path: '/add-new',
  name: 'InvoiceAddNew',
  element: <InvoiceAddNew />
}, {
  path: '/list',
  name: 'InvoiceList',
  element: <InvoiceList />
}, {
  path: '/overview',
  name: 'InvoiceOverview',
  element: <InvoiceOverview />
}, {
  path: '/users-grid',
  name: 'UserGrid',
  element: <UserGrid />
}, {
  path: '/users-list',
  name: 'UserList',
  element: <UserList />
}, {
  path: '/calendar',
  name: 'Calender',
  element: <Calender />
}, {
  path: '/chat',
  name: 'Chat',
  element: <Chat />
}, {
  path: '/mailbox',
  name: 'MailBox',
  element: <MailBox />
}, {
  path: '/notes',
  name: 'Notes',
  element: <Notes />
}, {
  path: '/analytics',
  name: 'Analytics',
  element: <Analytics />
}, {
  path: '/email',
  name: 'Email',
  element: <Email />
}, {
  path: '/hr',
  name: 'Hr',
  element: <Hr />
}, {
  path: '/dark-mode',
  name: 'DarkMode',
  element: <DarkMode />
}, {
  path: '/rtl-mode',
  name: 'RtlMode',
  element: <RTL />
}, {
  path: '/sidenav-compact',
  name: 'SideNavCompact',
  element: <SideNavCompact />
}, {
  path: '/sidenav-dark',
  name: 'SideNavDark',
  element: <SideNavDark />
}, {
  path: '/sidenav-hidden',
  name: 'SideNavHidden',
  element: <SideNavHidden />
}, {
  path: '/sidenav-hover',
  name: 'SideNavHover',
  element: <SideNavHover />
}, {
  path: '/sidenav-offcanvas',
  name: 'SideNavOffcanvas',
  element: <SideOffcanvas />
}, {
  path: '/sidenav-small',
  name: 'SideNavSmall',
  element: <SideNavSmall />
}, {
  path: '/sidenav-hover-active',
  name: 'SideNavHoverActive',
  element: <SideNavHoverActive />
}, {
  path: '/faqs',
  name: 'Faqs',
  element: <Faq />
}, {
  path: '/pricing',
  name: 'Pricing',
  element: <Pricing />
}, {
  path: '/starter',
  name: 'Starter',
  element: <Starter />
}, {
  path: '/timeline',
  name: 'Timeline',
  element: <Timeline />
}];