import { Component, OnInit } from '@angular/core';
import { Empresas } from 'src/app/models/empresa.model';
import { EmpresaService } from 'src/app/services/empresa.service';
import { UsuarioService } from 'src/app/services/usuario.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-agg-empresa',
  templateUrl: './agg-empresa.component.html',
  styleUrls: ['./agg-empresa.component.scss'],
  providers: [EmpresaService, UsuarioService]
})
export class AggEmpresaComponent implements OnInit {

  public empresasModelGet: Empresas;
  public empresasModelPost: Empresas;
  public token;

  constructor(private _empresasService: EmpresaService,
    private _usuarioService: UsuarioService) {
    this.empresasModelPost= new Empresas(
    '',
    '',
    '',
    '',
    [{
      nombre:'',
      ubicacion:''
    }])
    this.token=this._usuarioService.getToken()
   }

  ngOnInit(): void {
  }

  getEmpresas(){
    this._empresasService.obtenerEmpresa(/*this.token*/).subscribe(
      (response) => {
        this.empresasModelGet= response.empresas;
        console.log(response.empresas);
      },
      (error) => {
        console.log(<any>error);
        Swal.fire({ position: 'top-end', icon: 'error', title: 'Error al agregar el producto', showConfirmButton: false, timer: 1500 })

      }
    )
  }

  postEmpresas(){
    this._empresasService.agregarEmpresa(this.empresasModelPost).subscribe(
      (response)=>{
        console.log(response);
        this.getEmpresas();
        this.empresasModelPost.nombre='';
        this.empresasModelPost.descripcion='';
        this.empresasModelPost.ubicacion='';
      },
      (error) => {
        console.log(<any>error);
        Swal.fire({ position: 'top-end', icon: 'error', title: 'Producto agregado correctamente', showConfirmButton: false, timer: 1500 })
      }
    )
  }


deleteEmpresa(id){
  this._empresasService.eliminarEmpresa(id).subscribe(
    (response) => {
      console.log(response);
      this.getEmpresas();
    },
    (error) => {
      console.log(<any>error);
    }
  )
}

}
