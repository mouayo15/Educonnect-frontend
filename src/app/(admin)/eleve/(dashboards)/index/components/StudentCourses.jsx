import avatar10 from '@/assets/images/user/avatar-10.png';
import avatar2 from '@/assets/images/user/avatar-2.png';
import avatar3 from '@/assets/images/user/avatar-3.png';
import avatar4 from '@/assets/images/user/avatar-4.png';
import { LuDownload, LuSearch } from 'react-icons/lu';
import { Link } from 'react-router';

const StudentCourses = () => {
  const coursesData = [{
    id: 'CS-101',
    date: '2024-01-15',
    prof: 'Dr. Alice Johnson',
    matiere: 'Mathematics',
    grade: 'A',
    status: 'Enrolled',
    avatar: avatar10
  }, {
    id: 'CS-102',
    date: '2024-01-15',
    prof: 'Prof. Bob Smith',
    matiere: 'Physics',
    grade: 'B+',
    status: 'Enrolled',
    avatar: avatar2
  }, {
    id: 'CS-103',
    date: '2024-01-15',
    prof: 'Dr. Carol Lee',
    matiere: 'Chemistry',
    grade: 'A-',
    status: 'Enrolled',
    avatar: avatar3
  }, {
    id: 'CS-104',
    date: '2024-01-15',
    prof: 'Prof. David Kim',
    matiere: 'Biology',
    grade: 'B',
    status: 'Enrolled',
    avatar: avatar4
  }, {
    id: 'CS-105',
    date: '2023-09-01',
    prof: 'Dr. Eve Martinez',
    matiere: 'History',
    grade: 'A',
    status: 'Completed',
    avatar: avatar4
  }];

  const getGradeColor = (grade) => {
    if (grade.startsWith('A')) return 'text-green-600 bg-green-100';
    if (grade.startsWith('B')) return 'text-blue-600 bg-blue-100';
    if (grade.startsWith('C')) return 'text-yellow-600 bg-yellow-100';
    return 'text-red-600 bg-red-100';
  };

  const getStatusColor = (status) => {
    return status === 'Enrolled' ? 'text-blue-600 bg-blue-100' : 'text-green-600 bg-green-100';
  };

  return <div className="card mb-5">
      <div className="card-header">
        <h6 className="card-title">My Courses</h6>
        <div className="flex gap-3 items-center">
          <div className="relative">
            <input type="text" className="form-input form-input-sm ps-9" placeholder="Search courses..." />
            <div className="absolute inset-y-0 start-0 flex items-center ps-3">
              <LuSearch className="size-4 text-default-500" />
            </div>
          </div>

          <button className="btn btn-sm border-dashed border-primary hover:bg-primary/20 text-primary">
            <LuDownload className="size-4 me-1" />
            Export Grades
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
                    <th className="px-3.5 py-3 text-start text-sm font-medium">Course ID</th>
                    <th className="px-3.5 py-3 text-start text-sm font-medium">Professor</th>
                    <th className="px-3.5 py-3 text-start text-sm font-medium">Subject</th>
                    <th className="px-3.5 py-3 text-start text-sm font-medium">Grade</th>
                    <th className="px-3.5 py-3 text-start text-sm font-medium">Status</th>
                    <th className="px-3.5 py-3 text-start text-sm font-medium">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-default-200">
                  {coursesData.map((course, idx) => (
                    <tr key={idx}>
                      <td className="py-3 px-4 pe-0">
                        <input id={`checkbox-${idx}`} type="checkbox" className="form-checkbox" />
                      </td>
                      <td className="px-3.5 py-3 text-sm font-medium text-default-700">
                        {course.id}
                      </td>
                      <td className="px-3.5 py-3 text-sm">
                        <div className="flex items-center gap-3">
                          <div className="flex-shrink-0">
                            <img src={course.avatar} alt="" className="size-8 rounded-full" />
                          </div>
                          <div>
                            <p className="text-sm font-medium text-default-700">{course.prof}</p>
                          </div>
                        </div>
                      </td>
                      <td className="px-3.5 py-3 text-sm text-default-700">
                        {course.matiere}
                      </td>
                      <td className="px-3.5 py-3 text-sm">
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getGradeColor(course.grade)}`}>
                          {course.grade}
                        </span>
                      </td>
                      <td className="px-3.5 py-3 text-sm">
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(course.status)}`}>
                          {course.status}
                        </span>
                      </td>
                      <td className="px-3.5 py-3 text-sm">
                        <Link to="#" className="text-primary hover:text-primary-600">
                          View Details
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>;
};

export default StudentCourses;