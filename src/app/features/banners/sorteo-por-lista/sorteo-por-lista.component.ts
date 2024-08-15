import { Component } from '@angular/core';

@Component({
  selector: 'app-sorteo-por-lista',
  templateUrl: './sorteo-por-lista.component.html',
  styleUrls: ['./sorteo-por-lista.component.css']
})
export class SorteoPorListaComponent {
  participantes: string[] = ['María', 'José', 'Fernando', 'Miguel'];
  // participantes: string[] = ['María', 'José', 'Fernando', 'Miguel','Daniela', 'Ana', 'Pepe'];
  nuevoParticipante: string = '';

  agregarParticipante() {
    if (this.nuevoParticipante.trim()) {
      this.participantes.push(this.nuevoParticipante.trim());
      this.nuevoParticipante = '';
    }
  }

  eliminarParticipante(index: number) {
    this.participantes.splice(index, 1);
  }

  ingresarLista() {
    console.log('Lista ingresada:', this.participantes);
  }

  subirArchivo() {
    console.log('Subir archivo');
  }

  volverASeleccionar() {
    // this.participantes = [];
  }


}
