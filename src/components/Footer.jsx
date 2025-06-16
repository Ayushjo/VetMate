import pawIcon from "../assets/paw-solid.svg";
import { FiGithub, FiTwitter, FiLinkedin} from "react-icons/fi";
export const Footer = () => {
  return (
    <div className="relative bottom-0 left-0 right-0 z-10 flex items-center justify-between gap-4 py-3 mt-20 px-16 border-t-2 border-gray-200/40  ">
        <div className="flex gap-2 justify-center items-center">
            <img src={pawIcon} alt="" className="w-10 h-10" />
            <h1 className="font-serif text-stone-700 text-2xl font-bold">VetMate</h1>
        </div>
      
      <p className="flex -1 border-l border-gray-400 pl-4 text-md text-gray-500 max-sm:hidden font-sans  ">
        Copyright @ayush.dev | All rights reserved.
      </p>
      <div className="flex gap-4 ">
        <FiGithub className="w-5 h-5"/>
        <FiTwitter className="w-5 h-5"/>
        <FiLinkedin className="w-5 h-5"/>
        
      </div>
    </div>
  );
};
