import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent implements OnInit {

  titulo = "Bienvenidos, esto es un ejemplo";
  personas = [
    { nombre: "Julio Gonzalez", edad: 45 },
    { nombre: "Pablo Merida", edad: 33},
    { nombre: "Carlos Oliva", edad: 12},
    { nombre: "Javie de Leon", edad: 88}
  ]
  validacion = true;


  constructor() { }

  ngOnInit(): void {
  }

}
