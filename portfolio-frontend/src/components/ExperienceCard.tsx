import { motion } from 'framer-motion';
import { FaBuilding, FaClock } from 'react-icons/fa';

interface ExperienceCardProps {
  data: {
    title: string;
    period: string;
    company: string;
    description: string[];
    link?: string;
  };
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ data }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 card-hover"
    >
      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="text-xl font-bold text-white">{data.title}</h3>
          <div className="flex items-center gap-2 mt-1 text-blue-400">
            <FaBuilding className="w-4 h-4" />
            <span>{data.company}</span>
          </div>
        </div>
        {data.link && (
          <a 
            href={data.link} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-300 transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        )}
      </div>
      
      <div className="flex items-center gap-2 text-gray-400 mb-4">
        <FaClock className="w-4 h-4" />
        <span>{data.period}</span>
      </div>
      
      <ul className="space-y-2">
        {data.description.map((desc, index) => (
          <li key={index} className="flex items-start gap-2">
            <span className="text-blue-500 mt-1">•</span>
            <span className="text-gray-300">{desc}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

export default ExperienceCard;