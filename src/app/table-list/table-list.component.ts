import { IdentificadorService } from './../servicios/identificador.service';
import { AccesoService } from './../servicios/acceso.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.css']
})
export class TableListComponent implements OnInit {
  choferes:any;
  selectedRow:number=0;
  constructor(
    private Router:Router, 
    private servicio:AccesoService, 
    private identificador:IdentificadorService
    ) { }

  ngOnInit() {
    this.llenar_choferes();
  }

  licencias(){
    if(this.selectedRow==0){
      Swal.fire('Seleccione un Chofer','','error')
    }else{
      this.Router.navigateByUrl("typography")
    }
    
  }
  llenar_choferes(){
    let body={
      'accion': 'consultar_choferes'
    }
    return new Promise(resolve=>{
      this.servicio.postData(body).subscribe((res:any)=>{
        if(res.estado){
          this.choferes=res.datos;
          console.log(this.choferes);
        }else{
        }
      }, (err)=>{
        Swal.fire('Error','Error de conexión','error');
      });
    });
  }
  obtener_id(chofer){
    this.selectedRow=chofer;
    this.identificador.id_choferes=this.selectedRow
    console.log(this.identificador.id_choferes);
  }
}
