import { Component } from '@angular/core';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-sorteos',
  templateUrl: './sorteos.component.html',
  styleUrls: ['./sorteos.component.css']
})
export class SorteosComponent {
  onInput(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    if (inputElement.value) {
      inputElement.classList.add('has-content');
    } else {
      inputElement.classList.remove('has-content');
    }
  }
  participants: { name: string, checked: boolean }[] = [
    { name: 'Ana Lucia', checked: false },
    { name: 'Carlos Andres', checked: false },
    // { name: 'Maria Fernada', checked: false },
    // { name: 'Jose Miguel', checked: false }
  ];
  newParticipant: string = '';
  numWinners: number = 1;
  winners: string[] = [];
  showPopup: boolean = false;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.loadParticipantsFromFile();
  }
  loadParticipantsFromFile(): void {
    this.authService.getPhotoNames().subscribe(
      (photoNames: string[]) => {
        this.participants = photoNames.map(name => ({ name, checked: false }));
      },
      error => {
        console.error('Error al cargar los nombres de las fotos:', error);
      }
    );
  }

  addParticipant() {
    if (this.newParticipant.trim()) {
      this.participants.push({ name: this.newParticipant.trim(), checked: false });
      this.newParticipant = '';
    }
  }

  toggleCheck(index: number) {
    this.participants[index].checked = !this.participants[index].checked;
  }

  removeParticipant(index: number) {
    this.participants.splice(index, 1);
  }

  publications: { name: string }[] = [
    { name: 'Imagen.001'},
    { name: 'Imagen.002' },
    { name: 'Imagen.003'},
    { name: 'Imagen.004' }
  ];

  toggleUp() {
    // Algun metodo que quieran usar
  }

  removePublication(index: number) {
    this.publications.splice(index, 1);
  }

  selectRandomParticipant(): string | null {
    const availableParticipants = this.participants.filter(participant => !participant.checked);
    if (availableParticipants.length > 0) {
      const randomIndex = Math.floor(Math.random() * availableParticipants.length);
      return availableParticipants[randomIndex].name;
    }
    return null; // Retorna null si no hay participantes disponibles
  }

  randomSelection() {
    this.winners = [];
    this.showPopup = false; // Asegúrate de ocultar el pop-up antes de abrirlo de nuevo

    const availableParticipants = this.participants.filter(participant => !participant.checked);
    if (availableParticipants.length > 0) {
      for (let i = 0; i < this.numWinners && availableParticipants.length > 0; i++) {
        const randomIndex = Math.floor(Math.random() * availableParticipants.length);
        const winner = availableParticipants.splice(randomIndex, 1)[0];
        this.winners.push(winner.name);

        const index = this.participants.findIndex(p => p.name === winner.name);
        if (index !== -1) {
          this.participants[index].checked = true;
        }
      }
      this.showPopup = true;
    } else {
      console.log('No hay suficientes participantes disponibles para seleccionar.');
    }
  }

  closePopup() {
    this.showPopup = false;
  }

}