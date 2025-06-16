import check from "../assets/check.svg";
import whiteBunny from "../assets/white-bunny.jpg";
import { Check } from "lucide-react";
import { motion } from "framer-motion";

export const About = () => {
  const features = [
    "Instant Symptom Analysis",
    "Condition Suggestions",
    "Nearby Vet Info with Reviews",
  ];

  return (
    <div className="relative z-10 mt-16 sm:mt-24 lg:mt-32 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <motion.h1
          className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-center text-gray-800"
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{
            delay: 0.2,
            type: "spring",
            damping: 20,
            stiffness: 80,
          }}
          viewport={{ once: true }}
        >
          Why use VetMate
        </motion.h1>
        <motion.p
          className="text-center text-gray-600 font-medium text-base sm:text-lg mt-2 sm:mt-3 mb-8 sm:mb-12 lg:mb-16"
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{
            delay: 0.4,
            type: "spring",
            damping: 20,
            stiffness: 80,
          }}
          viewport={{ once: true }}
        >
          Know about your pet's health in seconds
        </motion.p>

        <motion.div
          className="flex flex-col lg:flex-row items-center gap-8 sm:gap-10 lg:gap-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.6,
            type: "spring",
            damping: 20,
            stiffness: 80,
          }}
          viewport={{ once: true }}
        >
          <div className="flex-1 w-full max-w-sm sm:max-w-md lg:max-w-lg">
            <img
              src={whiteBunny}
              alt="White bunny representing pet care"
              className="w-full h-[250px] sm:h-[300px] lg:h-[400px] object-cover rounded-2xl shadow-lg"
            />
          </div>

          <div className="flex-1 w-full max-w-xl">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-serif font-semibold text-gray-800 mb-2 sm:mb-3">
              Get AI Health Insights Instantly
            </h2>
            <p className="text-gray-500 font-medium text-lg sm:text-xl mb-4 sm:mb-6 lg:mb-8">
              Your pet's health, decoded by cutting-edge AI
            </p>

            <p className="text-base sm:text-lg font-medium text-gray-700 leading-relaxed mb-6 sm:mb-8">
              Worried about unusual pet behavior? VetMate helps you understand
              your pet's symptoms quickly and accurately. Simply describe the
              symptoms and get possible conditions, treatment advice, and even
              local vet recommendations in seconds. AI takes the guesswork out
              of pet care.
            </p>

            <ul className="space-y-3 sm:space-y-4">
              {features.map((feature, index) => (
                <motion.li
                  key={index}
                  className="flex items-center"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 bg-green-100 rounded-full flex items-center justify-center mr-2 sm:mr-3">
                    <Check className="w-3 h-3 sm:w-4 sm:h-4 text-gray-600" />
                  </div>
                  <span className="text-base sm:text-lg font-medium text-gray-700">
                    {feature}
                  </span>
                </motion.li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
