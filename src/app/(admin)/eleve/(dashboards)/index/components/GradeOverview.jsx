const GradeOverview = () => {
  const gradeStats = {
    gpa: 3.7,
    totalCourses: 24,
    completedCourses: 18,
    currentSemester: 'Spring 2024'
  };

  const gradeDistribution = [
    { grade: 'A', count: 8, percentage: 44, color: 'bg-green-500' },
    { grade: 'B', count: 6, percentage: 33, color: 'bg-blue-500' },
    { grade: 'C', count: 3, percentage: 17, color: 'bg-yellow-500' },
    { grade: 'D', count: 1, percentage: 6, color: 'bg-orange-500' }
  ];

  return <div className="card mb-5">
      <div className="card-header">
        <h6 className="card-title">Grade Overview</h6>
      </div>
      <div className="card-body">
        <div className="grid grid-cols-2 gap-6 mb-6">
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-1">{gradeStats.gpa}</div>
            <div className="text-sm text-default-500">Current GPA</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-600 mb-1">{gradeStats.completedCourses}/{gradeStats.totalCourses}</div>
            <div className="text-sm text-default-500">Courses Completed</div>
          </div>
        </div>

        <div className="space-y-3">
          <h6 className="text-sm font-medium text-default-700">Grade Distribution</h6>
          {gradeDistribution.map((item) => (
            <div key={item.grade} className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <span className="text-sm font-medium text-default-700 w-6">{item.grade}</span>
                <div className="flex-1 bg-default-200 rounded-full h-2 w-24">
                  <div
                    className={`h-2 rounded-full ${item.color}`}
                    style={{ width: `${item.percentage}%` }}
                  ></div>
                </div>
              </div>
              <span className="text-sm text-default-500 ml-2">{item.count} ({item.percentage}%)</span>
            </div>
          ))}
        </div>

        <div className="mt-4 pt-4 border-t border-default-200">
          <div className="text-center">
            <div className="text-sm text-default-500">{gradeStats.currentSemester}</div>
            <div className="text-xs text-default-400">Current Semester</div>
          </div>
        </div>
      </div>
    </div>;
};

export default GradeOverview;