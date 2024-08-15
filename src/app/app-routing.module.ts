import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';
import { HomeComponent } from './features/pages/home/home.component';
import { PostsComponent } from './features/pages/posts/posts.component';
import { OtherHomeComponent } from './features/pages/other-home/other-home.component';
import { LoginComponent } from './features/auth/login/login.component';
import { PlanesComponent} from './features/pages/planes/planes.component';
import { FuncionamientoComponent } from './features/banners/funcionamiento/funcionamiento.component';
import { UsadasComponent } from './features/banners/usadas/usadas.component';
import { MisSorteosComponent } from './features/banners/mis-sorteos/mis-sorteos.component';
import { HistorialComponent } from './features/banners/historial/historial.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'other-home', component: OtherHomeComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'posts', component: PostsComponent },
  { path: 'planes', component: PlanesComponent },
  { path: 'funcionamiento', component: FuncionamientoComponent},
  { path: 'usadas', component: UsadasComponent},
  { path: 'missorteos', component: MisSorteosComponent},
  { path: 'historial', component: HistorialComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // Pagina principal
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
