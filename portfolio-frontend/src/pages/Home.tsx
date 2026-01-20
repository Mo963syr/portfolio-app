import { motion } from 'framer-motion';
import { AiOutlinePhone, AiOutlineMail, AiOutlineLinkedin } from 'react-icons/ai';
import Section from '../components/Section';
import ContactInfo from '../components/ContactInfo';
import ExperienceCard from '../components/ExperienceCard';
import EducationCard from '../components/EducationCard';
import ProjectCard from '../components/ProjectCard';
import SkillsSection from '../components/SkillsSection';
import LanguageSkills from '../components/LanguageSkills';
import SoftSkills from '../components/SoftSkills';
import type { PortfolioData } from '../types/Portfolio';
import profileImage from '../assets/moafaq-profile.jpg';
interface HomeProps {
  data: PortfolioData;
}

const Home: React.FC<HomeProps> = ({ data }) => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <header className="py-20 px-4 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-purple-900/20 opacity-60 -z-10" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500/10 via-transparent to-transparent opacity-40 -z-10" />
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto relative z-10"
        >
         <motion.div
  initial={{ scale: 0.9, opacity: 0 }}
  animate={{ scale: 1, opacity: 1 }}
  transition={{ delay: 0.3, duration: 0.6 }}
  className="inline-block mb-6"
>
  <div className="w-40 h-40 rounded-full bg-blue-500/20 flex items-center justify-center mx-auto border-2 border-blue-500 overflow-hidden transition-all duration-500 hover:scale-105 hover:border-blue-400">
    <img 
      src={profileImage} 
      alt="Moafaq Aqeed - Profile"
      className="w-full h-full object-cover rounded-full transition-opacity duration-300"
    />
  </div>
</motion.div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
            {data.name}
          </h1>
          
          <p className="text-2xl text-blue-200 mb-8">
            Software Engineering Student
          </p>
          
          <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-12 leading-relaxed">
            {data.bio}
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <ContactButton 
              icon={<AiOutlinePhone className="w-5 h-5" />}
              text={data.phone}
              href={`tel:${data.phone}`}
            />
            <ContactButton 
              icon={<AiOutlineMail className="w-5 h-5" />}
              text={data.email}
              href={`mailto:${data.email}`}
            />
            <ContactButton 
              icon={<AiOutlineLinkedin className="w-5 h-5" />}
              text="LinkedIn"
              href={data.linkedin}
              target="_blank"
            />
          </div>
        </motion.div>
      </header>

      <main className="relative z-10">
        {/* Contact Section */}
        <Section title="Contact Information" id="contact">
          <ContactInfo data={data} />
        </Section>

        {/* Experience Section */}
        <Section title="Work Experience" id="experience">
          <div className="space-y-6">
            {data.experience.map((exp, index) => (
              <ExperienceCard key={index} data={exp} />
            ))}
          </div>
        </Section>

        {/* Education Section */}
        <Section title="Education" id="education">
          <div className="space-y-6">
            {data.education.map((edu, index) => (
              <EducationCard key={index} data={edu} />
            ))}
          </div>
        </Section>

        {/* Projects Section */}
        <Section title="Projects" id="projects">
          <div className="grid md:grid-cols-2 gap-6">
            {data.projects.map((project, index) => (
              <ProjectCard key={index} data={project} />
            ))}
          </div>
        </Section>

        {/* Skills Section */}
        <Section title="Technical Skills" id="skills">
          <SkillsSection skills={data.skills as any} />
        </Section>

        {/* Languages Section */}
        <Section title="Languages" id="languages">
          <LanguageSkills languages={data.languages} />
        </Section>

        {/* Soft Skills Section */}
        <Section title="Professional Skills" id="soft-skills">
          <SoftSkills softSkills={data.softSkills} />
        </Section>
      </main>

      <footer className="py-12 text-center text-gray-400 border-t border-gray-800 mt-12">
        <div className="container mx-auto px-4">
          <p>© {new Date().getFullYear()} Moafaq Aqeed. All rights reserved.</p>
          <p className="mt-2 text-sm">Portfolio built with React, TypeScript & NestJS</p>
        </div>
      </footer>
    </div>
  );
};

interface ContactButtonProps {
  icon: React.ReactNode;
  text: string;
  href: string;
  target?: string;
}

const ContactButton: React.FC<ContactButtonProps> = ({ icon, text, href, target = "_self" }) => (
  <motion.a 
    href={href} 
    target={target}
    rel={target === "_blank" ? "noopener noreferrer" : undefined}
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className="flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-all duration-300 shadow-lg shadow-blue-500/30"
  >
    {icon}
    <span>{text}</span>
  </motion.a>
);

export default Home;