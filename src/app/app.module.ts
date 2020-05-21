import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';

import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';

import { InicioComponent } from './pages/inicio/inicio.component';
import { SomosComponent } from './pages/inicio/somos/somos.component';
import { OfertasComponent } from './pages/inicio/ofertas/ofertas.component';
import { MenuComponent } from './pages/inicio/menu/menu.component';
import { LoginComponent } from './pages/login/login.component';
import { EntradaComponent } from './pages/inicio/entrada/entrada.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    InicioComponent,
    SomosComponent,
    OfertasComponent,
    MenuComponent,
    LoginComponent,
    EntradaComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    RouterModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
