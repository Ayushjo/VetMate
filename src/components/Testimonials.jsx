import star from "../assets/star.svg";
import { motion } from "framer-motion";

export const Testimonials = () => {
  return (
    <div className="relative z-10 text-center mt-16 sm:mt-32 mb-16 sm:mb-24 px-4 sm:px-6">
      <motion.h1
        className="font-serif text-2xl sm:text-3xl md:text-4xl font-medium"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.4,
          type: "spring",
          damping: 20,
          stiffness: 80,
        }}
        viewport={{ once: true }}
      >
        Customer Testimonials
      </motion.h1>
      <motion.p
        className="text-lg sm:text-xl text-gray-600 font-sans mt-2"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.5,
          type: "spring",
          damping: 20,
          stiffness: 80,
        }}
        viewport={{ once: true }}
      >
        What our users are saying
      </motion.p>
      <motion.div
        className="flex flex-col lg:flex-row max-w-7xl justify-center mt-6 sm:mt-10 text-center gap-4 sm:gap-6 lg:gap-8 mx-auto"
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{
          delay: 0.6,
          type: "spring",
          damping: 20,
          stiffness: 80,
        }}
        viewport={{ once: true }}
      >
        <div className="bg-gradient-to-b p-4 sm:p-6 lg:p-8 from-white to-violet-50 border-2 border-gray-100/70 w-full max-w-sm sm:max-w-md lg:w-[500px] mx-auto rounded-xl hover:scale-105 transition-all duration-300 shadow-md shadow-violet-100">
          <h1 className="text-lg sm:text-xl lg:text-2xl font-serif font-semibold mb-2">
            Emma Lewis
          </h1>
          <p className="text-sm sm:text-md font-sans text-stone-600 mb-2">
            Pet Parent & Blogger
          </p>
          <div className="flex items-center justify-center mb-2">
            <img src={star} className="w-4 h-4 sm:w-5 sm:h-5" alt="" />
            <img src={star} className="w-4 h-4 sm:w-5 sm:h-5" alt="" />
            <img src={star} className="w-4 h-4 sm:w-5 sm:h-5" alt="" />
            <img src={star} className="w-4 h-4 sm:w-5 sm:h-5" alt="" />
            <img src={star} className="w-4 h-4 sm:w-5 sm:h-5" alt="" />
          </div>
          <p className="text-xs sm:text-sm text-stone-600 font-sans">
            I was genuinely surprised by how fast VetMate understood my cat's
            symptoms. Within seconds, I had a detailed summary and even vet
            recommendations. Total lifesaver!
          </p>
        </div>

        <div className="bg-gradient-to-b p-4 sm:p-6 lg:p-8 from-white to-violet-50 border-2 border-gray-100/70 w-full max-w-sm sm:max-w-md lg:w-[450px] mx-auto rounded-lg hover:scale-105 transition-all duration-300 shadow-md shadow-violet-100">
          <h1 className="text-lg sm:text-xl lg:text-2xl font-serif font-semibold mb-2">
            Jayant Verma
          </h1>
          <p className="text-sm sm:text-md font-sans text-stone-600 mb-2">
            Dog Trainer & Behaviour Expert
          </p>
          <div className="flex items-center justify-center mb-2">
            <img src={star} className="w-4 h-4 sm:w-5 sm:h-5" alt="" />
            <img src={star} className="w-4 h-4 sm:w-5 sm:h-5" alt="" />
            <img src={star} className="w-4 h-4 sm:w-5 sm:h-5" alt="" />
            <img src={star} className="w-4 h-4 sm:w-5 sm:h-5" alt="" />
            <img src={star} className="w-4 h-4 sm:w-5 sm:h-5" alt="" />
          </div>
          <p className="text-xs sm:text-sm text-stone-600 font-sans">
            VetMate is the perfect tool for early diagnosis. I recommend it to
            all my clients – the AI insights are accurate and easy to explain to
            vets.
          </p>
        </div>

        <div className="bg-gradient-to-b p-4 sm:p-6 lg:p-8 from-white to-violet-50 border-2 border-gray-100/70 w-full max-w-sm sm:max-w-md lg:w-[500px] mx-auto rounded-lg hover:scale-105 transition-all duration-300 shadow-md shadow-violet-100">
          <h1 className="text-lg sm:text-xl lg:text-2xl font-serif font-semibold mb-2">
            Sarah Kumar
          </h1>
          <p className="text-sm sm:text-md font-sans text-stone-600 mb-2">
            Veterinary Assistant
          </p>
          <div className="flex items-center justify-center mb-2">
            <img src={star} className="w-4 h-4 sm:w-5 sm:h-5" alt="" />
            <img src={star} className="w-4 h-4 sm:w-5 sm:h-5" alt="" />
            <img src={star} className="w-4 h-4 sm:w-5 sm:h-5" alt="" />
            <img src={star} className="w-4 h-4 sm:w-5 sm:h-5" alt="" />
            <img src={star} className="w-4 h-4 sm:w-5 sm:h-5" alt="" />
          </div>
          <p className="text-xs sm:text-sm text-stone-600 font-sans">
            This tool helps bridge the gap between pet parents and
            professionals. It's smart, quick, and user-friendly – everything a
            modern pet owner needs.
          </p>
        </div>
      </motion.div>
    </div>
  );
};
