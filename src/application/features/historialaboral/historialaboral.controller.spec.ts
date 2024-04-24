import { Test, TestingModule } from '@nestjs/testing';
import { HistorialaboralController } from './historialaboral.controller';
import { HistorialaboralService } from './historialaboral.service';

describe('HistorialaboralController', () => {
  let controller: HistorialaboralController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HistorialaboralController],
      providers: [HistorialaboralService],
    }).compile();

    controller = module.get<HistorialaboralController>(HistorialaboralController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
