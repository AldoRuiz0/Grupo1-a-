import { Component, OnInit } from '@angular/core';
import { Empresas } from 'src/app/models/empresa.model';
import { EmpresaService } from 'src/app/services/empresa.service';

@Component({
  selector: 'app-agregar-empresa',
  templateUrl: './agregar-empresa.component.html',
  styleUrls: ['./agregar-empresa.component.scss'],
  providers: [EmpresaService]
})
export class AgregarEmpresaComponent implements OnInit {
  public empresaModelGet: Empresas;

  constructor(private _empresasService: EmpresaService) { }

  ngOnInit(): void {
    this.getEmpresas();

  }
  getEmpresas(){
    this._empresasService.obtenerEmpresa().subscribe(
      (response) =>{
        console.log(response.Empresa);

      },
      (error) =>{
        console.log(<any>error);

      }
    )
  }

}
