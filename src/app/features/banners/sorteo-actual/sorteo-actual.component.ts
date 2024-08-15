import { Component } from '@angular/core';

interface Sorteo {
  fecha: string;
  premio: string;
  ganador: string;
  descripcion: string;
  imagen: string;
}

@Component({
  selector: 'app-sorteo-actual',
  templateUrl: './sorteo-actual.component.html',
  styleUrls: ['./sorteo-actual.component.css']
})
export class SorteoActualComponent {
  sorteo: Sorteo = {
    fecha: '19/06/2024',
    premio: 'iPhone 13',
    ganador: 'María Vela',
    descripcion: 'Sorteo realizado entre todos los participantes que comentaron en nuestra publicación de Facebook.',
    imagen: 'assets/images/sorteo-actual/iphone.jpg'
  };
}
