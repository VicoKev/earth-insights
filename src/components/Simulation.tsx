import { motion } from "framer-motion";
import { Rocket, Clock, Construction } from "lucide-react";

interface SimulationProps {
  onNavigate?: (page: string) => void;
}

export default function Simulation({ onNavigate }: SimulationProps) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-blue-950 to-black text-white relative overflow-hidden">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-[url('https://i.ibb.co/WphvCht/space-bg.jpg')] bg-cover bg-center opacity-10" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20 text-center">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="inline-block mb-6"
          >
            <Rocket className="w-20 h-20 text-red-600" />
          </motion.div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-red-500 to-blue-400 bg-clip-text text-transparent">
            Terra Decisions
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-4 max-w-3xl mx-auto">
            Interactive Earth Mission Simulator — Coming Soon
          </p>

          <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto">
            Get ready for an immersive simulation experience where every decision impacts the planet 🌍.  
            Explore environmental scenarios, understand real-world consequences, and take part in shaping Earth’s future.
          </p>
        </motion.div>

        {/* Coming soon card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="max-w-3xl mx-auto bg-gradient-to-br from-blue-900/30 to-black/30 backdrop-blur-sm rounded-xl border border-blue-600/30 p-8 md:p-12"
        >
          <div className="flex flex-col items-center gap-6">
            <Construction className="w-14 h-14 text-yellow-400 animate-pulse" />
            <h2 className="text-3xl font-bold text-white mb-2">
              Simulation Under Construction
            </h2>
            <p className="text-gray-300 leading-relaxed">
              The <strong>Terra Decisions</strong> mission is currently being built.  
              Soon, you’ll be able to interact with satellite imagery, make choices, and visualize the scientific consequences of your decisions.
            </p>

            <div className="flex items-center justify-center gap-2 mt-6 text-gray-400">
              <Clock className="w-5 h-5" />
              <span>Coming in the next update</span>
            </div>
          </div>
        </motion.div>

        {/* Back button */}
        {onNavigate && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-12"
          >
            <button
              onClick={() => onNavigate("home")}
              className="px-8 py-4 bg-red-600 hover:bg-red-700 rounded-lg font-semibold text-lg transition-colors flex items-center justify-center gap-2 mx-auto"
            >
              Back to Home
            </button>
          </motion.div>
        )}
      </div>

      {/* Footer */}
      <footer className="max-w-7xl mx-auto px-4 mt-12 pt-8 border-t border-red-600/30">
        <p className="text-center text-gray-400 text-sm">
          © 2025 Iron Space – Inspired by NASA Terra Data
        </p>
      </footer>
    </div>
  );
}
