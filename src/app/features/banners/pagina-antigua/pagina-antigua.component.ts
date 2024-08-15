import { Component } from '@angular/core';

@Component({
  selector: 'app-pagina-antigua',
  templateUrl: './pagina-antigua.component.html',
  styleUrls: ['./pagina-antigua.component.css']
})
export class PaginaAntiguaComponent {
  createRaffle() {
    console.log('Crear Sorteo button clicked!');
    // Add navigation or other logic here
  }
}
