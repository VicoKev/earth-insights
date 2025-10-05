import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Brain, Trophy, ArrowRight, RotateCcw, Award } from 'lucide-react';
import { quizThemes } from '../data/quizzes';
import { QuizTheme, LeaderboardEntry } from '../types';
import * as Icons from 'lucide-react';

export default function Quiz() {
  const [selectedTheme, setSelectedTheme] = useState<QuizTheme | null>(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [score, setScore] = useState(0);
  const [quizComplete, setQuizComplete] = useState(false);
  const [userName, setUserName] = useState('');
  const [showLeaderboard, setShowLeaderboard] = useState(false);

  const getIcon = (iconName: string) => {
    const IconComponent = Icons[iconName as keyof typeof Icons] as any;
    return IconComponent ? <IconComponent className="w-8 h-8" /> : <Brain className="w-8 h-8" />;
  };

  const saveScore = (name: string, finalScore: number, theme: string) => {
    const leaderboard: LeaderboardEntry[] = JSON.parse(
      localStorage.getItem('earthInsightsLeaderboard') || '[]'
    );

    leaderboard.push({
      pseudo: name,
      score: finalScore,
      theme: theme,
      date: Date.now()
    });

    leaderboard.sort((a, b) => b.score - a.score);
    localStorage.setItem('earthInsightsLeaderboard', JSON.stringify(leaderboard));
  };

  const getLeaderboard = (): LeaderboardEntry[] => {
    return JSON.parse(localStorage.getItem('earthInsightsLeaderboard') || '[]');
  };

  const handleAnswerSelect = (answerIndex: number) => {
    if (selectedAnswer !== null) return;

    setSelectedAnswer(answerIndex);
    setShowExplanation(true);

    if (selectedTheme && answerIndex === selectedTheme.questions[currentQuestionIndex].correctAnswer) {
      setScore(score + 1);
    }
  };

  const handleNextQuestion = () => {
    if (!selectedTheme) return;

    if (currentQuestionIndex < selectedTheme.questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedAnswer(null);
      setShowExplanation(false);
    } else {
      setQuizComplete(true);
    }
  };

  const handleSaveScore = () => {
    if (userName.trim() && selectedTheme) {
      saveScore(userName.trim(), score, selectedTheme.title);
      setShowLeaderboard(true);
    }
  };

  const resetQuiz = () => {
    setSelectedTheme(null);
    setCurrentQuestionIndex(0);
    setSelectedAnswer(null);
    setShowExplanation(false);
    setScore(0);
    setQuizComplete(false);
    setUserName('');
    setShowLeaderboard(false);
  };

  if (showLeaderboard) {
    const leaderboard = getLeaderboard();

    return (
      <div className="min-h-screen bg-gradient-to-b from-black via-blue-950 to-black text-white pt-24 pb-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-8"
          >
            <Trophy className="w-16 h-16 text-yellow-500 mx-auto mb-4" />
            <h1 className="text-4xl font-bold mb-2">Leaderboard</h1>
            <p className="text-gray-400">Top Earth Insights Explorers</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-black/40 backdrop-blur-sm rounded-lg border border-red-600/30 p-6 mb-6"
          >
            <div className="space-y-3">
              {leaderboard.slice(0, 10).map((entry, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className={`flex items-center justify-between p-4 rounded-lg ${
                    index === 0
                      ? 'bg-yellow-900/30 border border-yellow-500/50'
                      : index === 1
                      ? 'bg-gray-700/30 border border-gray-500/50'
                      : index === 2
                      ? 'bg-orange-900/30 border border-orange-700/50'
                      : 'bg-blue-900/20 border border-blue-500/30'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div className="text-2xl font-bold w-8">
                      {index === 0 ? '🥇' : index === 1 ? '🥈' : index === 2 ? '🥉' : `#${index + 1}`}
                    </div>
                    <div>
                      <div className="font-semibold">{entry.pseudo}</div>
                      <div className="text-sm text-gray-400">{entry.theme}</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-red-600">{entry.score}</div>
                    <div className="text-xs text-gray-400">
                      {new Date(entry.date).toLocaleDateString()}
                    </div>
                  </div>
                </motion.div>
              ))}

              {leaderboard.length === 0 && (
                <p className="text-center text-gray-400 py-8">
                  No scores yet. Be the first to complete a quiz!
                </p>
              )}
            </div>
          </motion.div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={resetQuiz}
            className="w-full px-6 py-3 bg-red-600 hover:bg-red-700 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2"
          >
            <RotateCcw className="w-5 h-5" />
            Try Another Quiz
          </motion.button>
        </div>

        <footer className="max-w-7xl mx-auto px-4 mt-12 pt-8 border-t border-red-600/30">
          <p className="text-center text-gray-400 text-sm">
            © 2025 Iron Space – Inspired by NASA Terra Data
          </p>
        </footer>
      </div>
    );
  }

  if (quizComplete && selectedTheme) {
    const percentage = Math.round((score / selectedTheme.questions.length) * 100);

    return (
      <div className="min-h-screen bg-gradient-to-b from-black via-blue-950 to-black text-white pt-24 pb-12">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center"
          >
            <Award className="w-20 h-20 text-yellow-500 mx-auto mb-6" />
            <h1 className="text-4xl font-bold mb-4">Quiz Complete!</h1>

            <div className="bg-black/40 backdrop-blur-sm rounded-lg border border-red-600/30 p-8 mb-6">
              <div className="text-6xl font-bold text-red-600 mb-4">
                {score}/{selectedTheme.questions.length}
              </div>
              <div className="text-2xl text-gray-300 mb-2">{percentage}% Correct</div>
              <p className="text-gray-400">
                {percentage >= 80
                  ? 'Outstanding! You\'re an Earth science expert!'
                  : percentage >= 60
                  ? 'Great job! Keep exploring to learn more!'
                  : 'Good effort! Try again to improve your score!'}
              </p>
            </div>

            <div className="bg-black/40 backdrop-blur-sm rounded-lg border border-blue-500/30 p-6 mb-6">
              <h2 className="text-xl font-semibold mb-4">Save Your Score</h2>
              <input
                type="text"
                placeholder="Enter your name"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                className="w-full px-4 py-3 bg-black/60 border border-gray-600 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-red-600 mb-4"
                maxLength={20}
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleSaveScore}
                disabled={!userName.trim()}
                className="w-full px-6 py-3 bg-red-600 hover:bg-red-700 disabled:bg-gray-600 disabled:cursor-not-allowed rounded-lg font-semibold transition-colors flex items-center justify-center gap-2"
              >
                <Trophy className="w-5 h-5" />
                Save & View Leaderboard
              </motion.button>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={resetQuiz}
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2 mx-auto"
            >
              <RotateCcw className="w-5 h-5" />
              Try Another Quiz
            </motion.button>
          </motion.div>
        </div>
      </div>
    );
  }

  if (selectedTheme) {
    const question = selectedTheme.questions[currentQuestionIndex];
    const progress = ((currentQuestionIndex + 1) / selectedTheme.questions.length) * 100;

    return (
      <div className="min-h-screen bg-gradient-to-b from-black via-blue-950 to-black text-white pt-24 pb-12">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-bold">{selectedTheme.title}</h2>
              <div className="text-lg font-semibold">
                Question {currentQuestionIndex + 1}/{selectedTheme.questions.length}
              </div>
            </div>

            <div className="w-full bg-gray-800 rounded-full h-2 overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                className="h-full bg-gradient-to-r from-blue-600 to-red-600"
              />
            </div>

            <div className="text-right mt-2 text-gray-400">
              Score: {score}/{currentQuestionIndex + (showExplanation ? 1 : 0)}
            </div>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={currentQuestionIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="bg-black/40 backdrop-blur-sm rounded-lg border border-red-600/30 p-8 mb-6"
            >
              <h3 className="text-2xl font-semibold mb-6">{question.question}</h3>

              <div className="space-y-3">
                {question.options.map((option, index) => (
                  <motion.button
                    key={index}
                    whileHover={selectedAnswer === null ? { scale: 1.02 } : {}}
                    whileTap={selectedAnswer === null ? { scale: 0.98 } : {}}
                    onClick={() => handleAnswerSelect(index)}
                    disabled={selectedAnswer !== null}
                    className={`w-full p-4 rounded-lg text-left transition-all ${
                      selectedAnswer === null
                        ? 'bg-blue-900/30 hover:bg-blue-800/40 border border-blue-500/30'
                        : selectedAnswer === index
                        ? index === question.correctAnswer
                          ? 'bg-green-900/40 border-2 border-green-500'
                          : 'bg-red-900/40 border-2 border-red-500'
                        : index === question.correctAnswer
                        ? 'bg-green-900/40 border-2 border-green-500'
                        : 'bg-gray-800/30 border border-gray-600/30 opacity-50'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center font-semibold">
                        {String.fromCharCode(65 + index)}
                      </div>
                      <span>{option}</span>
                    </div>
                  </motion.button>
                ))}
              </div>

              {showExplanation && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-6 p-4 bg-blue-900/30 border border-blue-500/30 rounded-lg"
                >
                  <h4 className="font-semibold mb-2 text-blue-300">Explanation:</h4>
                  <p className="text-gray-300">{question.explanation}</p>
                </motion.div>
              )}
            </motion.div>
          </AnimatePresence>

          {showExplanation && (
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleNextQuestion}
              className="w-full px-6 py-4 bg-red-600 hover:bg-red-700 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2"
            >
              {currentQuestionIndex < selectedTheme.questions.length - 1 ? (
                <>
                  Next Question
                  <ArrowRight className="w-5 h-5" />
                </>
              ) : (
                <>
                  View Results
                  <Trophy className="w-5 h-5" />
                </>
              )}
            </motion.button>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-blue-950 to-black text-white pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <Brain className="w-16 h-16 text-red-600 mx-auto mb-4" />
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-red-600 bg-clip-text text-transparent">
            Test Your Knowledge
          </h1>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Challenge yourself with quizzes about Earth science, climate, and the environment
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {quizThemes.map((theme, index) => (
            <motion.div
              key={theme.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -8 }}
              onClick={() => setSelectedTheme(theme)}
              className="cursor-pointer bg-gradient-to-br from-blue-900/30 to-black/30 backdrop-blur-sm rounded-lg border border-blue-500/30 hover:border-red-500/50 transition-all p-6"
            >
              <div className="text-red-600 mb-4">{getIcon(theme.icon)}</div>
              <h3 className="text-xl font-semibold mb-2">{theme.title}</h3>
              <p className="text-gray-400 text-sm mb-4">{theme.description}</p>
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-500">{theme.questions.length} questions</span>
                <ArrowRight className="w-5 h-5 text-red-600" />
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-12 text-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setShowLeaderboard(true)}
            className="px-8 py-4 bg-yellow-600 hover:bg-yellow-700 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2 mx-auto"
          >
            <Trophy className="w-5 h-5" />
            View Leaderboard
          </motion.button>
        </motion.div>
      </div>

      <footer className="max-w-7xl mx-auto px-4 mt-12 pt-8 border-t border-red-600/30">
        <p className="text-center text-gray-400 text-sm">
          © 2025 Iron Space – Inspired by NASA Terra Data
        </p>
      </footer>
    </div>
  );
}
