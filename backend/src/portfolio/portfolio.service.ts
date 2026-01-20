import { Injectable, Logger, OnModuleInit } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Portfolio, PortfolioDocument } from './entities/portfolio.entity';

@Injectable()
export class PortfolioService implements OnModuleInit {
  private readonly logger = new Logger(PortfolioService.name);

  constructor(
    @InjectModel(Portfolio.name) private portfolioModel: Model<PortfolioDocument>,
  ) {}

  async onModuleInit() {
    try {
      // انتظر اتصال قاعدة البيانات أولاً
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // التحقق من وجود بيانات
      await this.initializePortfolioData();
    } catch (error) {
      this.logger.error('Error during module initialization:', error);
    }
  }

  private async initializePortfolioData() {
    try {
      const existingPortfolio = await this.portfolioModel.findOne().exec();
      
      if (!existingPortfolio) {
        this.logger.log('No portfolio data found. Creating initial data...');
        
        // تنظيف الروابط من المسافات الزائدة
        const cleanLink = (link: string | null | undefined): string | null => {
          if (!link) return null;
          const trimmed = link.trim();
          return trimmed === '' ? null : trimmed;
        };

        // إنشاء مستند جديد
        const newPortfolio = new this.portfolioModel({
          name: "Moafaq Mohammed Ali Ageed",
          birthDate: "01/01/2003",
          bio: "I'm a fifth-year Informatics student specializing in Software Engineering, with practical experience in backend development using Node.js and MongoDB database, and developed responsive Flutter interfaces.",
          phone: "+963968738781",
          email: "moafagageed01@gmail.com",
          linkedin: cleanLink("https://www.linkedin.com/in/moafaq-aqeed  "),
          address: "Syria, rifDamascus, Darraya",
          experience: [
            {
              title: "Blood Bridge Application - Backend Developer",
              period: "Jun 2024 - Sep 2024",
              company: "Al-Sham Private University",
              description: [
                "Built a blood donation system using Node.js",
                "Implemented secure login, admin panel, and real-time data handling",
                "Developed appointment booking process, donation requests, and donation processing"
              ],
              link: cleanLink("https://github.com/Mo963syr/Blood-bridge-app.git  ")
            },
            {
              title: "PartTec - Auto Parts E-Commerce Application",
              period: "Jan 2025 - Present",
              company: "Alshami Store",
              description: [
                "Developed a full-stack e-commerce application for selling auto parts using Node.js backend and Flutter frontend",
                "Implemented MongoDB database structure to handle complex product catalogs, inventory management, and order processing",
                "Designed secure user authentication, payment integration, and real-time inventory tracking features"
              ],
              link: cleanLink("https://github.com/Mo963syr/PartTec-Backend  ")
            },
            {
              title: "Sales Representative",
              period: "Ongoing",
              company: "Alshami Store - Selling car parts",
              description: [
                "Experienced in trading, selling and insuring auto parts to customers"
              ],
              link: null
            }
          ],
          education: [
            {
              degree: "Bachelor in Computer Science - Software Engineering",
              institution: "Al Sham Private University",
              period: "Oct 2020 - Current",
              description: ["Website: aspu.edu.sy"]
            },
            {
              degree: "Web Development Course",
              institution: "RCC(EXPERTS)",
              period: "Jun 2024 - Current",
              description: ["Damascus Countryside/ALBARAMKEH, Syria"]
            }
          ],
          skills: {
            backend: [
              "Node.js", 
              "NestJS", 
              "JSON Parsing", 
              "MVC Patterns", 
              "RESTful APIs",
              "Postman"
            ],
            frontend: [
              "Flutter & Dart", 
              "HTML/CSS", 
              "JavaScript/TypeScript",
              "Responsive Design",
              "React (Basic)"
            ],
            databases: [
              "MongoDB", 
              "SQL Server", 
              "SQL Plus", 
              "Oracle Database",
              "Database Design"
            ],
            programmingLanguages: [
              "Java (OOP)", 
              "C++ (Beginner)",
              "Dart"
            ],
            tools: [
              "Git & GitHub", 
              "VS Code", 
              "Docker (Basic)",
              "Microsoft Office",
              "Linux/Windows"
            ]
          },
          projects: [
            {
              title: "Blood Bridge App",
              description: "A comprehensive blood donation management system",
              technologies: ["Node.js", "MongoDB"],
              link: cleanLink("https://github.com/Mo963syr/Blood-bridge-app.git  ")
            },
            {
              title: "PartTec - Auto Parts E-Commerce Application",
              description: "Developed a full-stack e-commerce application for selling auto parts using Node.js backend and Flutter frontend",
              technologies: ["Node.js", "MongoDB"],
              link: cleanLink("https://github.com/Mo963syr/PartTec-Backend  ")
            },
            {
              title: "Restaurant Menu System",
              description: "Developed a comprehensive restaurant menu management system using NestJS framework for the backend and MongoDB for the database",
              technologies: ["Node.js", "MongoDB"],
              link: cleanLink("https://github.com/Mo963syr/restaurant-menu.git  ")
            },
            {
              title: "Bank Loan System Database",
              description: "Database management system for bank loans using Oracle engine",
              technologies: ["Oracle", "SQL Plus"],
              link: null
            }
          ],
          languages: {
            arabic: "Native",
            english: {
              listening: "B1", 
              reading: "B2",
              spokenProduction: "B1",
              spokenInteraction: "B1",
              writing: "B2"
            }
          },
          softSkills: [
            "Team work skills", 
            "Quick positive reactions in stressful environments",
            "Building goodwill in communication",
            "Professional presentation skills"
          ]
        });

        // حفظ المستند في قاعدة البيانات
        await newPortfolio.save();
        this.logger.log('✅ Portfolio data successfully created and saved to database');
      } else {
        this.logger.log('✅ Portfolio data already exists in database');
      }
    } catch (error) {
      this.logger.error('❌ Failed to initialize portfolio ', error);
      
      // محاولة ثانية بعد فترة قصيرة إذا فشلت المحاولة الأولى
      if (!error.message.includes('ECONNREFUSED')) {
        await new Promise(resolve => setTimeout(resolve, 2000));
        await this.initializePortfolioData();
      }
    }
  }

  async getPortfolio(): Promise<Portfolio> {
    try {
      const portfolio = await this.portfolioModel.findOne().exec();
      
      if (!portfolio) {
        this.logger.warn('No portfolio data found, attempting to reinitialize...');
        await this.initializePortfolioData();
        return this.getPortfolio();
      }
      
      return portfolio;
    } catch (error) {
      this.logger.error('Error retrieving portfolio data:', error);
      
      // إرجاع بيانات افتراضية مؤقتة في حالة الفشل
      return {
        name: "Moafaq Mohammed Ali Ageed",
        bio: "Portfolio data temporarily unavailable. Please try again later.",
        phone: "+963968738781",
        email: "moafagageed01@gmail.com",
        linkedin: "https://www.linkedin.com/in/moafaq-aqeed",
        experience: [],
        education: [],
        skills: {
          backend: [],
          frontend: [],
          databases: [],
          programmingLanguages: [],
          tools: []
        },
        projects: [],
        languages: {
          arabic: "Native",
          english: {
            listening: "B1",
            reading: "B2",
            spokenProduction: "B1",
            spokenInteraction: "B1",
            writing: "B2"
          }
        },
        softSkills: []
      } as unknown as Portfolio;
    }
  }
}