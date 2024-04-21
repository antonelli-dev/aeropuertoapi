import { Test, TestingModule } from '@nestjs/testing';
import { CapacitacionesController } from './capacitaciones.controller';
import { CapacitacionesService } from './capacitaciones.service';

describe('CapacitacionesController', () => {
  let controller: CapacitacionesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CapacitacionesController],
      providers: [CapacitacionesService],
    }).compile();

    controller = module.get<CapacitacionesController>(CapacitacionesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
