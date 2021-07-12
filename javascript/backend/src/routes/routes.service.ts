import { Injectable } from '@nestjs/common';
import { CreateRouteDto } from './dto/create-route.dto';
import * as routesData from './sample.json';

@Injectable()
export class RoutesService {
  findAll() {
    return routesData;
  }
}
