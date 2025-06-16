import { motion } from "framer-motion";
import pawIcon from "../assets/paw-solid.svg";
import { useNavigate } from "react-router-dom";
import { use, useState } from "react";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";
import { UserContext } from "../context/user-context";

export const Navbar = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const userCtx = use(UserContext);

  return (
    <>
      <nav className="fixed top-0 z-50 w-full">
        <div className="backdrop-blur-md bg-white/10 border-b border-white/20">
          <div className="flex justify-between mx-auto container py-4 px-6 items-center">
            <motion.div
              className="flex space-x-4 items-center"
              initial={{ opacity: 0, x: -150 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 25,
                delay: 0.3,
              }}
            >
              <img src={pawIcon} alt="VetMate" className="w-9 h-9" />
              <h1
                onClick={() => navigate("/")}
                className="font-bold text-2xl bg-gradient-to-r bg-clip-text text-transparent from-gray-800 to-gray-600 tracking-tight hover:cursor-pointer"
              >
                VetMate
              </h1>
            </motion.div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <SignedOut>
                <SignInButton mode="modal">
                  <motion.button
                    className="font-medium text-lg group relative font-sans text-gray-700 hover:text-gray-900 transition-colors duration-200"
                    initial={{ opacity: 0, y: -25 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      type: "spring",
                      stiffness: 75,
                      damping: 20,
                      delay: 0.1,
                    }}
                  >
                    Login
                    <span className="w-0 h-0.5 left-0 -bottom-1 absolute group-hover:w-full bg-gradient-to-r from-gray-700 to-gray-500 transition-all duration-300"></span>
                  </motion.button>
                </SignInButton>
              </SignedOut>
              <SignedIn>
                <UserButton afterSignOutUrl="/" />
              </SignedIn>
              
            </div>

            {/* Mobile Menu Button */}
            {!userCtx.isSignedIn && (
              <div className="md:hidden flex items-center space-x-4">
                <SignedIn>
                  <UserButton afterSignOutUrl="/" />
                </SignedIn>
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="text-gray-700 hover:text-gray-900 focus:outline-none"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    {isMenuOpen ? (
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    ) : (
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    )}
                  </svg>
                </button>
              </div>
            )}
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <motion.div
              className="md:hidden backdrop-blur-md bg-white/10 border-t border-white/20 "
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="px-6 py-4 space-y-4  ">
                <SignedOut>
                  <SignInButton mode="modal">
                    <button className="block w-full  text-lg text-gray-700 hover:text-gray-900 transition-colors duration-200 text-center font-light ">
                      Login
                    </button>
                  </SignInButton>
                </SignedOut>
              </div>
            </motion.div>
          )}
        </div>
      </nav>
    </>
  );
};
