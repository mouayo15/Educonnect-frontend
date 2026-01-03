import { Link } from 'react-router';
const StudentAttendance = () => {
  return <div className="grid lg:grid-cols-4 grid-cols-1 mb-5 gap-5">
      <div className="lg:col-span-2">
        <h5 className="mb-2 text-xl text-default-800 font-semibold">Academic Overview 📚</h5>
        <p>
          Keep track of your attendance and academic performance. You have
          <Link to="#" className="underline text-default-900 font-semibold">
            2 upcoming assignments
          </Link>
          due this week. Stay focused and maintain your excellent attendance record!
          <Link to="#" className="text-primary ml-1">
            View Schedule
          </Link>
        </p>
      </div>

      <div className="lg:col-start-4">
        <div className="card">
          <div className="card-body">
            <div className="grid grid-cols-3">
              <div className="px-4 text-center border-e border-default-200 text-sm">
                <h6 className="mb-1 font-bold text-red-500">
                  <span className="counter-value" data-target="2">
                    2
                  </span>
                </h6>
                <p className="text-default-500">Absent</p>
              </div>

              <div className="px-4 text-center border-e border-default-200 text-sm">
                <h6 className="mb-1 font-bold text-green-500">
                  <span className="counter-value" data-target="45">
                    45
                  </span>
                </h6>
                <p className="text-default-500">Present</p>
              </div>

              <div className="px-4 text-center text-sm">
                <h6 className="mb-1 font-bold text-yellow-500">
                  <span className="counter-value" data-target="1">
                    1
                  </span>
                </h6>
                <p className="text-default-500">Late</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>;
};
export default StudentAttendance;