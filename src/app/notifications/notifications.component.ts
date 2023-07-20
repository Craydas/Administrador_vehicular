import Swal from 'sweetalert2';
import { IdentificadorService } from './../servicios/identificador.service';
import { AccesoService } from './../servicios/acceso.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent implements OnInit {
  vehiculos:any;
  selectedRow:number=0;
  constructor(
    private Router:Router, 
    private servicio:AccesoService, 
    private identificador:IdentificadorService) { }
  ngOnInit() {
    this.llenar_vehiculos();
  }
  actualizar(){
    if(this.selectedRow==0){
      Swal.fire('Seleccione un Vehiculo','','error')
    }else{
      this.Router.navigateByUrl("user-profile")
    }
  }
  crear(){
    this.Router.navigateByUrl("user-profile")
  }
  llenar_vehiculos(){
    let body={
      'accion': 'consultar_vehiculos'
    }
    return new Promise(resolve=>{
      this.servicio.postData(body).subscribe((res:any)=>{
        if(res.estado){
          this.vehiculos=res.datos;
          console.log(this.vehiculos);
        }else{
        }
      }, (err)=>{
        Swal.fire('Error','Error de conexión','error');
      });
    });
  }
  obtener_id(vehiculo){
    this.selectedRow=vehiculo;
    this.identificador.id_vehiculos=this.selectedRow
    console.log(this.identificador.id_vehiculos);
  }
}
