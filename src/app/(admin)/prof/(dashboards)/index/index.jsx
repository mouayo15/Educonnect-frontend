import PageBreadcrumb from '@/components/PageBreadcrumb';
import PageMeta from '@/components/PageMeta';
import WelcomeUser from './components/WelcomeUser';
import Activities from '@/app/(admin)/prof/(dashboards)/hr/components/Activities';
import EmployeePerformance from '@/app/(admin)/prof/(dashboards)/hr/components/EmployeePerformance';
import UpcomingScheduled from '@/app/(admin)/prof/(dashboards)/hr/components/UpcomingScheduled';
import UserChart from '@/app/(admin)/prof/(dashboards)/analytics/components/UserChart';
import { Link } from 'react-router';

const Index = () => {
  return <>
      <PageMeta title="Professor Dashboard" />
      <main>
        <PageBreadcrumb title="Dashboard" subtitle="Professor Portal" />
        <div className="grid lg:grid-cols-3 grid-cols-1 gap-5 mb-5">
          <div className="lg:col-span-2 col-span-1">
            <WelcomeUser />
            <Activities />
          </div>
          <EmployeePerformance />
        </div>
        <UserChart />
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-5">
          <UpcomingScheduled />
          <div className="card">
            <div className="card-header">
              <h6 className="card-title">Quick Actions</h6>
            </div>
            <div className="card-body">
              <div className="grid grid-cols-2 gap-4">
                <Link to="#" className="btn btn-outline-primary">📚 Manage Courses</Link>
                <Link to="#" className="btn btn-outline-primary">🧾 Gradebook</Link>
                <Link to="#" className="btn btn-outline-primary">📅 Schedule Office Hours</Link>
                <Link to="#" className="btn btn-outline-primary">✉️ Message Students</Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>;
};

export default Index;