import { Component } from '@angular/core';
import { persona } from '../persona';


@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.css']
})
export class ContadorComponent {
  persona = {
    nombre: 'Hella',
    apellido: 'G',
    edad:20
  }
  numero:number = 1;
  incrementar(){
    this.numero++;
  }
  decrementar(){
    this.numero--;
  }
  button_disabled:boolean = false;
  img1:string = "https://img.bekiamascotas.com/articulos/95000/95015/7.jpg";
  img2:string = "https://s1.ppllstatics.com/lasprovincias/www/multimedia/202112/22/media/cortadas/gato-fotolia-k8eH-U160340519019xEE-624x385@Las%20Provincias.jpg";
}
