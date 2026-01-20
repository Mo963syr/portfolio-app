import { motion } from 'framer-motion';
import {
  FaCode,
  FaDatabase,
  FaMobileAlt,
  FaTools,
  FaCloud,
  FaServer,
  FaLayerGroup
} from 'react-icons/fa';

/* =======================
   Types
======================= */

interface SkillsObject {
  backend?: string[];
  frontend?: string[];
  databases?: string[];
  programmingLanguages?: string[];
  tools?: string[];
}

interface SkillsSectionProps {
  skills: SkillsObject;
}

/* =======================
   Component
======================= */

const SkillsSection: React.FC<SkillsSectionProps> = ({ skills }) => {
  /* =======================
     Normalize skills object → string[]
  ======================= */

  const normalizeSkills = (skillsObj: SkillsObject): string[] => {
    if (!skillsObj || typeof skillsObj !== 'object') return [];
    return Object.values(skillsObj).flat();
  };

  /* =======================
     Auto categorization
  ======================= */

  const autoCategorizeSkills = (skillsList: string[]) => {
    if (!Array.isArray(skillsList)) return {};

    const categories: Record<string, string[]> = {
      'Backend Development': [],
      'Frontend Development': [],
      'Programming Languages': [],
      'Databases': [],
      'DevOps & Cloud': [],
      'Other': []
    };

    skillsList.forEach((skill) => {
      const lowerSkill = skill.toLowerCase();

      if (
        lowerSkill.includes('node') ||
        lowerSkill.includes('express') ||
        lowerSkill.includes('nest') ||
        lowerSkill.includes('backend') ||
        lowerSkill.includes('api')
      ) {
        categories['Backend Development'].push(skill);
      } else if (
        lowerSkill.includes('react') ||
        lowerSkill.includes('vue') ||
        lowerSkill.includes('angular') ||
        lowerSkill.includes('html') ||
        lowerSkill.includes('css') ||
        lowerSkill.includes('tailwind') ||
        lowerSkill.includes('bootstrap') ||
        lowerSkill.includes('flutter') ||
        lowerSkill.includes('dart')
      ) {
        categories['Frontend Development'].push(skill);
      } else if (
        lowerSkill.includes('javascript') ||
        lowerSkill.includes('typescript') ||
        lowerSkill.includes('java') ||
        lowerSkill.includes('python') ||
        lowerSkill.includes('c++') ||
        lowerSkill.includes('c#') ||
        lowerSkill.includes('php') ||
        lowerSkill.includes('ruby') ||
        lowerSkill.includes('go') ||
        lowerSkill.includes('rust') ||
        lowerSkill.includes('kotlin') ||
        lowerSkill.includes('swift')
      ) {
        categories['Programming Languages'].push(skill);
      } else if (
        lowerSkill.includes('mongo') ||
        lowerSkill.includes('sql') ||
        lowerSkill.includes('mysql') ||
        lowerSkill.includes('postgres') ||
        lowerSkill.includes('oracle') ||
        lowerSkill.includes('firebase')
      ) {
        categories['Databases'].push(skill);
      } else if (
        lowerSkill.includes('docker') ||
        lowerSkill.includes('kubernetes') ||
        lowerSkill.includes('aws') ||
        lowerSkill.includes('azure') ||
        lowerSkill.includes('gcp') ||
        lowerSkill.includes('nginx') ||
        lowerSkill.includes('devops') ||
        lowerSkill.includes('ci/cd')
      ) {
        categories['DevOps & Cloud'].push(skill);
      } else {
        categories['Other'].push(skill);
      }
    });

    // Remove empty categories
    Object.keys(categories).forEach((key) => {
      if (categories[key].length === 0) {
        delete categories[key];
      }
    });

    return categories;
  };

  /* =======================
     Processing
  ======================= */

  const flatSkills = normalizeSkills(skills);
  const categorizedSkills = autoCategorizeSkills(flatSkills);

  /* =======================
     Render
  ======================= */

  return (
    <div className="space-y-8">
      {Object.entries(categorizedSkills).map(([category, categorySkills]) => (
        <div key={category} className="space-y-4">
          <div className="flex items-center gap-3 mb-2">
            {getCategoryIcon(category)}
            <h3 className="text-xl font-bold text-white">{category}</h3>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {categorySkills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className="bg-gray-800 rounded-lg p-3 text-center border border-gray-700 hover:border-blue-500/50 transition-colors group"
              >
                <span className="text-gray-300 text-sm group-hover:text-blue-300 transition-colors">
                  {skill}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

/* =======================
   Icons
======================= */

const getCategoryIcon = (category: string) => {
  const iconStyle = 'w-6 h-6';

  if (category.includes('Backend'))
    return <FaServer className={`${iconStyle} text-blue-400`} />;
  if (category.includes('Frontend'))
    return <FaMobileAlt className={`${iconStyle} text-green-400`} />;
  if (category.includes('Programming'))
    return <FaCode className={`${iconStyle} text-purple-400`} />;
  if (category.includes('Database'))
    return <FaDatabase className={`${iconStyle} text-red-400`} />;
  if (category.includes('DevOps') || category.includes('Cloud'))
    return <FaCloud className={`${iconStyle} text-yellow-400`} />;
  if (category.includes('Other'))
    return <FaTools className={`${iconStyle} text-gray-400`} />;

  return <FaLayerGroup className={`${iconStyle} text-blue-300`} />;
};

export default SkillsSection;
