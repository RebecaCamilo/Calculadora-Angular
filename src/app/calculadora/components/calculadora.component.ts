import { Component, OnInit } from '@angular/core';
import { CalculadoraService } from '../services';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent implements OnInit {

  // a injeção de dependencia se dá dentro do construtor
  // o typescript irá criar automaticamente um atributo para a nossa classe chamado calculadoraService do tipo CalculadoraService que poderá ser utilizado em qualquer metodo desta classe por meio do 'this'
  constructor(private calculadoraService: CalculadoraService) { }

  ngOnInit(): void {
    // this.calculadoraService.metodos a utilizar()
  }

}
