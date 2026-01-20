import { FaPhone, FaEnvelope, FaLinkedin, FaMapPin } from 'react-icons/fa';
import { motion } from 'framer-motion';
import type { PortfolioData } from '../types/Portfolio';

interface ContactInfoProps {
  data: PortfolioData;
}

const ContactInfo: React.FC<ContactInfoProps> = ({ data }) => {
  const contactItems = [
    {
      icon: <FaPhone className="w-6 h-6 text-blue-400" />,
      label: 'Phone',
      value: data.phone,
      href: `tel:${data.phone}`
    },
    {
      icon: <FaEnvelope className="w-6 h-6 text-red-400" />,
      label: 'Email',
      value: data.email,
      href: `mailto:${data.email}`
    },
    {
      icon: <FaLinkedin className="w-6 h-6 text-blue-600" />,
      label: 'LinkedIn',
      value: 'Profile',
      href: data.linkedin
    },
    {
      icon: <FaMapPin className="w-6 h-6 text-green-400" />,
      label: 'Location',
      value: data.address || 'Syria, rifDamascus, Darraya',
      href: null
    }
  ];

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
      {contactItems.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 flex items-start gap-4"
        >
          <div className="flex-shrink-0 mt-1">{item.icon}</div>
          <div>
            <h3 className="font-medium text-gray-400 text-sm">{item.label}</h3>
            {item.href ? (
              <a 
                href={item.href} 
                target={item.href.startsWith('http') ? '_blank' : '_self'}
                rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="text-white font-medium hover:text-blue-400 transition-colors block mt-1"
              >
                {item.value}
              </a>
            ) : (
              <p className="text-white font-medium mt-1">{item.value}</p>
            )}
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default ContactInfo;