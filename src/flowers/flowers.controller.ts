import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { FlowersService } from './flowers.service';
import { ParseIntPipe } from 'src/conception/pipe';
// import { AuthGuard } from 'src/conception/guard';

@Controller('flowers')
export class FlowersController {
  constructor(private readonly flowersService: FlowersService) {}

  @Get()
  // @UseGuards(AuthGuard)
  findAll(@Query('pageNumber', ParseIntPipe) pageNumber: number) {
    console.log(pageNumber);
    return this.flowersService.findAll();
  }
  @Post()
  coordinates(@Body() body: { latitude: number; longitude: number }) {
    const { latitude, longitude } = body;
    return {
      message: 'Coordinates received successfully',
      data: { latitude, longitude },
    };
  }
}
