import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directiva',
  templateUrl: './directiva.component.html',
  styleUrls: ['./directiva.component.css']
})
export class DirectivaComponent implements OnInit {

  listaLenguaje: String[] = ['typescript', 'javascript', 'java', 'C#'];

  habilitar: boolean = true;

  setHabilitar(): void{
    this.habilitar = (this.habilitar==true)? false: true;
  }

  constructor() { }

  ngOnInit() {
  }

}
