import { Component, OnInit } from '@angular/core';
import { CalculadoraService } from '../services';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent implements OnInit {

  private n1: string;
  private n2: string;
  private resultado: number;
  private operacao: string;

  // a injeção de dependencia se dá dentro do construtor
  // o typescript irá criar automaticamente um atributo para a nossa classe chamado calculadoraService do tipo CalculadoraService que poderá ser utilizado em qualquer metodo desta classe por meio do 'this'
  constructor(private calculadoraService: CalculadoraService) { }

  ngOnInit(): void {
    // this.calculadoraService.metodos a utilizar()
    this.limpar();
  }

  /**
   * Inicializa operadores para valores padrão
   * 
   * @return void
   */
  limpar(): void {
    this.n1 = '0';
    this.n2 = null;
    this.resultado = null;
    this.operacao = null;
  }

  /**
   * Adiciona o numero selecionado para o calculo posteriormente
   * 
   * @param n 
   * @return void
   */
  addNumero(n: string): void {
    if(this.operacao === null) this.n1 = this.concatenarNumero(this.n1, n);
    else this.n2 = this.concatenarNumero(this.n2, n);
  }

  /**
   * Retorna valor concatenado. Trata valor decimal
   * 
   * @param string nAtual 
   * @param string nConcat 
   * @returns string
   */
  concatenarNumero(nAtual: string, nConcat: string): string {
    // caso contenha apenas '0' ou null, reinicia o valor
    if (nAtual === '0' || nAtual === null) nAtual = '';
    // primeiro digito é '.', deve concatenar 0 antes do ponto
    if (nConcat === '.' && nAtual === '') return '0.';
    // caso '.' é digitado e já tenha um '.', apenas retorna
    if (nConcat === '0' && nAtual.indexOf('.') > -1) return nAtual;
    // else
    return nAtual + nConcat;
  }

  /**
   * Executa logica quando um operador for selecionado.
   * Caso ja possua operacao selecionada, executa a opoeracao anterior e define a nova operação.
   * 
   * @param string operacao 
   * @returns void
   */
  defOperacao(operacao: string): void {
    // define operacao caso nao exista uma
    if (this.operacao === null) {
      this.operacao = operacao;
      return;
    }
    // se operacao definida e n2 != null, efetue calculo
    if (this.n2 !== null) {
      this.resultado = this.calculadoraService.calcular(
        parseFloat(this.n1),
        parseFloat(this.n2),
        this.operacao);
      this.operacao = operacao;
      this.n1 = this.resultado.toString();
      this.n2 = null;
      this.resultado = null;
    }
  }

  calcular(): void {
    if (this.n2 === null) {
      return;
    }
    this.resultado = this.calculadoraService.calcular(
      parseFloat(this.n1),
      parseFloat(this.n2),
      this.operacao);
  }

  /**
   * Retorna o valor a ser exibido no display da calculadora
   * 
   * @returns string
   */
  get display(): string {
    if (this.resultado !== null) return this.resultado.toString();
    if (this.n2 !== null) return this.n2;
    //else
    return this.n1;
  }
  
}
