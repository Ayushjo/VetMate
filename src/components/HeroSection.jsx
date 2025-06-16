import { motion } from "framer-motion";
import { use, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/user-context";
import { toast } from "react-toastify";

export const HeroSection = () => {
  const navigate = useNavigate();
  const userCtx = use(UserContext);
  console.log(userCtx.isSignedIn);
  

  return (
    <div className="relative z-10 flex flex-col items-center justify-center min-h-[70vh] px-6  ">
      <div className="text-center max-w-4xl  ">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 80,
            damping: 20,
            delay: 0.8,
          }}
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-800 leading-tight">
            Diagnose your pet's health with{" "}
            <span className="text-indigo-600 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              AI
            </span>
            .
          </h1>
          <p className="mt-6 text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Get instant health insights for your beloved pets using advanced AI
            technology. Quick, reliable, and always available when you need it
            most.
          </p>
        </motion.div>

        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <motion.button
            onClick={() => {
              if (!userCtx.isSignedIn) {
                toast.error("Please Login first :<");
              } else {
                navigate("/diagnosis");
              }
            }}
            className="bg-indigo-600 text-white px-8 py-3 rounded-full  font-thin text-[18px] hover:bg-indigo-700 transition-colors"
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8, duration: 0.4 }}
            whileTap={{ scale: 0.9 }}
          >
            Start Diagnosis
          </motion.button>
        </div>
      </div>
    </div>
  );
};
