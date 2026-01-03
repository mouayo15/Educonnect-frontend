import avatar10 from '@/assets/images/user/avatar-10.png';
import avatar2 from '@/assets/images/user/avatar-2.png';
import avatar3 from '@/assets/images/user/avatar-3.png';
import avatar4 from '@/assets/images/user/avatar-4.png';
import { LuChevronLeft, LuChevronRight, LuDownload, LuPlus, LuSearch, LuTrash2 } from 'react-icons/lu';
import { Link } from 'react-router';
const EmployeePerformance = () => {
  const coursesData = [{
    id: 'CS-101',
    date: '2023-09-01',
    prof: 'Dr. Alice Johnson',
    matiere: 'Mathematics',
    performance: 'Excellent',
    status: 'Enrolled',
    avatar: avatar10
  }, {
    id: 'CS-102',
    date: '2023-09-01',
    prof: 'Prof. Bob Smith',
    matiere: 'Physics',
    performance: 'Good',
    status: 'Enrolled',
    avatar: avatar2
  }, {
    id: 'CS-103',
    date: '2023-09-01',
    prof: 'Dr. Carol Lee',
    matiere: 'Chemistry',
    performance: 'Average',
    status: 'Completed',
    avatar: avatar3
  }, {
    id: 'CS-104',
    date: '2023-09-01',
    prof: 'Prof. David Kim',
    matiere: 'Biology',
    performance: 'Good',
    status: 'Enrolled',
    avatar: avatar4
  }, {
    id: 'CS-105',
    date: '2023-09-01',
    prof: 'Dr. Eve Martinez',
    matiere: 'History',
    performance: 'Low',
    status: 'Dropped',
    avatar: avatar4
  }];
  return <div className="card mb-5">
      <div className="card-header">
        <h6 className="card-title">Student Courses</h6>
        <div className="flex gap-3 items-center">
          <div className="relative">
            <input type="email" className="form-input form-input-sm ps-9" placeholder="Search for...." />
            <div className="absolute inset-y-0 start-0 flex items-center ps-3">
              <LuSearch className="size-4  text-default-500" />
            </div>
          </div>

          <button className="btn btn-sm border-dashed border-primary hover:bg-primary/20 text-primary">
            <LuDownload className="size-4 me-1" />
            Export
          </button>
        </div>
      </div>

      <div className="flex flex-col">
        <div className="overflow-x-auto">
          <div className="min-w-full inline-block align-middle">
            <div className="overflow-hidden">
              <table className="min-w-full divide-y divide-default-200">
                <thead className="bg-default-150">
                  <tr className="text-default-600">
                    <th scope="col" className="py-3 px-4 text-start pe-0">
                      <input id="checkbox-all" type="checkbox" className="form-checkbox" />
                    </th>
                    <th className="px-3.5 py-3 text-start text-sm font-medium">Date</th>
                    <th className="px-3.5 py-3 text-start text-sm font-medium">Prof</th>
                    <th className="px-3.5 py-3 text-start text-sm font-medium">Matiere</th>
                    <th className="px-3.5 py-3 text-start text-sm font-medium">Performance</th>
                    <th className="px-3.5 py-3 text-start text-sm font-medium">Status</th>
                    <th className="px-3.5 py-3 text-start text-sm font-medium">Ajouter ?</th>
                  </tr>
                </thead>

                <tbody className="divide-y divide-default-200">
                  {coursesData.map(course => <tr key={course.id} className="text-default-800 text-sm whitespace-nowrap">
                      <td className="py-3.5 ps-4">
                        <input type="checkbox" className="form-checkbox" />
                      </td>
                      <td className="px-3.5 py-2">{course.date}</td>
                      <td className="px-3.5 py-2.5">
                        <div className="flex items-center gap-2">
                          <img src={course.avatar} alt={course.prof} className="size-10 rounded-full" />
                          <div>
                            <h6 className="font-semibold mb-0.5">{course.prof}</h6>
                          </div>
                        </div>
                      </td>
                      <td className="px-3.5 py-2.5">{course.matiere}</td>
                      <td className="px-3.5 py-2.5">
                        {course.performance === 'Excellent' ? <span className="text-green-700">Excellent</span> : course.performance === 'Good' ? <span className="text-blue-700">Good</span> : course.performance === 'Average' ? <span className="text-yellow-700">Average</span> : <span className="text-red-700">Low</span>}
                      </td>
                      <td className="px-3.5 py-2.5">
                        {course.status === 'Enrolled' ? <span className="inline-flex items-center gap-x-1.5 py-0.5 px-2.5 rounded text-xs font-medium bg-success/10 text-success border border-success/30">
                            Enrolled
                          </span> : course.status === 'Completed' ? <span className="inline-flex items-center gap-x-1.5 py-0.5 px-2.5 rounded text-xs font-medium bg-blue/10 text-blue border border-blue/30">
                            Completed
                          </span> : <span className="py-0.5 px-2.5 inline-flex items-center text-xs font-medium bg-default-100 text-default-600 border border-default-200 rounded">
                            Dropped
                          </span>}
                      </td>
                      <td className="px-3.5 py-2.5 text-start">
                        <span className="inline-flex justify-start gap-2.5">
                          <Link to="#" className="btn size-8 bg-default-100 hover:bg-green-100 text-default-600 hover:text-success">
                            <LuPlus className="size-4" />
                          </Link>
                          <Link to="#" className="btn size-8 bg-default-100 hover:bg-red-100 text-default-600 hover:text-danger">
                            <LuTrash2 className="size-4" />
                          </Link>
                        </span>
                      </td>
                    </tr>)}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="card-footer">
          <p className="text-default-500 text-sm">
            Showing <b>10</b> of <b>19</b> Results
          </p>
          <nav className="flex items-center gap-2" aria-label="Pagination">
            <button type="button" className="btn btn-sm border bg-transparent border-default-200 text-default-600 hover:bg-primary/10 hover:text-primary hover:border-primary/10">
              <LuChevronLeft className="size-4 me-1" />
              Prev
            </button>

            <button type="button" className="btn size-7.5 bg-transparent border border-default-200 text-default-600 hover:bg-primary/10 hover:text-primary hover:border-primary/10">
              1
            </button>

            <button type="button" className="btn size-7.5 bg-primary text-white">
              2
            </button>

            <button type="button" className="btn size-7.5 bg-transparent border border-default-200 text-default-600 hover:bg-primary/10 hover:text-primary hover:border-primary/10">
              3
            </button>

            <button type="button" className="btn btn-sm border bg-transparent border-default-200 text-default-600 hover:bg-primary/10 hover:text-primary hover:border-primary/10">
              Next
              <LuChevronRight className="size-4 ms-1" />
            </button>
          </nav>
        </div>
      </div>
    </div>;
};
export default EmployeePerformance;