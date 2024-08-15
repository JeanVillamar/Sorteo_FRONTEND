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
  highlightedIndex: number = -1;
  showWinnersMessage: boolean = false;

  constructor(private authService: AuthService) {}

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
    // Algún método que quieran usar
  }

  removePublication(index: number) {
    this.publications.splice(index, 1);
  }

  startHighlightAnimationForWinner(winnerIndex: number, callback: () => void) {
    let cycles = 0;
    const maxCycles = 2;
    let index = 0;
    const delayBeforeMarking = 1000; // Retraso de 1 segundo antes de marcar

    this.highlightedIndex = -1;
    this.showPopup = true;

    const interval = setInterval(() => {
      this.highlightedIndex = index;

      if (index === winnerIndex && cycles >= maxCycles) {
        clearInterval(interval);
        
        // Espera un tiempo antes de marcar al ganador y mostrar el mensaje
        setTimeout(() => {
          this.highlightedIndex = -1;
          callback();
        }, delayBeforeMarking);
        
        return;
      }

      index++;

      if (index >= this.participants.length) {
        index = 0;
        cycles++;
      }
    }, 200);
  }

  startHighlightAnimationForWinners(currentWinnerIndex: number = 0) {
    if (currentWinnerIndex >= this.numWinners || currentWinnerIndex >= this.winners.length) {
      this.showWinnersMessage = true;
      return;
    }

    const winnerName = this.winners[currentWinnerIndex];
    const winnerIndex = this.participants.findIndex(
      (participant) => participant.name === winnerName
    );

    this.startHighlightAnimationForWinner(winnerIndex, () => {
      // Marcar al ganador como checked después de la animación
      this.participants[winnerIndex].checked = true;
      this.startHighlightAnimationForWinners(currentWinnerIndex + 1);
    });
  }

  randomSelection() {
    this.winners = [];
    this.showPopup = false;
    this.showWinnersMessage = false;

    const availableParticipants = this.participants.filter(participant => !participant.checked);
    if (availableParticipants.length > 0) {
      for (let i = 0; i < this.numWinners && availableParticipants.length > 0; i++) {
        const randomIndex = Math.floor(Math.random() * availableParticipants.length);
        const winner = availableParticipants.splice(randomIndex, 1)[0];
        this.winners.push(winner.name);
      }

      // Start animation and mark winners only after animation ends
      this.startHighlightAnimationForWinners();
    } else {
      console.log('No hay suficientes participantes disponibles para seleccionar.');
    }
  }

  closePopup() {
    this.showPopup = false;
  }
}
