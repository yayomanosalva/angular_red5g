import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ParrafoComponent } from './component/parrafo/parrafo.component';
import { ProgressComponent } from './component/parrafo/progress/progress.component';
import { CardsComponent } from './component/parrafo/cards/cards.component';
import { ChecksComponent } from './component/parrafo/checks/checks.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NavbarComponent } from './component/shared/navbar/navbar.component';
import { FormularioComponent } from './component/formulario/formulario.component';

@NgModule({
  declarations: [
    AppComponent,
    ParrafoComponent,
    ProgressComponent,
    CardsComponent,
    ChecksComponent,
    NavbarComponent,
    FormularioComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FontAwesomeModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
