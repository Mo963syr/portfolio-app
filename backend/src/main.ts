import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as dotenv from 'dotenv';

dotenv.config();
// app.setGlobalPrefix('portfolio');
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  // CORS Configuration
 const allowedOrigins = [
  'http://localhost:5174',
  'https://moafaqaqeed.synerycode.com',
  'http://moafaqaqeed.synerycode.com',
];
app.setGlobalPrefix('portfolio');
app.enableCors({ 
  origin: (origin, callback) => {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true,
});

  const port = process.env.PORT || 3003;
  await app.listen(port);
  console.log(`Backend is running on: http://localhost:${port}`);
}
bootstrap();