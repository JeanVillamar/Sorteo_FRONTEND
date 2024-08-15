import { Component } from '@angular/core';

@Component({
  selector: 'app-planes',
  templateUrl: './planes.component.html',
  styleUrls: ['./planes.component.css']
})
export class PlanesComponent {



  constructor() { }

  ngOnInit(): void {
    // Animar la imagen al cargar la página
    const image = document.querySelector('.social-icons') as HTMLElement;
    if (image) {
      setTimeout(() => {
        image.style.bottom = '20px'; // Mover la imagen hacia abajo
        document.querySelector('.top-section')?.classList.add('fade-in'); // Mostrar el fondo
      }, 500); // Ajusta el tiempo según sea necesario
    }
  }

  expandedPlan: string | null = null;

  expandPlan(plan: string) {
    this.expandedPlan = plan;
  }

  collapsePlan(plan: string) {
    if (this.expandedPlan === plan) {
      this.expandedPlan = null;
    }
  }

  getDynamicStyles(plan: string) {
    if (this.expandedPlan === plan) {
      return {
        'animation': 'expandToCenter 0.5s forwards',
        'animation-fill-mode': 'forwards'
      };
    }
    return {};
  }

  

}
