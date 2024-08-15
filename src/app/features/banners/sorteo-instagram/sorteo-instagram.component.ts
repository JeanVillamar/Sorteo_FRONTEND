import { Component } from '@angular/core';

@Component({
  selector: 'app-sorteo-instagram',
  templateUrl: './sorteo-instagram.component.html',
  styleUrls: ['./sorteo-instagram.component.css']
})
export class SorteoInstagramComponent {
  onInput(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    if (inputElement.value) {
      inputElement.classList.add('has-content');
    } else {
      inputElement.classList.remove('has-content');
    }
  }
}
