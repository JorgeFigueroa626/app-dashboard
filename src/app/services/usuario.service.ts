import { Injectable } from '@angular/core';
import { Usuarios } from '../interfaces/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  listUsuarios: Usuarios [] = [
    {usuario: 'admin', nombre: 'Jorge', apellido: 'Figueroa', sexo: 'Masculino'},
    {usuario: 'admin', nombre: 'Jorge', apellido: 'Figueroa', sexo: 'Masculino'},
    {usuario: 'secretaria', nombre: 'Martha', apellido: 'Sol', sexo: 'Femenino'},
    {usuario: 'admin', nombre: 'Jorge', apellido: 'Figueroa', sexo: 'Masculino'},
    {usuario: 'admin', nombre: 'Jorge', apellido: 'Figueroa', sexo: 'Masculino'},
    {usuario: 'secretaria', nombre: 'Martha', apellido: 'Sol', sexo: 'Femenino'},
    {usuario: 'admin', nombre: 'Jorge', apellido: 'Figueroa', sexo: 'Masculino'},
    {usuario: 'admin', nombre: 'Jorge', apellido: 'Figueroa', sexo: 'Masculino'},
    {usuario: 'secretaria', nombre: 'Martha', apellido: 'Sol', sexo: 'Femenino'},
  ];

  constructor() { }

  //RETORNA UNA COPIA DEL ESTADO USUARIO
  getUsuario(){
    return this.listUsuarios.slice();
  }
  //ELIMINAMOS DESDE LA POSICION QUE SELECCIONA
  elinminarUsuario(index:number){
    this.listUsuarios.splice(index,1);
  }

  //AGREGAMOS LOS USUARIOS
  agregarUusuario(usuario:Usuarios){
    this.listUsuarios.unshift(usuario);
  }
}
