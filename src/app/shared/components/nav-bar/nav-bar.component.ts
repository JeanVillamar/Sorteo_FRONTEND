import { Component } from '@angular/core';
import { PostsComponent } from '../../../features/pages/posts/posts.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {
  userName: string = 'Usuario';
  constructor(private router: Router) {}

  goToContactos() {
    this.router.navigate(['/other-home'], { fragment: 'contactos' });
  }
}
