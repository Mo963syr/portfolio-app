import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document , Schema as MongooseSchema} from 'mongoose';

export type PortfolioDocument = Portfolio & Document;

@Schema()
export class Portfolio {
  @Prop({ required: true })
  name: string; // "Moafaq Mohammed Ali Ageed"

  @Prop()
  birthDate?: string; // "01/01/2003"

  @Prop()
  bio: string; // "Fifth-year Informatics student specializing in Software Engineering..."

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
    link: String
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

  @Prop([String])
  skills: string[]; // ["Node.js", "MongoDB", "Flutter", ...]

  @Prop([{ 
    title: String, 
    description: String,
    technologies: [String],
    link: String 
  }])
  projects: Array<{
    title: string;
    description: string;
    technologies: string[];
    link?: string;
  }>;

 // الحل: تحديد نوع الحقل المعقد باستخدام Schema.Types.Mixed
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
  softSkills: string[]; // ["Team work skills", ...]
}

export const PortfolioSchema = SchemaFactory.createForClass(Portfolio);