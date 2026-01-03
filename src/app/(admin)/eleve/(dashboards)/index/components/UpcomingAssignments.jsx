import { LuCalendar, LuClock } from 'react-icons/lu';

const assignments = [{
  id: 1,
  day: '15',
  month: 'Jan',
  title: 'Math Assignment #3',
  subject: 'Calculus',
  time: '11:59 PM',
  type: 'Assignment',
  priority: 'high'
}, {
  id: 2,
  day: '18',
  month: 'Jan',
  title: 'Physics Lab Report',
  subject: 'Physics',
  time: '10:00 AM',
  type: 'Lab Report',
  priority: 'medium'
}, {
  id: 3,
  day: '20',
  month: 'Jan',
  title: 'Chemistry Midterm',
  subject: 'Chemistry',
  time: '02:00 PM',
  type: 'Exam',
  priority: 'high'
}, {
  id: 4,
  day: '22',
  month: 'Jan',
  title: 'Biology Research Paper',
  subject: 'Biology',
  time: '11:59 PM',
  type: 'Research',
  priority: 'high'
}, {
  id: 5,
  day: '25',
  month: 'Jan',
  title: 'History Essay',
  subject: 'History',
  time: '08:00 AM',
  type: 'Essay',
  priority: 'medium'
}];

const UpcomingAssignments = () => {
  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'high': return 'border-l-red-500 bg-red-50';
      case 'medium': return 'border-l-yellow-500 bg-yellow-50';
      default: return 'border-l-blue-500 bg-blue-50';
    }
  };

  const getTypeColor = (type) => {
    switch (type) {
      case 'Exam': return 'text-red-600 bg-red-100';
      case 'Assignment': return 'text-blue-600 bg-blue-100';
      case 'Lab Report': return 'text-green-600 bg-green-100';
      case 'Research': return 'text-purple-600 bg-purple-100';
      case 'Essay': return 'text-orange-600 bg-orange-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  return <div className="card">
      <div className="card-header">
        <h6 className="card-title">Upcoming Assignments & Exams</h6>
      </div>
      <div className="card-body">
        <div className="space-y-4">
          {assignments.map((assignment) => (
            <div key={assignment.id} className={`flex items-center justify-between p-4 rounded-lg border-l-4 ${getPriorityColor(assignment.priority)}`}>
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center shadow-sm">
                    <LuCalendar className="w-6 h-6 text-gray-600" />
                  </div>
                </div>
                <div>
                  <h6 className="text-sm font-medium text-gray-900">{assignment.title}</h6>
                  <p className="text-sm text-gray-500">{assignment.subject}</p>
                  <div className="flex items-center space-x-2 mt-1">
                    <LuClock className="w-4 h-4 text-gray-400" />
                    <span className="text-xs text-gray-500">{assignment.time}</span>
                    <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium ${getTypeColor(assignment.type)}`}>
                      {assignment.type}
                    </span>
                  </div>
                </div>
              </div>
              <div className="text-right">
                <div className="text-lg font-semibold text-gray-900">{assignment.day}</div>
                <div className="text-sm text-gray-500">{assignment.month}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>;
};

export default UpcomingAssignments;