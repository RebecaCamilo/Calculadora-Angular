import { inject, TestBed } from '@angular/core/testing';

import { CalculadoraService } from './calculadora.service';

describe('CalculadoraService', () => {
  let service: CalculadoraService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalculadoraService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('deve garantir ONDE 1 + 4 = 5', () => {
    let soma = service.calcular(1, 4, CalculadoraService.SOMA);
    expect(soma).toEqual(5);
  });

  it('deve garantir ONDE 1 - 4 = -3', () => {
    let sub = service.calcular(1, 4, CalculadoraService.SUBTRACAO);
    expect(sub).toEqual(-3);
  });

  it('deve garantir ONDE 1 * 4 = 4', () => {
    let mult = service.calcular(1, 4, CalculadoraService.MULTIPLICACAO);
    expect(mult).toEqual(4);
  });
  
  it('deve garantir ONDE 1 / 4 = 0.25', () => {
    let div = service.calcular(1, 4, CalculadoraService.DIVISAO);
    expect(div).toEqual(0.25);
  });

  it('deve retornar 0 para operação inválida', () => {
    let opInvalida = service.calcular(1, 4, '%');
    expect(opInvalida).toEqual(0);
  });
});
