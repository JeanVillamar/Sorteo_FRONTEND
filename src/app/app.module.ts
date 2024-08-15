import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AuthGuard } from './core/guards/auth.guard';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './features/auth/login/login.component';
import { HomeComponent } from './features/pages/home/home.component';
import { PostsComponent } from './features/pages/posts/posts.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { PlanesComponent } from './features/pages/planes/planes.component';
import { PaginaAntiguaComponent } from './features/banners/pagina-antigua/pagina-antigua.component';
import { FuncionamientoComponent } from './features/banners/funcionamiento/funcionamiento.component';
import { SorteoInstagramComponent } from './features/banners/sorteo-instagram/sorteo-instagram.component';
import { TestimoniosComponent } from './features/banners/testimonios/testimonios.component';
import { NosotrosComponent } from './features/banners/nosotros/nosotros.component';
import { ContactosComponent } from './features/banners/contactos/contactos.component';
import { SorteosComponent } from './features/banners/sorteos/sorteos.component';
import { UsadasComponent } from './features/banners/usadas/usadas.component';
import { MisSorteosComponent } from './features/banners/mis-sorteos/mis-sorteos.component';
import { HistorialComponent } from './features/banners/historial/historial.component';
import { SorteoPorListaComponent } from './features/banners/sorteo-por-lista/sorteo-por-lista.component';
import { SorteoActualComponent } from './features/banners/sorteo-actual/sorteo-actual.component';
import { NavBarComponent } from './shared/components/nav-bar/nav-bar.component';
import { OtherHomeComponent } from './features/pages/other-home/other-home.component'



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    PostsComponent,
    NavbarComponent,
    PlanesComponent,
    PaginaAntiguaComponent,
    FuncionamientoComponent,
    SorteoInstagramComponent,
    TestimoniosComponent,
    NosotrosComponent,
    ContactosComponent,
    SorteosComponent,
    UsadasComponent,
    MisSorteosComponent,
    HistorialComponent,
    SorteoPorListaComponent,
    SorteoActualComponent,
    NavBarComponent,
    OtherHomeComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
