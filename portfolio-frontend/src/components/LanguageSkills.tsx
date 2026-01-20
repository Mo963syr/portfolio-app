import { motion } from 'framer-motion';
import { FaLanguage } from 'react-icons/fa';

interface LanguageSkillsProps {
  languages: {
    arabic: string;
    english: {
      listening: string;
      reading: string;
      spokenProduction: string;
      spokenInteraction: string;
      writing: string;
    };
  };
}

const LanguageSkills: React.FC<LanguageSkillsProps> = ({ languages }) => {
  const getProficiencyColor = (level: string) => {
    if (level.startsWith('A')) return 'bg-red-500/20 border-red-500';
    if (level.startsWith('B')) return 'bg-green-500/20 border-green-500';
    if (level.startsWith('C')) return 'bg-blue-500/20 border-blue-500';
    return 'bg-gray-500/20 border-gray-500';
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 card-hover"
    >
      <div className="flex items-center gap-3 mb-6">
        <FaLanguage className="w-8 h-8 text-blue-400" />
        <h3 className="text-2xl font-bold text-white">Language Skills</h3>
      </div>
      
      <div className="space-y-6">
        {/* Arabic */}
        <div>
          <div className="flex justify-between mb-2">
            <span className="font-medium text-white">Arabic</span>
            <span className="text-blue-400 font-medium">{languages.arabic}</span>
          </div>
          <div className="h-2 bg-blue-500/20 rounded-full overflow-hidden">
            <div className="h-full bg-blue-500 w-full transition-all duration-500"></div>
          </div>
        </div>
        
        {/* English */}

        <div>
          <div className="flex justify-between mb-2">
            <span className="font-medium text-white">English</span>
            <span className="text-green-400 font-medium">Independent User (B1-B2)</span>
          </div>
          
          <div className="space-y-3 mt-4">
            {Object.entries(languages.english).map(([skill, level]) => {
              const skillName = skill
                .replace(/([A-Z])/g, ' $1')
                .replace(/^./, str => str.toUpperCase());
              
              return (
                <div key={skill}>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-300">{skillName}</span>
                    <span className={`px-2 py-1 rounded text-xs font-medium ${getProficiencyColor(level)}`}>
                      {level}
                    </span>
                  </div>
                  <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                    <div 
                      className={`h-full rounded-full transition-all duration-500 ${
                        level.startsWith('A') ? 'bg-red-500 w-1/3' : 
                        level.startsWith('B') ? 'bg-green-500 w-2/3' : 
                        'bg-blue-500 w-full'
                      }`}
                    ></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default LanguageSkills;