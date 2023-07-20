import { Router } from '@angular/router';
import { IdentificadorService } from './../servicios/identificador.service';
import { AccesoService } from './../servicios/acceso.service';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  tipoV1:any;
  tipoV2:any="Tipo de vehiculo";
  tipoC:any;
  combustible: any="Combustible"
  choferes:any
  constructor(
    private servicio:AccesoService,
    private identificador:IdentificadorService,
    private Router:Router) { }

  ngOnInit() {
  }
  liviano(){
    this.tipoV1='Liviano';
    this.tipoV2=this.tipoV1;
    let body={
      'accion': 'consultar_licencia_C1'
    }
    return new Promise(resolve=>{
      this.servicio.postData(body).subscribe((res:any)=>{
        if(res.estado){
          this.choferes=res.datos;
        }else{
          Swal.fire('Error','Error','error');
        }
      },(err)=>{
        Swal.fire('Error','Error de conexión','error');
      });
    });
  }
  pesado(){
    this.tipoV1='Maquinaria pesada';
    this.tipoV2=this.tipoV1;
    let body={
      'accion': 'consultar_licencia_G'
    }
    return new Promise(resolve=>{
      this.servicio.postData(body).subscribe((res:any)=>{
        if(res.estado){
          this.choferes=res.datos;
        }else{
          Swal.fire('Error','Error','error');
        }
      },(err)=>{
        Swal.fire('Error','Error de conexión','error');
      });
    });
  }
  motor(){
    this.tipoV1='Motorizados';
    this.tipoV2=this.tipoV1;
    let body={
      'accion': 'consultar_licencia_C1'
    }
    return new Promise(resolve=>{
      this.servicio.postData(body).subscribe((res:any)=>{
        if(res.estado){
          this.choferes=res.datos;
        }else{
          Swal.fire('Error','Error','error');
        }
      },(err)=>{
        Swal.fire('Error','Error de conexión','error');
      });
    });
  }
  carga(){
    this.tipoV1='Vehiculo de carga';
    this.tipoV2=this.tipoV1;
    let body={
      'accion': 'consultar_licencia_E'
    }
    return new Promise(resolve=>{
      this.servicio.postData(body).subscribe((res:any)=>{
        if(res.estado){
          this.choferes=res.datos;
        }else{
          Swal.fire('Error','Error','error');
        }
      },(err)=>{
        Swal.fire('Error','Error de conexión','error');
      });
    });
  }
  extra(){
    this.tipoC='Extra';
    this.combustible=this.tipoC;
  }
  super(){
    this.tipoC='Super';
    this.combustible=this.tipoC;
  }
  diesel(){
    this.tipoC='Diesel';
    this.combustible=this.tipoC;
  }
  consultarDepartamentos(){
    let body={
      'accion': 'consultar_licencia_C1'
    }
    return new Promise(resolve=>{
      this.servicio.postData(body).subscribe((res:any)=>{
        if(res.estado){
          this.choferes=res.datos;
        }else{
          Swal.fire('Error','Error','error');
        }
      },(err)=>{
        Swal.fire('Error','Error de conexión','error');
      });
    });
  }
}
