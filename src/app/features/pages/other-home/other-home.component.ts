import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-other-home',
  templateUrl: './other-home.component.html',
  styleUrls: ['./other-home.component.css']
})
export class OtherHomeComponent {
  mostrarNavbar: boolean = true;

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.route.fragment.subscribe(fragment => {
      if (fragment) {
        setTimeout(() => {
          const element = document.getElementById(fragment);
          if (element) {
            const offset = 70; // Ajusta el offset según sea necesario
            window.scrollTo({
              top: element.getBoundingClientRect().top + window.pageYOffset - offset,
              behavior: 'smooth'
            });
          }
        }, 0); // Usar setTimeout para asegurar que el contenido se renderice primero
      }
    });
  }
}
