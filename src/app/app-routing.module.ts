import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from '../app/app.component';
import { FormularioComponent } from '../app/component/formulario/formulario.component';

const routes: Routes = [
  { path: 'home', component: AppComponent },
  { path: 'precios', component: FormularioComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
