import { motion, AnimatePresence } from "framer-motion";

export default function NotificationModal({ isOpen, onClose, type, message }) {
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
            className={`p-6 rounded-2xl shadow-xl max-w-md h-[150px] w-full text-center flex flex-col items-center justify-center ${
              type === "success" ? "bg-green-100" : "bg-red-100"
            }`}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <h2
              className={`text-lg font-semibold mb-4 ${
                type === "success" ? "text-green-700" : "text-red-700"
              }`}
            >
              {type === "success" ? "✅ Success" : "❌ Error"}
            </h2>
            <p className="text-gray-700 mb-6">{message}</p>
            <button
              onClick={onClose}
              className="h-[25px] w-[50px] bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
            >
              Close
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
