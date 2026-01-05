import { useState } from 'react';
import { AppNav } from './AppNav';
import { ChevronRight, Play, CheckCircle, Lock, Star, Clock } from 'lucide-react';

export function CoursePage({ onNavigate }) {
  const [selectedSubject, setSelectedSubject] = useState('math');
  const [selectedChapter, setSelectedChapter] = useState(null);

  const subjects = [
    { id: 'math', name: 'Mathématiques', emoji: '🔢', color: 'bg-blue-500' },
    { id: 'french', name: 'Français', emoji: '📖', color: 'bg-purple-500' },
    { id: 'science', name: 'Sciences', emoji: '🔬', color: 'bg-green-500' },
    { id: 'history', name: 'Histoire', emoji: '🏛️', color: 'bg-orange-500' },
  ];

  const chapters = {
    math: [
      {
        id: 1,
        title: 'Les fractions',
        lessons: [
          { title: 'Qu\'est-ce qu\'une fraction ?', duration: '8 min', completed: true },
          { title: 'Additionner des fractions', duration: '12 min', completed: true },
          { title: 'Multiplier des fractions', duration: '10 min', completed: false },
          { title: 'Diviser des fractions', duration: '15 min', completed: false, locked: true },
        ],
        progress: 50,
      },
      {
        id: 2,
        title: 'Le théorème de Pythagore',
        lessons: [
          { title: 'Introduction au théorème', duration: '10 min', completed: true },
          { title: 'Calculer l\'hypoténuse', duration: '12 min', completed: false },
          { title: 'Exercices pratiques', duration: '20 min', completed: false },
        ],
        progress: 33,
      },
      {
        id: 3,
        title: 'Les pourcentages',
        lessons: [
          { title: 'Comprendre les pourcentages', duration: '8 min', completed: false },
          { title: 'Calculer un pourcentage', duration: '10 min', completed: false },
          { title: 'Augmentation et réduction', duration: '12 min', completed: false },
        ],
        progress: 0,
      },
    ],
  };

  const currentChapters = chapters[selectedSubject] || [];

  return (
    <div className="min-h-screen">
      <AppNav currentPage="cours" onNavigate={onNavigate} />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl text-gray-900 mb-2">📚 Mes cours</h1>
          <p className="text-gray-600">Choisis une matière et commence à apprendre !</p>
        </div>

        {/* Subject Tabs */}
        <div className="flex gap-3 mb-8 overflow-x-auto pb-2">
          {subjects.map((subject) => (
            <button
              key={subject.id}
              onClick={() => {
                setSelectedSubject(subject.id);
                setSelectedChapter(null);
              }}
              className={`flex-shrink-0 flex items-center gap-3 px-6 py-4 rounded-2xl transition-all ${
                selectedSubject === subject.id
                  ? `${subject.color} text-white shadow-lg scale-105`
                  : 'bg-white text-gray-700 hover:shadow-md'
              }`}
            >
              <span className="text-2xl">{subject.emoji}</span>
              <span>{subject.name}</span>
            </button>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Chapters List */}
          <div className="lg:col-span-1 space-y-4">
            <h2 className="text-xl text-gray-900 mb-4">📑 Chapitres</h2>
            {currentChapters.map((chapter) => (
              <button
                key={chapter.id}
                onClick={() => setSelectedChapter(chapter.id)}
                className={`w-full text-left p-5 rounded-2xl transition-all ${
                  selectedChapter === chapter.id
                    ? 'bg-gradient-to-br from-blue-500 to-purple-600 text-white shadow-lg'
                    : 'bg-white hover:shadow-md'
                }`}
              >
                <div className="flex items-start justify-between mb-3">
                  <h3 className={selectedChapter === chapter.id ? 'text-white' : 'text-gray-900'}>
                    {chapter.title}
                  </h3>
                  <ChevronRight className={`w-5 h-5 ${selectedChapter === chapter.id ? 'text-white' : 'text-gray-400'}`} />
                </div>
                
                <div className="flex items-center gap-2 mb-2">
                  <span className={`text-sm ${selectedChapter === chapter.id ? 'text-white' : 'text-gray-600'}`}>
                    {chapter.lessons.length} leçons
                  </span>
                </div>
                
                <div className="w-full bg-white/20 rounded-full h-2 overflow-hidden">
                  <div
                    className={`h-full rounded-full ${selectedChapter === chapter.id ? 'bg-white' : 'bg-blue-500'}`}
                    style={{ width: `${chapter.progress}%` }}
                  ></div>
                </div>
                <span className={`text-xs mt-1 block ${selectedChapter === chapter.id ? 'text-white' : 'text-gray-500'}`}>
                  {chapter.progress}% complété
                </span>
              </button>
            ))}
          </div>

          {/* Lessons Detail */}
          <div className="lg:col-span-2">
            {selectedChapter ? (
              <div className="bg-white rounded-2xl p-6 shadow-sm">
                <div className="mb-6">
                  <h2 className="text-2xl text-gray-900 mb-2">
                    {currentChapters.find(c => c.id === selectedChapter)?.title}
                  </h2>
                  <p className="text-gray-600">
                    {currentChapters.find(c => c.id === selectedChapter)?.lessons.length} leçons à découvrir
                  </p>
                </div>

                <div className="space-y-3">
                  {currentChapters.find(c => c.id === selectedChapter)?.lessons.map((lesson, index) => (
                    <div
                      key={index}
                      className={`p-5 rounded-xl border-2 transition-all ${
                        lesson.locked
                          ? 'border-gray-200 bg-gray-50 opacity-60'
                          : lesson.completed
                          ? 'border-green-200 bg-green-50 hover:shadow-md cursor-pointer'
                          : 'border-blue-200 bg-blue-50 hover:shadow-md cursor-pointer'
                      }`}
                    >
                      <div className="flex items-center gap-4">
                        <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                          lesson.locked
                            ? 'bg-gray-300'
                            : lesson.completed
                            ? 'bg-green-500'
                            : 'bg-blue-500'
                        }`}>
                          {lesson.locked ? (
                            <Lock className="w-6 h-6 text-white" />
                          ) : lesson.completed ? (
                            <CheckCircle className="w-6 h-6 text-white" />
                          ) : (
                            <Play className="w-6 h-6 text-white" />
                          )}
                        </div>
                        
                        <div className="flex-1">
                          <h4 className="text-gray-900 mb-1">{lesson.title}</h4>
                          <div className="flex items-center gap-3 text-sm text-gray-600">
                            <span className="flex items-center gap-1">
                              <Clock className="w-4 h-4" />
                              {lesson.duration}
                            </span>
                            {lesson.completed && (
                              <span className="flex items-center gap-1 text-green-600">
                                <Star className="w-4 h-4 fill-green-600" />
                                Terminé
                              </span>
                            )}
                            {lesson.locked && (
                              <span className="text-gray-500">🔒 Bloqué</span>
                            )}
                          </div>
                        </div>

                        {!lesson.locked && (
                          <button className={`px-4 py-2 rounded-lg transition-colors ${
                            lesson.completed
                              ? 'bg-green-500 text-white hover:bg-green-600'
                              : 'bg-blue-500 text-white hover:bg-blue-600'
                          }`}>
                            {lesson.completed ? 'Revoir' : 'Commencer'}
                          </button>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Chapter Summary */}
                <div className="mt-6 p-5 bg-gradient-to-br from-purple-100 to-pink-100 rounded-xl">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-2xl">💡</span>
                    <h3 className="text-gray-900">Astuce</h3>
                  </div>
                  <p className="text-gray-700">
                    N'oublie pas de faire les exercices après chaque leçon pour bien comprendre ! 
                    Tu peux aussi refaire les leçons autant de fois que tu veux.
                  </p>
                </div>
              </div>
            ) : (
              <div className="bg-white rounded-2xl p-12 shadow-sm text-center">
                <div className="text-6xl mb-4">📚</div>
                <h3 className="text-xl text-gray-900 mb-2">Choisis un chapitre</h3>
                <p className="text-gray-600">
                  Sélectionne un chapitre sur la gauche pour voir toutes les leçons
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
