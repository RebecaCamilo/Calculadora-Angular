/**
 * Serviço responsavel por executar as funções da calculadora.
 * 
 * @author Curso de Angular
 * @since 1.0.0
*/

import { Injectable } from '@angular/core';

// A anotação injectable define que o angular consegue prover esta classe para outras classes de forma automatica (injeção de dependencia)
@Injectable({
  providedIn: 'root'
})
export class CalculadoraService {

  static readonly SOMA: string = "+";
  static readonly SUBTRACAO: string = "-";
  static readonly DIVISAO: string = "/";
  static readonly MULTIPLICACAO: string = "*";

  constructor() { }

  /**
   * Metodo que calcula uma operação matematica dado dois numbers.
   * @param n1 : number
   * @param n2 : number
   * @param operacao : string
   * @returns resultado : number
   */
  calcular(n1: number, n2: number, operacao: string): number {
    let resultado: number;

    switch(operacao) {
      case CalculadoraService.SOMA:
        return resultado = n1 + n2;
      case CalculadoraService.SUBTRACAO:
        return resultado = n1 - n2;
      case CalculadoraService.DIVISAO:
        return resultado = n1 / n2;
      case CalculadoraService.MULTIPLICACAO:
        return resultado = n1 * n2;
      default:
        return resultado = 0;
    }
  }

}
