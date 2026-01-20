import { motion } from 'framer-motion';
import { FaGraduationCap, FaUniversity, FaClock } from 'react-icons/fa';

interface EducationCardProps {
  data: {
    degree: string;
    institution: string;
    period: string;
    description: string[];
  };
}

const EducationCard: React.FC<EducationCardProps> = ({ data }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 card-hover"
    >
      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="text-xl font-bold text-white">{data.degree}</h3>
          <div className="flex items-center gap-2 mt-1 text-purple-400">
            <FaUniversity className="w-4 h-4" />
            <span>{data.institution}</span>
          </div>
        </div>
      </div>
      
      <div className="flex items-center gap-2 text-gray-400 mb-4">
        <FaClock className="w-4 h-4" />
        <span>{data.period}</span>
      </div>
      
      <ul className="space-y-2">
        {data.description.map((desc, index) => (
          <li key={index} className="flex items-start gap-2">
            <span className="text-purple-500 mt-1">•</span>
            <span className="text-gray-300">{desc}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

export default EducationCard;