import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';

export type PortfolioDocument = Portfolio & Document;

@Schema()
export class Portfolio {
  @Prop({ required: true })
  name: string; // "Moafaq Mohammed Ali Ageed"

  @Prop()
  birthDate?: string; // "01/01/2003"

  @Prop()
  bio: string; // "Recent graduate with a Bachelor's degree in Computer Science..."

  @Prop({ required: true })
  phone: string; // "+963968738781"

  @Prop({ required: true })
  email: string; // "moafagageed01@gmail.com"

  @Prop({ required: true })
  linkedin: string; // "https://www.linkedin.com/in/moafaq-aqeed"

  @Prop()
  address?: string; // "Syria, rifDamascus, Darraya"

  @Prop([{ 
    title: String, 
    period: String,
    company: String,
    description: [String],
    link: { type: String, required: false }
  }])
  experience: Array<{
    title: string;
    period: string;
    company: string;
    description: string[];
    link?: string;
  }>;

  @Prop([{ 
    degree: String,
    institution: String,
    period: String,
    description: [String]
  }])
  education: Array<{
    degree: string;
    institution: string;
    period: string;
    description: string[];
  }>;

  // التصحيح: استخدام Schema.Types.Mixed للمهارات المنظمة
  @Prop({ type: MongooseSchema.Types.Mixed })
  skills: {
    backend: string[];
    frontend: string[];
    databases: string[];
    programmingLanguages: string[];
    tools: string[];
  };

  @Prop([{ 
    title: String, 
    description: String,
    technologies: [String],
    link: { type: String, required: false }
  }])
  projects: Array<{
    title: string;
    description: string;
    technologies: string[];
    link?: string;
  }>;

  @Prop({ type: MongooseSchema.Types.Mixed })
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

  @Prop([String])
  softSkills: string[];
}

export const PortfolioSchema = SchemaFactory.createForClass(Portfolio);