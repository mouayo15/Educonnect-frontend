import PageBreadcrumb from '@/components/PageBreadcrumb';
import PageMeta from '@/components/PageMeta';
import GradeOverview from './components/GradeOverview';
import StudentAttendance from './components/StudentAttendance';
import StudentCourses from './components/StudentCourses';
import UpcomingAssignments from './components/UpcomingAssignments';
import WelcomeUser from './components/WelcomeUser';

const Index = () => {
  return <>
      <PageMeta title="Student Dashboard" />
      <main>
        <PageBreadcrumb title="Dashboard" subtitle="Student Portal" />
        <div className="grid lg:grid-cols-3 grid-cols-1 gap-5 mb-5">
          <div className="lg:col-span-2 col-span-1">
            <WelcomeUser />
            <StudentAttendance />
          </div>
          <GradeOverview />
        </div>
        <StudentCourses />
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-5">
          <UpcomingAssignments />
          <div className="card">
            <div className="card-header">
              <h6 className="card-title">Quick Actions</h6>
            </div>
            <div className="card-body">
              <div className="grid grid-cols-2 gap-4">
                <button className="btn btn-outline-primary">
                  📚 View Syllabus
                </button>
                <button className="btn btn-outline-primary">
                  📝 Submit Assignment
                </button>
                <button className="btn btn-outline-primary">
                  👥 Join Study Group
                </button>
                <button className="btn btn-outline-primary">
                  📞 Contact Professor
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>;
};

export default Index;