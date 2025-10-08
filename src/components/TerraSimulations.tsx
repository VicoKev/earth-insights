import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Satellite, ArrowRight, RotateCcw, Trophy, Star, ChevronRight, BookOpen, Zap, MessageCircle, Award } from 'lucide-react';
import { terraMissions, Mission } from '../data/terraMissions';
import * as Icons from 'lucide-react';

interface MissionProgress {
  missionId: string;
  currentStep: number;
  choices: string[];
  completed: boolean;
}

export default function TerraSimulations() {
  const [selectedMission, setSelectedMission] = useState<Mission | null>(null);
  const [progress, setProgress] = useState<MissionProgress | null>(null);
  const [showResults, setShowResults] = useState(false);
  const [totalMissionsCompleted, setTotalMissionsCompleted] = useState(0);

  const getIcon = (iconName: string, className: string = 'w-6 h-6') => {
    const IconComponent = Icons[iconName as keyof typeof Icons] as any;
    return IconComponent ? <IconComponent className={className} /> : <Satellite className={className} />;
  };

  const startMission = (mission: Mission) => {
    setSelectedMission(mission);
    setProgress({ missionId: mission.id, currentStep: 0, choices: [], completed: false });
    setShowResults(false);
  };

  const makeChoice = (choiceId: string) => {
    if (!progress || !selectedMission) return;
    const newChoices = [...progress.choices, choiceId];
    const nextStep = progress.currentStep + 1;

    if (nextStep >= selectedMission.steps.length) {
      setProgress({ ...progress, choices: newChoices, completed: true });
      setShowResults(true);
      setTotalMissionsCompleted(totalMissionsCompleted + 1);
    } else {
      setProgress({ ...progress, currentStep: nextStep, choices: newChoices });
    }
  };

  const resetMission = () => {
    setSelectedMission(null);
    setProgress(null);
    setShowResults(false);
  };

  const retryMission = () => {
    if (selectedMission) startMission(selectedMission);
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'beginner': return 'text-green-400 border-green-500 bg-green-900/30';
      case 'intermediate': return 'text-yellow-400 border-yellow-500 bg-yellow-900/30';
      case 'advanced': return 'text-red-400 border-red-500 bg-red-900/30';
      default: return 'text-gray-400 border-gray-500 bg-gray-900/30';
    }
  };

  const getRatingColor = (rating: string) => {
    switch (rating) {
      case 'excellent': return 'text-green-400';
      case 'good': return 'text-blue-400';
      case 'moderate': return 'text-yellow-400';
      default: return 'text-orange-400';
    }
  };

  const getImpactLevelColor = (level: string) => {
    switch (level) {
      case 'optimal': return 'text-green-400 border-green-500';
      case 'good': return 'text-blue-400 border-blue-500';
      case 'adequate': return 'text-yellow-400 border-yellow-500';
      default: return 'text-orange-400 border-orange-500';
    }
  };

  if (showResults && progress && selectedMission) {
    const results = selectedMission.calculateResults(progress.choices);

    return (
      <div className="min-h-screen bg-gradient-to-b from-black via-blue-950 to-black text-white pt-20 sm:pt-24 pb-8 sm:pb-12">
        <div className="max-w-6xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-center mb-6 sm:mb-8">
            <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: 'spring', duration: 0.6 }}>
              <Trophy className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 text-yellow-500 mx-auto mb-3 sm:mb-4" />
            </motion.div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4">Mission Complete!</h1>
            <div className="inline-flex flex-wrap items-center justify-center gap-2 sm:gap-3 px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 bg-black/60 backdrop-blur-sm rounded-full border-2 border-red-600/50">
              <Award className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-500" />
              <span className="text-gray-400 text-sm sm:text-base md:text-lg">Final Rating:</span>
              <span className={`text-xl sm:text-2xl md:text-3xl font-bold uppercase ${getRatingColor(results.rating)}`}>
                {results.rating === 'excellent' ? 'Excellent' : results.rating === 'good' ? 'Good' : results.rating === 'moderate' ? 'Moderate' : 'Needs Work'}
              </span>
              <div className="flex gap-0.5 sm:gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className={`w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 ${i < (results.rating === 'excellent' ? 5 : results.rating === 'good' ? 4 : results.rating === 'moderate' ? 3 : 2) ? 'fill-yellow-500 text-yellow-500' : 'text-gray-600'}`} />
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="mb-6 sm:mb-8">
            <div className="relative aspect-video rounded-lg sm:rounded-xl overflow-hidden mb-4 sm:mb-6 border-2 border-red-600/40 shadow-2xl">
              <img src={results.overallImpact.image} alt={results.overallImpact.title} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 md:p-8">
                <motion.h2 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-3">{results.overallImpact.title}</motion.h2>
                <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }} className="text-base sm:text-lg md:text-xl text-gray-200">{results.overallImpact.description}</motion.p>
              </div>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8">
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.7 }} className="bg-gradient-to-br from-blue-900/50 to-black/50 backdrop-blur-sm rounded-lg sm:rounded-xl border border-blue-500/40 p-4 sm:p-6 shadow-lg">
              <div className="text-blue-400 mb-2 sm:mb-3"><Zap className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12" /></div>
              <div className="text-3xl sm:text-4xl font-bold mb-1">{results.totalScore}</div>
              <div className="text-xs sm:text-sm text-gray-400 uppercase tracking-wide">Mission Points</div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.8 }} className="bg-gradient-to-br from-green-900/50 to-black/50 backdrop-blur-sm rounded-lg sm:rounded-xl border border-green-500/40 p-4 sm:p-6 shadow-lg">
              <div className="text-green-400 mb-2 sm:mb-3"><Star className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12" /></div>
              <div className="text-3xl sm:text-4xl font-bold mb-1">{progress.choices.length}/{selectedMission.steps.length}</div>
              <div className="text-xs sm:text-sm text-gray-400 uppercase tracking-wide">Decisions Made</div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.9 }} className="bg-gradient-to-br from-purple-900/50 to-black/50 backdrop-blur-sm rounded-lg sm:rounded-xl border border-purple-500/40 p-4 sm:p-6 shadow-lg">
              <div className="text-purple-400 mb-2 sm:mb-3"><BookOpen className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12" /></div>
              <div className="text-3xl sm:text-4xl font-bold mb-1">{results.keyInsights.length}</div>
              <div className="text-xs sm:text-sm text-gray-400 uppercase tracking-wide">Scientific Insights</div>
            </motion.div>
          </div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1 }} className="bg-black/50 backdrop-blur-sm rounded-lg sm:rounded-xl border border-blue-500/40 p-4 sm:p-6 md:p-8 mb-6 sm:mb-8 shadow-lg">
            <div className="flex flex-col sm:flex-row items-start gap-3 sm:gap-4 mb-4 sm:mb-6">
              <MessageCircle className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-blue-400 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-blue-300">Environmental Impact Summary</h3>
                <p className="text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed">{results.environmentalSummary}</p>
              </div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.1 }} className="bg-black/50 backdrop-blur-sm rounded-lg sm:rounded-xl border border-red-500/40 p-4 sm:p-6 md:p-8 mb-6 sm:mb-8 shadow-lg">
            <h3 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 flex items-center gap-2 sm:gap-3">
              <ChevronRight className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-red-600" />
              Your Decision Timeline
            </h3>

            <div className="space-y-4 sm:space-y-6">
              {results.detailedResults.map((result, index) => (
                <motion.div key={index} initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 1.2 + index * 0.1 }} className="relative pl-8 sm:pl-10 md:pl-12 pb-6 sm:pb-8 border-l-2 sm:border-l-4 border-red-600/50 last:border-l-0 last:pb-0">
                  <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 1.3 + index * 0.1, type: 'spring' }} className="absolute left-0 top-0 -translate-x-1/2 w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 bg-gradient-to-br from-red-600 to-red-800 rounded-full flex items-center justify-center text-sm sm:text-base md:text-lg font-bold shadow-lg">
                    {result.stepNumber}
                  </motion.div>

                  <div className="bg-gradient-to-br from-blue-900/30 to-purple-900/30 rounded-lg sm:rounded-xl p-4 sm:p-5 md:p-6 border border-blue-500/30 shadow-md">
                    <h4 className="font-semibold text-base sm:text-lg md:text-xl mb-2 sm:mb-3 text-blue-300">{result.chosenAction}</h4>

                    <div className="space-y-2 sm:space-y-3">
                      <div className="bg-black/40 rounded p-3 sm:p-4">
                        <div className="text-xs uppercase tracking-wide text-gray-500 mb-1">Immediate Effect</div>
                        <p className="text-sm sm:text-base text-gray-200">{result.immediateEffect}</p>
                      </div>

                      <div className="bg-black/40 rounded p-3 sm:p-4">
                        <div className="text-xs uppercase tracking-wide text-gray-500 mb-1">Long-Term Consequence</div>
                        <p className="text-sm sm:text-base text-gray-200">{result.longTermConsequence}</p>
                      </div>

                      <div className="flex items-start gap-2 sm:gap-3 bg-blue-900/30 border border-blue-500/30 rounded p-3 sm:p-4">
                        <Satellite className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                        <div>
                          <div className="text-xs uppercase tracking-wide text-blue-400 mb-1">Scientific Insight</div>
                          <p className="text-sm sm:text-base text-gray-300 italic">{result.scientificInsight}</p>
                        </div>
                      </div>

                      <div className="flex items-center justify-end gap-2 pt-2">
                        <span className="text-xs sm:text-sm text-gray-400">Points:</span>
                        <span className="text-xl sm:text-2xl font-bold text-green-400">+{result.points}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.8 }} className="bg-gradient-to-r from-blue-900/40 via-purple-900/40 to-blue-900/40 backdrop-blur-sm rounded-lg sm:rounded-xl border border-yellow-500/40 p-4 sm:p-6 md:p-8 mb-6 sm:mb-8 shadow-lg">
            <h3 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 flex items-center gap-2 sm:gap-3">
              <BookOpen className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-yellow-500" />
              Key Scientific Insights
            </h3>

            <ul className="space-y-3 sm:space-y-4">
              {results.keyInsights.map((insight, index) => (
                <motion.li key={index} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 1.9 + index * 0.1 }} className="flex items-start gap-3 sm:gap-4 bg-black/40 rounded p-3 sm:p-4">
                  <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-red-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm sm:text-base md:text-lg text-gray-200">{insight}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            <motion.button initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 2.2 }} whileHover={{ scale: 1.03, y: -2 }} whileTap={{ scale: 0.98 }} onClick={retryMission} className="px-6 sm:px-8 py-4 sm:py-5 bg-gradient-to-r from-yellow-600 to-yellow-700 hover:from-yellow-700 hover:to-yellow-800 rounded-lg sm:rounded-xl font-bold text-base sm:text-lg transition-all flex items-center justify-center gap-2 sm:gap-3 shadow-lg">
              <RotateCcw className="w-5 h-5 sm:w-6 sm:h-6" />
              Retry Mission
            </motion.button>

            <motion.button initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 2.3 }} whileHover={{ scale: 1.03, y: -2 }} whileTap={{ scale: 0.98 }} onClick={resetMission} className="px-6 sm:px-8 py-4 sm:py-5 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 rounded-lg sm:rounded-xl font-bold text-base sm:text-lg transition-all flex items-center justify-center gap-2 sm:gap-3 shadow-lg">
              <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6" />
              New Mission
            </motion.button>
          </div>
        </div>

        <footer className="max-w-7xl mx-auto px-4 mt-12 sm:mt-16 pt-6 sm:pt-8 border-t border-red-600/30">
          <p className="text-center text-gray-400 text-xs sm:text-sm">© 2025 Iron Space – Powered by NASA Terra Data</p>
        </footer>
      </div>
    );
  }

  if (selectedMission && progress && !showResults) {
    const currentStepData = selectedMission.steps[progress.currentStep];
    const progressPercentage = ((progress.currentStep + 1) / selectedMission.steps.length) * 100;

    return (
      <div className="min-h-screen bg-gradient-to-b from-black via-blue-950 to-black text-white pt-20 sm:pt-24 pb-8 sm:pb-12">
        <div className="max-w-5xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-4 sm:mb-6">
            <div className="flex items-center justify-between mb-3 sm:mb-4">
              <div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold">{selectedMission.title}</h2>
                <p className="text-gray-400 text-sm sm:text-base md:text-lg">{currentStepData.month} - Step {currentStepData.stepNumber} of {selectedMission.steps.length}</p>
              </div>
              <button onClick={resetMission} className="text-gray-400 hover:text-white transition-colors p-1.5 sm:p-2 hover:bg-white/10 rounded-lg">
                <RotateCcw className="w-6 h-6 sm:w-7 sm:h-7" />
              </button>
            </div>

            <div className="w-full bg-gray-800 rounded-full h-2 sm:h-3 overflow-hidden shadow-inner">
              <motion.div initial={{ width: 0 }} animate={{ width: `${progressPercentage}%` }} className="h-full bg-gradient-to-r from-blue-600 via-purple-600 to-red-600 shadow-lg" transition={{ duration: 0.6, ease: 'easeOut' }} />
            </div>
            <div className="flex justify-between text-xs sm:text-sm text-gray-500 mt-1 sm:mt-2">
              <span>Progress</span>
              <span>{Math.round(progressPercentage)}%</span>
            </div>
          </motion.div>

          <AnimatePresence mode="wait">
            <motion.div key={currentStepData.stepNumber} initial={{ opacity: 0, x: 100, scale: 0.95 }} animate={{ opacity: 1, x: 0, scale: 1 }} exit={{ opacity: 0, x: -100, scale: 0.95 }} transition={{ duration: 0.5, ease: 'easeOut' }}>
              <div className="relative aspect-video rounded-lg sm:rounded-xl overflow-hidden mb-4 sm:mb-6 border-2 border-red-600/40 shadow-2xl">
                <motion.img initial={{ scale: 1.2, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.8 }} src={currentStepData.image} alt={`Step ${currentStepData.stepNumber}`} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
                <motion.div initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ delay: 0.3, type: 'spring' }} className="absolute top-3 left-3 sm:top-4 sm:left-4">
                  <div className="px-4 sm:px-5 md:px-6 py-2 sm:py-3 bg-red-600/95 backdrop-blur-sm rounded-full font-bold text-sm sm:text-base md:text-lg shadow-lg">
                    {currentStepData.month}
                  </div>
                </motion.div>
              </div>

              <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="bg-black/50 backdrop-blur-sm rounded-lg sm:rounded-xl border border-blue-500/40 p-4 sm:p-6 md:p-8 mb-4 sm:mb-6 shadow-lg">
                <div className="flex flex-col sm:flex-row items-start gap-3 sm:gap-4 md:gap-5 mb-4 sm:mb-6">
                  <Satellite className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 text-red-600 flex-shrink-0 mt-1 sm:mt-2" />
                  <div className="flex-1">
                    <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3 md:mb-4 text-blue-300">Observed Situation</h3>
                    <p className="text-sm sm:text-base md:text-lg text-gray-200 leading-relaxed mb-4 sm:mb-6">{currentStepData.situation}</p>

                    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} className="flex items-start gap-3 sm:gap-4 bg-gradient-to-r from-blue-900/40 to-purple-900/40 border-l-4 border-blue-500 rounded p-3 sm:p-4 md:p-5">
                      <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400 flex-shrink-0 mt-0.5 sm:mt-1" />
                      <div>
                        <p className="text-xs sm:text-sm font-bold text-blue-300 mb-1 sm:mb-2 uppercase tracking-wide">Mission Control:</p>
                        <p className="text-sm sm:text-base md:text-lg text-gray-200 italic leading-relaxed">&ldquo;{currentStepData.guideComment}&rdquo;</p>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6 text-center">Choose Your Action</h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 md:gap-5">
                  {currentStepData.choices.map((choice, index) => (
                    <motion.button key={choice.id} initial={{ opacity: 0, y: 30, scale: 0.9 }} animate={{ opacity: 1, y: 0, scale: 1 }} transition={{ delay: 0.6 + index * 0.1, type: 'spring' }} whileHover={{ scale: 1.06, y: -10 }} whileTap={{ scale: 0.97 }} onClick={() => makeChoice(choice.id)} className="group bg-gradient-to-br from-blue-900/50 to-black/50 backdrop-blur-sm rounded-lg sm:rounded-xl border-2 border-blue-500/40 hover:border-red-500/70 transition-all p-4 sm:p-5 md:p-6 text-left shadow-lg hover:shadow-2xl">
                      <div className="text-red-600 mb-3 sm:mb-4 md:mb-5 group-hover:scale-125 transition-transform duration-300">
                        {getIcon(choice.icon, 'w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10')}
                      </div>
                      <h4 className="text-base sm:text-lg font-bold mb-3 sm:mb-4 group-hover:text-red-400 transition-colors leading-snug min-h-[48px] sm:min-h-[56px] md:min-h-[60px]">
                        {choice.text}
                      </h4>
                      <div className="pt-3 sm:pt-4 border-t border-gray-700">
                        <div className="text-xs text-gray-500 uppercase tracking-wide mb-1 sm:mb-2 font-semibold">Scientific Value</div>
                        <div className={`inline-flex items-center gap-1 sm:gap-2 px-2 sm:px-3 py-1 rounded-full border text-xs sm:text-sm font-bold ${getImpactLevelColor(choice.impactLevel)}`}>
                          <span className="w-2 h-2 rounded-full bg-current"></span>
                          {choice.impactLevel === 'optimal' ? 'Optimal' : choice.impactLevel === 'good' ? 'Good' : choice.impactLevel === 'adequate' ? 'Adequate' : 'Suboptimal'}
                        </div>
                      </div>
                    </motion.button>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>

        <footer className="max-w-7xl mx-auto px-4 mt-12 sm:mt-16 pt-6 sm:pt-8 border-t border-red-600/30">
          <p className="text-center text-gray-400 text-xs sm:text-sm">© 2025 Iron Space – Powered by NASA Terra Data</p>
        </footer>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-blue-950 to-black text-white pt-20 sm:pt-24 pb-8 sm:pb-12">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12 sm:mb-16">
          <motion.div animate={{ rotate: 360 }} transition={{ duration: 25, repeat: Infinity, ease: 'linear' }} className="inline-block mb-6 sm:mb-8">
            <Satellite className="w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 text-red-600" />
          </motion.div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-red-600 bg-clip-text text-transparent px-4">
            Terra Simulations
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-3 sm:mb-4 leading-relaxed px-4">
            Step into the role of a Terra satellite researcher. Make strategic observation decisions across critical environmental scenarios.
          </p>
          <p className="text-base sm:text-lg text-gray-500 max-w-3xl mx-auto leading-relaxed px-4">
            Each mission contains <span className="text-red-400 font-semibold">5 consecutive decisions</span>.
            Your choices accumulate throughout the mission. <span className="text-blue-400 font-semibold">Full consequences are only revealed at the end</span> - discover the global impact of your decisions.
          </p>

          {totalMissionsCompleted > 0 && (
            <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} className="inline-flex items-center gap-2 sm:gap-3 mt-6 sm:mt-8 px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-green-900/40 to-blue-900/40 border-2 border-green-500/40 rounded-full shadow-lg">
              <Trophy className="w-6 h-6 sm:w-7 sm:h-7 text-yellow-500" />
              <span className="text-green-300 font-bold text-lg sm:text-xl">
                {totalMissionsCompleted} Mission{totalMissionsCompleted > 1 ? 's' : ''} Completed
              </span>
            </motion.div>
          )}
        </motion.div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-center">Select Your Mission</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {terraMissions.map((mission, index) => (
              <motion.div key={mission.id} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 + index * 0.15 }} whileHover={{ scale: 1.03, y: -8 }} className="cursor-pointer group" onClick={() => startMission(mission)}>
                <div className="relative overflow-hidden rounded-lg sm:rounded-xl bg-black/50 border-2 border-blue-500/40 hover:border-red-500/60 transition-all shadow-xl hover:shadow-2xl">
                  <div className="relative aspect-video overflow-hidden">
                    <img src={mission.coverImage} alt={mission.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent"></div>

                    <div className="absolute top-3 left-3 sm:top-4 sm:left-4 flex flex-wrap gap-2">
                      <div className="px-3 sm:px-4 py-1.5 sm:py-2 bg-blue-600/95 backdrop-blur-sm rounded-full text-xs sm:text-sm font-bold shadow-lg">
                        {mission.theme}
                      </div>
                      <div className={`px-3 sm:px-4 py-1.5 sm:py-2 backdrop-blur-sm rounded-full text-xs sm:text-sm font-bold border-2 shadow-lg ${getDifficultyColor(mission.difficulty)}`}>
                        {mission.difficulty === 'beginner' ? 'Beginner' : mission.difficulty === 'intermediate' ? 'Intermediate' : 'Advanced'}
                      </div>
                    </div>

                    <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4">
                      <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-1 sm:mb-2 group-hover:text-red-400 transition-colors drop-shadow-lg">
                        {mission.title}
                      </h3>
                    </div>
                  </div>

                  <div className="p-4 sm:p-5 md:p-6">
                    <p className="text-sm sm:text-base text-gray-400 mb-4 sm:mb-5 leading-relaxed">{mission.description}</p>

                    <div className="flex items-center justify-between text-xs sm:text-sm mb-4 sm:mb-5">
                      <div className="flex items-center gap-3 sm:gap-5">
                        <span className="text-gray-500 flex items-center gap-1.5 sm:gap-2">
                          <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-red-600" />
                          <span className="font-semibold">{mission.steps.length} decisions</span>
                        </span>
                        <span className="text-gray-500 flex items-center gap-1.5 sm:gap-2">
                          <BookOpen className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600" />
                          <span className="font-semibold">{mission.duration}</span>
                        </span>
                      </div>
                    </div>

                    <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 border border-blue-500/40 rounded p-3 sm:p-4 md:p-5 mb-4 sm:mb-5">
                      <div className="flex items-start gap-2 sm:gap-3 text-xs sm:text-sm">
                        <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                        <p className="text-gray-300 italic leading-relaxed">&ldquo;{mission.guideIntro}&rdquo;</p>
                      </div>
                    </div>

                    <button className="w-full px-4 sm:px-6 py-3 sm:py-4 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 rounded-lg sm:rounded-xl font-bold text-base sm:text-lg transition-all flex items-center justify-center gap-2 sm:gap-3 group-hover:shadow-lg">
                      Start Mission
                      <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-2 transition-transform" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      <footer className="max-w-7xl mx-auto px-4 mt-12 sm:mt-16 pt-6 sm:pt-8 border-t border-red-600/30">
        <p className="text-center text-gray-400 text-xs sm:text-sm">© 2025 Iron Space – Powered by NASA Terra Data</p>
      </footer>
    </div>
  );
}
