import { Component, OnInit } from '@angular/core';
import { AccesoService } from '../servicios/acceso.service';
import Swal from 'sweetalert2';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  clave:string='';
  cedula:string='';
  usuarios:any;
  nombre:any='';
  constructor(
    private servicio: AccesoService,
    private router: Router,
    ) { }

  ngOnInit(): void {
  }
  ingresar(){
    if(this.cedula==''){
      Swal.fire('Error','Ingrese la cédula','error');
    }else if(this.clave==''){
      Swal.fire('Error','Ingrese la clave','error');
    }else{
      console.log('1');
      let body={
        'accion': 'ingresar',
        'cedula': this.cedula,
        'clave' : this.clave        
      }
      console.log('2');
      return new Promise(resolve=>{
        console.log('3');
        this.servicio.postData(body).subscribe((res:any)=>{
          console.log('4');
          if(res.estado){
            console.log('5');
            this.usuarios=res.datos;
            this.servicio.usuarioId=this.usuarios[0].usuario_id;
            this.nombre=this.usuarios[0].nombre;
            console.log(this.servicio.usuarioId)
            Swal.fire('Bienvenido','' +this.nombre+ '');
            this.router.navigateByUrl("home")
          }else{
            console.log('6');
            Swal.fire('Error','Datos incorrectos','error');

          }
        },(err)=>{
          Swal.fire('Error','Error de conexión','error');
        });
      });
    }
  }
}
