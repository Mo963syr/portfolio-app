import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

interface ProjectCardProps {
  data: {
    title: string;
    description: string;
    technologies: string[];
    link?: string;
  };
}

const ProjectCard: React.FC<ProjectCardProps> = ({ data }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 card-hover overflow-hidden relative"
    >
      {/* Gradient border effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl -z-10 opacity-0 hover:opacity-100 transition-opacity duration-300" />
      
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-2xl font-bold text-gradient">{data.title}</h3>
        {data.link && (
          <a 
            href={data.link} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-300 transition-colors p-2 hover:bg-blue-500/10 rounded-full"
            aria-label="Project link"
          >
            {data.link.includes('github') ? (
              <FaGithub className="w-5 h-5" />
            ) : (
              <FaExternalLinkAlt className="w-5 h-5" />
            )}
          </a>
        )}
      </div>
      
      <p className="text-gray-300 mb-4">{data.description}</p>
      
      <div className="flex flex-wrap gap-2">
        {data.technologies.map((tech, index) => (
          <span 
            key={index} 
            className="bg-blue-900/50 text-blue-300 text-sm px-3 py-1 rounded-full border border-blue-800"
          >
            {tech}
          </span>
        ))}
      </div>
    </motion.div>
  );
};

export default ProjectCard;