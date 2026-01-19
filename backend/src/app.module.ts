import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PortfolioModule } from './portfolio/portfolio.module';

@Module({
  imports: [
    MongooseModule.forRoot(process.env.MONGODB_URI || "mongodb+srv://menuapp:qr7aXaG8rfSA1ERo@menuapp.mggtsul.mongodb.net/portfolio_db?retryWrites=true&w=majority&appName=portfolio-app"),
    PortfolioModule
  ],
})

export class AppModule {}