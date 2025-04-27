import { Github, Linkedin } from "lucide-react";

const SocialLinks = () => {
  return (
    <div className="flex space-x-4 mt-4">
      <a 
        href="https://github.com/rick-dutta" 
        target="_blank" 
        rel="noopener noreferrer"
        className="text-gray-300 hover:text-[#9b87f5] transition-colors"
      >
        <Github size={24} />
      </a>
      <a 
        href="https://www.linkedin.com/in/rick-dutta-527854192/" 
        target="_blank" 
        rel="noopener noreferrer"
        className="text-gray-300 hover:text-[#9b87f5] transition-colors"
      >
        <Linkedin size={24} />
      </a>
    </div>
  );
};

export default SocialLinks;
