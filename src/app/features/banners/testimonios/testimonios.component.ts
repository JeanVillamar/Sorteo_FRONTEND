import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-testimonios',
  templateUrl: './testimonios.component.html',
  styleUrls: ['./testimonios.component.css']
})
export class TestimoniosComponent {
  testimonials = [
    { name: 'Marcos López', username: '@marc0lpz', comment: 'Súper recomendado', rating: 5, img: '/assets/images/testimonios/user.png' },
    { name: 'Sofía Vela', username: '@sofi_vela', comment: 'Fácil y divertido de usar', rating: 4, img: '/assets/images/testimonios/user.png' },
    { name: 'Carlos Martínez', username: '@carlosm', comment: 'Una experiencia increíble', rating: 5, img: '/assets/images/testimonios/user.png' },
    { name: 'Ana Gómez', username: '@ana_gomez', comment: 'Lo recomiendo a todos', rating: 5, img: '/assets/images/testimonios/user.png' },
    { name: 'Laura Pérez', username: '@laura_perez', comment: 'Excelente servicio', rating: 4, img: '/assets/images/testimonios/user.png' },
    { name: 'Juan Rodríguez', username: '@juan_rodriguez', comment: 'Muy satisfecho', rating: 5, img: '/assets/images/testimonios/user.png' },
    { name: 'Marta Silva', username: '@marta_silva', comment: 'Buena atención al cliente', rating: 4, img: '/assets/images/testimonios/user.png' },
    { name: 'Luis Fernández', username: '@luis_fernandez', comment: 'Producto de calidad', rating: 5, img: '/assets/images/testimonios/user.png' },
    { name: 'Elena Torres', username: '@elena_torres', comment: 'Volveré a comprar', rating: 5, img: '/assets/images/testimonios/user.png' },
    { name: 'Pablo Sánchez', username: '@pablo_sanchez', comment: 'Muy útil y fácil de usar', rating: 4, img: '/assets/images/testimonios/user.png' }
  ];

  currentTestimonial = 0;
  testimonialsToShow = 3;
  transformValue = 0;

  @HostListener('window:resize', ['$event'])
  onResize(event:any) {
    this.testimonialsToShow = window.innerWidth <= 768 ? 2 : 3;
  }

  ngOnInit() {
    this.testimonialsToShow = window.innerWidth <= 768 ? 2 : 3;
  }

  get visibleTestimonials() {
    const end = this.currentTestimonial + this.testimonialsToShow;
    if (end <= this.testimonials.length) {
      return this.testimonials.slice(this.currentTestimonial, end);
    } else {
      return this.testimonials.slice(this.currentTestimonial).concat(this.testimonials.slice(0, end - this.testimonials.length));
    }
  }

  previousTestimonial() {
    if (this.currentTestimonial > 0) {
      this.currentTestimonial--;
    } else {
      this.currentTestimonial = this.testimonials.length - 1;
    }
  }

  nextTestimonial() {
    if (this.currentTestimonial < this.testimonials.length - 1) {
      this.currentTestimonial++;
    } else {
      this.currentTestimonial = 0;
    }
  }
}