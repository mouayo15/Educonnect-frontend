import { useState } from 'react';
import { Dashboard } from './Dashboard';
import { CoursePage } from './CoursePage';
import { ExercisePage } from './ExercisePage';
import { QuizPage } from './QuizPage';
import { ProfilePage } from './ProfilePage';

const StudentDashboard = () => {
  const [currentPage, setCurrentPage] = useState('dashboard');

  const handleNavigate = (page) => {
    setCurrentPage(page);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'dashboard':
        return <Dashboard onNavigate={handleNavigate} />;
      case 'cours':
        return <CoursePage onNavigate={handleNavigate} />;
      case 'exercices':
        return <ExercisePage onNavigate={handleNavigate} />;
      case 'quiz':
        return <QuizPage onNavigate={handleNavigate} />;
      case 'profil':
        return <ProfilePage onNavigate={handleNavigate} />;
      default:
        return <Dashboard onNavigate={handleNavigate} />;
    }
  };

  return renderPage();
};

export default StudentDashboard;