import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  token: string | null = null;
  id: string | null = null;
  name: string | null = null;

  constructor(private route: ActivatedRoute, private authService: AuthService) { }

  ngOnInit(): void {
    this.route.queryParamMap.subscribe(params => {
      this.token = params.get('token');
      this.id = params.get('id');
      this.name = params.get('name');

      // Opcional: Puedes hacer una solicitud adicional al backend si necesitas más información del usuario
      if (this.token && this.id) {
        this.authService.getProfile().subscribe(response => {
          console.log('User profile:', response);
        });
      }
    });
  }
}
