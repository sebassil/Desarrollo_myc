import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../servicios/usuario.service';
import { Usuario } from '../../Modelo/Usuario';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  
  usuarioA: Usuario= new Usuario();
  constructor(public usuarioSer:UsuarioService) { }
  
  ngOnInit(): void {
    this.usuarioA = this.usuarioSer.usuarioActivo;
    this.usuarioA.nombre
    console.log(this.usuarioA.nombre)
  }

}
