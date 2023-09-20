import { Controller, Post, Logger, Body } from '@nestjs/common';
import { CreatePollDto, JoinPollDto } from './dtos';

@Controller('polls')
export class PollsController {
  @Post()
  async create(@Body() CreatePollDto: CreatePollDto) {
    Logger.log('In create!');
    return CreatePollDto;
  }
  @Post('/join')
  async join(@Body() JoinPollDto: JoinPollDto) {
    Logger.log('In join!');
    return JoinPollDto;
  }
  @Post('/rejoin')
  async rejoin() {
    Logger.log('In rejoin!');
  }
}
