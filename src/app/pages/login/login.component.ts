import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { IngresoService } from '../../servicios/ingreso.service';
import { Usuario } from '../../Modelo/Usuario';
import { UsuarioService } from '../../servicios/usuario.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formularioIngreso:FormGroup;
  usuarioTempo: Usuario= new Usuario();
  datosCorrectos:boolean=true;
  mensaje:String="";
  constructor(private ruta:Router,private formulario:FormBuilder,public ingresoSer:IngresoService,public usuarioSer:UsuarioService) { }

  ngOnInit(): void {
    this.formularioIngreso=this.formulario.group({
      correo:['',Validators.compose([
        Validators.required,Validators.email    
      ])],
      clave:['',Validators.required]
    });
  }

  ingresar(){
    if(this.formularioIngreso.valid){
      this.usuarioTempo=this.formularioIngreso.value as Usuario
      this.usuarioTempo.idUsuario=0;
      this.ingresoSer.comprobarUsuario(this.usuarioTempo).subscribe((usuarioR)=>{
        if(usuarioR.puntos==1){
          this.mensaje="Ese correo no existe, puedes crear tu cuenta gratis"
        }else if(usuarioR.puntos==2){
          this.mensaje="Contraseña incorrecta"
        }else{
          this.ingresoSer.ObtenerUsuarios().subscribe((usuarios)=>{
            for(let i in usuarios){
              if(usuarios[i].correo==this.usuarioTempo.correo){
                this.usuarioSer.usuarioActivo=usuarios[i];
                this.ruta.navigateByUrl("home")           
              }
            }
          })
        }
      });
      
    }
  }

}
