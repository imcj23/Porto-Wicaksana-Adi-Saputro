import { motion, AnimatePresence } from "framer-motion";

export default function ComingSoonModal({ isOpen, onClose }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="bg-white p-6 rounded-2xl shadow-xl max-w-md min-h-[150px] w-full 
             flex flex-col items-center justify-center text-center"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              🚧 Coming Soon 🚧
            </h2>
            <p className="text-gray-600 mb-6">this part coming soon</p>
            <button
              onClick={onClose}
              className="h-[25px] w-[50px] bg-blue-600 text-white rounded-md hover:bg-blue-700 transition mt-4"
            >
              Close
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
