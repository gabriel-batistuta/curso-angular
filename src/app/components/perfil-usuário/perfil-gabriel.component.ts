import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-perfil-gabriel',
  templateUrl: './perfil-gabriel.component.html',
  styleUrls: ['./perfil-gabriel.component.css']
})
export class PerfilGabrielComponent implements OnInit {

  showAdm: boolean = false; 
  show: boolean = false;
  tentativa2: boolean = false;
  @Input() dados_do_estudante = {
    name : '',
    function: '',
    age: 0,
    turno: '',
    curso: ''
  }

  @Input() dados_do_funcionario = {
    name : 'José ou Maria',
    function : 'Administrador'
  }

  return() {
      this.show = !this.show;
      if (this.showAdm == true) {
        this.showAdm = false;
      }
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

  showPerfilAdmin() {
    this.show=false
    this.dados_do_funcionario.name = 'João ou Maria';
    this.dados_do_funcionario.function = 'administrador(a)'
    this.showAdm = true; 
  }

  showPerfilJose() {
    this.showAdm=false;
    this.show=true;
    this.dados_do_estudante.name = 'José Candido';
    this.dados_do_estudante.function = 'Administrador';
    this.dados_do_estudante.age = 49;
    this.dados_do_estudante.curso = 'Medicina';
    this.dados_do_estudante.turno = 'Matutino';
  }

  showPerfilMaria() {
    this.showAdm=false;
    this.show=true;
    this.dados_do_estudante.name = 'Maria Figueiredo';
    this.dados_do_estudante.function = 'Administradora';
    this.dados_do_estudante.age = 33;
    this.dados_do_estudante.curso = 'Pedagogia';
    this.dados_do_estudante.turno = 'Vespertino';
  }

  constructor() { }

  ngOnInit(): void {
  }

}
