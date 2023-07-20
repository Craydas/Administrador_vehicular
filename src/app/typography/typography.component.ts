import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { IdentificadorService } from './../servicios/identificador.service';
import { AccesoService } from './../servicios/acceso.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-typography',
  templateUrl: './typography.component.html',
  styleUrls: ['./typography.component.css']
})
export class TypographyComponent implements OnInit {
  licencia: any='Seleccione tipo de licencia'
  tipo: any;
  constructor(
    private servicio:AccesoService,
    private identificador:IdentificadorService,
    private Router:Router
  ) { }

  ngOnInit() {
  }
  C1(){
    this.tipo='Licencia tipo C1';
    this.licencia=this.tipo;
  }
  E(){
    this.tipo='Licencia tipo E';
    this.licencia=this.tipo;
  }
  G(){
    this.tipo='Licencia tipo G';
    this.licencia=this.tipo;
  }
  licencias(){
    let body={
      'accion': 'actualizar_licencia',
      'licencia': this.licencia,
      'id_empleado': this.identificador.id_choferes
    }
    return new Promise(resolve=>{
      this.servicio.postData(body).subscribe((res:any)=>{
        if(res.estado){
          console.log(this.identificador.id_choferes,'  -  ', this.licencia)
          Swal.fire('Licencia actualizada con exito','','success')
          this.Router.navigateByUrl("table-list")
        }else{
          Swal.fire('Error al actualizar licencia');
        }
      }, (err)=>{
        Swal.fire('Error','Error de conexión','error');
      });
    });
  }
}
