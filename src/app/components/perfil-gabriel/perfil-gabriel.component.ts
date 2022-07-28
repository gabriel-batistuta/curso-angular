import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-perfil-gabriel',
  templateUrl: './perfil-gabriel.component.html',
  styleUrls: ['./perfil-gabriel.component.css']
})
export class PerfilGabrielComponent implements OnInit {

  @Input() dados_do_estudante = {
    name : 'Gabriel Batistuta',
    function: 'Estudante',
    age: 18,
    turno: 'Integral',
    curso: 'Ciência da Computação'
  }
  constructor() { }

  ngOnInit(): void {
  }

}
