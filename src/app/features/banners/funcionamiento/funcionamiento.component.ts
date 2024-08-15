import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-funcionamiento',
  templateUrl: './funcionamiento.component.html',
  styleUrls: ['./funcionamiento.component.css']
})
export class FuncionamientoComponent {
  @Input() mostrarNavbar: boolean = true;
  activeTooltip: string | null = null;

  showTooltip(tooltip: string) {
    this.activeTooltip = tooltip;
  }

  hideTooltip() {
    this.activeTooltip = null;
  }
}
