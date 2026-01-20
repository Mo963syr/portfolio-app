import React from 'react';

interface SectionProps {
  title: string;
  children: React.ReactNode;
  id?: string;
}

const Section: React.FC<SectionProps> = ({ title, children, id }) => {
  return (
    <section id={id} className="container mx-auto px-4 py-16">
      <h2 className="section-title">{title}</h2>
      {children}
    </section>
  );
};

export default Section;