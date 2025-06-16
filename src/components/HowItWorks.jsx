import eyeIcon from "../assets/eye-solid.svg";
import wandIcon from "../assets/wand-magic-sparkles-solid.svg";
import clipboardIcon from "../assets/clipboard-list-solid.svg";
import { motion } from "framer-motion";

export const HowItWorks = () => {
  return (
    <motion.div
      className="relative z-10 -mt-44 md:-mt-32 px-4 sm:px-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: "spring", stiffness: 90, damping: 20, delay: 1.1 }}
    >
      <h1 className="text-center font-serif text-xl sm:text-2xl mb-6 sm:mb-8">
        How it works
      </h1>
      <div className="flex flex-col space-y-4 sm:space-y-6 items-center">
        <div className="flex px-4 sm:px-8 py-3 sm:py-4 items-center justify-center bg-gradient-to-r w-full max-w-sm sm:max-w-lg space-x-2 sm:space-x-3 rounded-lg hover:scale-105 duration-500 transition-all from-white to-violet-50 border-2 border-gray-100/70">
          <img
            src={eyeIcon}
            alt=""
            className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0"
          />
          <div className="flex-1">
            <h2 className="text-lg sm:text-xl font-serif">Describe symptoms</h2>
            <p className="text-gray-600 font-medium text-sm sm:text-base">
              Type what's wrong — like "My cat is coughing and has watery eyes."
            </p>
          </div>
        </div>
        <div className="flex px-4 sm:px-8 py-3 sm:py-4 items-center justify-center bg-gradient-to-r w-full max-w-sm sm:max-w-lg space-x-2 sm:space-x-3 rounded-lg hover:scale-105 duration-500 transition-all from-white to-violet-50 border-2 border-gray-100/70">
          <img
            src={wandIcon}
            alt=""
            className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0"
          />
          <div className="flex-1">
            <h2 className="text-lg sm:text-xl font-serif">
              AI Gives Instant Insights
            </h2>
            <p className="text-gray-600 font-medium text-sm sm:text-base">
              Get possible conditions and nearby vet clinics with real reviews.
            </p>
          </div>
        </div>
        <div className="flex px-4 sm:px-8 py-3 sm:py-4 items-center justify-center bg-gradient-to-r w-full max-w-sm sm:max-w-lg space-x-2 sm:space-x-3 rounded-lg hover:scale-105 duration-500 transition-all from-white to-violet-50 border-2 border-gray-100/70">
          <img
            src={clipboardIcon}
            alt=""
            className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0"
          />
          <div className="flex-1">
            <h2 className="text-lg sm:text-xl font-serif">
              Show the Summary to Your Vet
            </h2>
            <p className="text-gray-600 font-medium text-sm sm:text-base">
              A clean message you can share with your vet for quicker treatment.
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
