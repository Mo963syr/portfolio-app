import { Controller, Get } from '@nestjs/common';
import { PortfolioService } from './portfolio.service';
import { Portfolio, PortfolioDocument } from './entities/portfolio.entity';

@Controller('api')
export class PortfolioController {
  constructor(private readonly portfolioService: PortfolioService) {}

  @Get('portfolio')
  async getPortfolio(): Promise<Portfolio> {
    return this.portfolioService.getPortfolio();
  }
}