import { motion } from "framer-motion";
import {
  Satellite,
  Globe as Globe2,
  Eye,
  TrendingUp,
  Zap,
  Database,
  Pyramid,
} from "lucide-react";

interface LandingPageProps {
  onNavigate: (page: string) => void;
}

export default function LandingPage({ onNavigate }: LandingPageProps) {
  const features = [
    {
      icon: <Eye className="w-8 h-8" />,
      title: "25 Years of Observation",
      description: "Continuous Earth monitoring since 1999",
    },
    {
      icon: <Globe2 className="w-8 h-8" />,
      title: "Global Coverage",
      description: "Complete Earth scan every 1-2 days",
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "5 Advanced Instruments",
      description: "MODIS, ASTER, CERES, MISR, MOPITT",
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Climate Insights",
      description: "Track environmental changes over time",
    },
  ];

  const stats = [
    { value: "25", label: "Years in Orbit" },
    { value: "705", label: "km Altitude" },
    { value: "36", label: "Spectral Bands" },
    { value: "∞", label: "Discoveries" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-blue-950 to-black text-white">
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/2166711/pexels-photo-2166711.jpeg?auto=compress&cs=tinysrgb&w=1920')] bg-cover bg-center opacity-20"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="inline-block mb-6"
            >
              <Satellite className="w-20 h-20 text-red-600" />
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-red-500 to-blue-400 bg-clip-text text-transparent">
              NASA TERRA MISSION
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 mb-4 max-w-3xl mx-auto">
              25 Years of Pioneering Earth Observation
            </p>

            <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
              Launched in 1999, Terra has revolutionized our understanding of
              Earth's climate, oceans, atmosphere, and ecosystems through
              cutting-edge satellite technology.
            </p>

            <div className="flex flex-wrap justify-center gap-4 mb-16">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => onNavigate("videos")}
                className="px-8 py-4 bg-red-600 hover:bg-red-700 rounded-lg font-semibold text-lg transition-colors flex items-center gap-2 shadow-lg shadow-red-500/20"
              >
                <Zap className="w-5 h-5" />
                Watch Videos
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => onNavigate("quiz")}
                className="px-8 py-4 bg-slate-700 hover:bg-slate-600 rounded-lg font-semibold text-lg transition-colors flex items-center gap-2"
              >
                <Pyramid className="w-5 h-5" />
                Take Quiz
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => onNavigate("decisions")}
                className="px-8 py-4 bg-indigo-700 hover:bg-indigo-600 rounded-lg font-semibold text-lg transition-colors flex items-center gap-2"
              >
                <Satellite className="w-5 h-5" />
                Terra Simulations
              </motion.button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 + index * 0.1 }}
                className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-lg border border-red-600/30"
              >
                <div className="text-4xl md:text-5xl font-bold text-red-600 mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Mission Capabilities
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="p-6 bg-gradient-to-br from-blue-900/30 to-black/30 backdrop-blur-sm rounded-lg border border-blue-500/30 hover:border-red-500/50 transition-all"
                >
                  <div className="text-red-600 mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="mt-20 text-center"
          >
            <div className="max-w-4xl mx-auto p-8 bg-gradient-to-r from-blue-900/20 via-red-900/20 to-blue-900/20 rounded-lg border border-red-600/30">
              <h3 className="text-2xl font-bold mb-4">
                About the Terra Mission
              </h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                Terra is the flagship Earth observing satellite of NASA's Earth
                Observing System (EOS). Its five state-of-the-art sensors work
                together to provide unprecedented data about Earth's atmosphere,
                land, oceans, and the interactions between them.
              </p>
              <p className="text-gray-300 leading-relaxed">
                The data collected by Terra has been instrumental in
                understanding climate change, tracking deforestation, monitoring
                natural disasters, and advancing our knowledge of Earth's
                complex systems.
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      <footer className="bg-black/50 border-t border-red-600/30 py-6">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-gray-400 text-sm">
            © 2025 Iron Space – Inspired by NASA Terra Data ·{" "}
            <a
              href="https://github.com/VicoKev/earth-insights"
              target="_blank"
              rel="noopener noreferrer"
              className="text-red-500 hover:text-red-400 transition"
            >
              GitHub
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}
