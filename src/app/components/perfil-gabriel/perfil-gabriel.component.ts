import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-perfil-gabriel',
  templateUrl: './perfil-gabriel.component.html',
  styleUrls: ['./perfil-gabriel.component.css']
})
export class PerfilGabrielComponent implements OnInit {

  show: boolean = false;
  tentativa2: boolean = false;
  @Input() dados_do_estudante = {
    name : '',
    function: '',
    age: 0,
    turno: '',
    curso: ''
  }
  return() {
      this.show = !this.show;
  }
  showPerfilGabriel() {
    this.dados_do_estudante.name = 'Gabriel Batistuta';
    this.dados_do_estudante.function = 'Estudante';
    this.dados_do_estudante.age = 18;
    this.dados_do_estudante.turno = 'Integral';
    this.dados_do_estudante.curso = 'Ciência da Computação';
    this.show = true;
  }
  showPerfilJoao() {
    this.dados_do_estudante.name = 'João da Silva Filho';
    this.dados_do_estudante.function = 'Professor';
    this.dados_do_estudante.age = 26;
    this.dados_do_estudante.turno = 'Noturno';
    this.dados_do_estudante.curso = 'Matemática';
    this.show = true;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
