import { Injectable } from '@angular/core';

// A anotação injectable define que o angular consegue prover esta classe para outras classes de forma automatica (injeção de dependencia)
@Injectable({
  providedIn: 'root'
})
export class CalculadoraService {

  constructor() { }
}
