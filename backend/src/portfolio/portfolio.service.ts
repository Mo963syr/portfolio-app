import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Portfolio, PortfolioDocument } from './entities/portfolio.entity';

@Injectable()
export class PortfolioService {
  constructor(
    @InjectModel(Portfolio.name) private portfolioModel: Model<PortfolioDocument>,
  ) {}

  async getPortfolio(): Promise<Portfolio> {
    let portfolio = await this.portfolioModel.findOne().exec();
    
    if (!portfolio) {
      portfolio = await this.portfolioModel.create({
        name: "Moafaq Mohammed Ali Ageed",
        birthDate: "01/01/2003",
        bio: "I'm a fifth-year Informatics student specializing in Software Engineering, with practical experience in backend development using Node.js and MongoDB database, and developed responsive Flutter interfaces.",
        phone: "+963968738781",
        email: "moafagageed01@gmail.com",
        linkedin: "https://www.linkedin.com/in/moafaq-aqeed",
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
            link: "https://github.com/Mo963syr/Blood-bridge-app.git"
          },
          {
            title: "Sales Representative",
            period: "Ongoing",
            company: "Alshami Store - Selling car parts",
            description: [
              "Experienced in trading, selling and insuring auto parts to customers"
            ]
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
        skills: [
          "Node.js", "MongoDB", "Flutter & Dart", "HTML/CSS", 
          "Java (OOP)", "SQL Server", "SQL Plus", "JSON Parsing",
          "MVC Patterns", "Postman", "Microsoft Office", "C++ (Beginner)"
        ],
        projects: [
          {
            title: "Blood Bridge App",
            description: "A comprehensive blood donation management system",
            technologies: ["Node.js", "MongoDB"],
            link: "https://github.com/Mo963syr/Blood-bridge-app.git"
          },
          {
            title: "Bank Loan System Database",
            description: "Database management system for bank loans using Oracle engine",
            technologies: ["Oracle", "SQL Plus"]
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
    }
    
    return portfolio;
  }
}