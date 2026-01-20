import { motion } from 'framer-motion';
import { FaUserFriends, FaBrain, FaHandsHelping, FaChartLine } from 'react-icons/fa';

interface SoftSkillsProps {
  softSkills: string[];
}

const SoftSkills: React.FC<SoftSkillsProps> = ({ softSkills }) => {
  // Map icons to specific skills or use a default
  const getIconForSkill = (skill: string) => {
    if (skill.toLowerCase().includes('team')) return <FaUserFriends className="w-6 h-6 text-blue-400" />;
    if (skill.toLowerCase().includes('communication') || skill.toLowerCase().includes('presentation')) return <FaHandsHelping className="w-6 h-6 text-purple-400" />;
    if (skill.toLowerCase().includes('quick') || skill.toLowerCase().includes('stressful')) return <FaBrain className="w-6 h-6 text-green-400" />;
    return <FaChartLine className="w-6 h-6 text-yellow-400" />;
  };

  return (
    <div className="grid md:grid-cols-2 gap-4">
      {softSkills.map((skill, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 }}
          className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-5 border border-gray-700 flex items-start gap-4 card-hover"
        >
          <div className="flex-shrink-0 mt-1">
            {getIconForSkill(skill)}
          </div>
          <div>
            <h4 className="font-semibold text-lg text-white mb-1">{skill}</h4>
            <p className="text-gray-400 text-sm">
              {skill === 'Team work skills' && 'Experienced in collaborative environments and group projects'}
              {skill === 'Quick positive reactions in stressful environments' && 'Able to maintain productivity and quality under pressure'}
              {skill === 'Building goodwill in communication' && 'Focused on clear, respectful and effective communication'}
              {skill === 'Professional presentation skills' && 'Skilled in presenting technical information to diverse audiences'}
            </p>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default SoftSkills;