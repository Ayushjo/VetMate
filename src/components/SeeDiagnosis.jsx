import { motion } from "framer-motion";
import { Send } from "lucide-react";
import { use, useRef, useState } from "react";
import { UserContext } from "../context/user-context.jsx";
import { toast } from "react-toastify";

export const SeeDiagnosis = () => {
  const userCtx = use(UserContext);
  const textAreaRef = useRef();
  const [finalResult, setFinalResult] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const diagnosisHandler = async (e) => {
    e.preventDefault();
    if (userCtx.isSignedIn) {
      const message = textAreaRef.current.value;

      if (!message.trim()) {
        alert("Please describe your pet's symptoms");
        return;
      }

      setIsLoading(true);
      try {
        const result = await userCtx.getResult(message);
        console.log(result);
        setFinalResult(result);
      } catch (error) {
        console.error("Error getting diagnosis:", error);
        setFinalResult(
          "Sorry, there was an error getting the diagnosis. Please try again."
        );
      } finally {
        setIsLoading(false);
      }
    }
    else{
        toast.error("Please Login First")
    }
  };

  return (
    <div className="relative z-10 py-44 px-6 ">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl text-gray-800 mb-4">
            Diagnose Your Pet
          </h1>
          <p className="font-medium text-gray-600 text-lg md:text-xl max-w-md mx-auto">
            Describe what's wrong and get help
          </p>
        </motion.div>

        <motion.div
          className="max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <form className="space-y-6" onSubmit={diagnosisHandler}>
            <div className="text-left">
              <label
                htmlFor="symptoms"
                className="block font-medium text-lg text-gray-800 mb-3"
              >
                Describe your pet's symptoms
              </label>
              <textarea
                ref={textAreaRef}
                id="symptoms"
                name="symptoms"
                rows={8}
                placeholder='For example: "My cat has been coughing and has watery eyes for the past 2 days..."'
                className="w-full px-6 py-4 bg-white/90 backdrop-blur-sm border border-gray-200 rounded-xl shadow-sm focus:ring-2 focus:ring-violet-500 focus:border-violet-500 transition-all duration-300 text-gray-800 placeholder-gray-500 resize-none"
                disabled={isLoading}
              />
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full md:w-auto px-8 py-4 bg-violet-600 hover:bg-violet-700 disabled:bg-gray-400 disabled:cursor-not-allowed text-white font-medium rounded-xl transition-colors duration-200 flex items-center justify-center gap-2 mx-auto"
            >
              {isLoading ? (
                <>
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  Analyzing...
                </>
              ) : (
                <>
                  Get Diagnosis
                  <Send className="w-4 h-4" />
                </>
              )}
            </button>
          </form>
        </motion.div>

        {/* Results Section */}
        {finalResult && (
          <motion.div
            className="mt-12 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-white/90 backdrop-blur-sm border border-gray-200 rounded-xl shadow-lg p-8 text-left">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
                🏥 Diagnosis Results
              </h2>

              <div className="space-y-6">
                {/* Parse and display the result */}
                {finalResult.split("\n").map((line, index) => {
                  if (line.trim() === "") return null;

                  if (line.startsWith("Possible conditions:")) {
                    return (
                      <div
                        key={index}
                        className="border-l-4 border-blue-500 pl-4"
                      >
                        <h3 className="font-semibold text-blue-700 mb-2">
                          🔍 Possible Conditions
                        </h3>
                        <p className="text-gray-700">
                          {line.replace("Possible conditions:", "").trim()}
                        </p>
                      </div>
                    );
                  }

                  if (line.startsWith("Advice:")) {
                    return (
                      <div
                        key={index}
                        className="border-l-4 border-green-500 pl-4"
                      >
                        <h3 className="font-semibold text-green-700 mb-2">
                          💡 Advice
                        </h3>
                        <p className="text-gray-700">
                          {line.replace("Advice:", "").trim()}
                        </p>
                      </div>
                    );
                  }

                  if (line.startsWith("Message to convey to the vet:")) {
                    return (
                      <div
                        key={index}
                        className="border-l-4 border-purple-500 pl-4"
                      >
                        <h3 className="font-semibold text-purple-700 mb-2">
                          🩺 Message for Your Vet
                        </h3>
                        <p className="text-gray-700 italic">
                          {line
                            .replace("Message to convey to the vet:", "")
                            .trim()
                            .replace(/"/g, "")}
                        </p>
                      </div>
                    );
                  }

                  return (
                    <p key={index} className="text-gray-700">
                      {line}
                    </p>
                  );
                })}
              </div>

              <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                <p className="text-sm text-yellow-800">
                  <strong>⚠️ Important:</strong> This is an AI-generated
                  assessment and should not replace professional veterinary
                  care. Please consult with a qualified veterinarian for
                  accurate diagnosis and treatment.
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};
