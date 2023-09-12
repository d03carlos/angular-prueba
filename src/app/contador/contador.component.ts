import { Component } from '@angular/core';

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
}
