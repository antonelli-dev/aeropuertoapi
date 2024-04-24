import { Test, TestingModule } from '@nestjs/testing';
import { HistorialaboralService } from './historialaboral.service';

describe('HistorialaboralService', () => {
  let service: HistorialaboralService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HistorialaboralService],
    }).compile();

    service = module.get<HistorialaboralService>(HistorialaboralService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
