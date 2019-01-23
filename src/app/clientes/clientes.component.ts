import { Component, OnInit } from '@angular/core';
import { Cliente } from './cliente';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html'
})
export class ClientesComponent implements OnInit {

  clientes: Cliente[] = [
    {id: 1, nombre:'Cristian',apellido:'Pardo', createAt:'2018-12-30',email:'cepardov@gmail.com'},
    {id: 2, nombre:'Victoria',apellido:'Bustamante', createAt:'2019-01-05',email:'vabustamantec@gmail.com'}
  ];

  constructor() { }

  ngOnInit() {
  }

}
