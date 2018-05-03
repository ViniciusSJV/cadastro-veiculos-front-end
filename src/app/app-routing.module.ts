import { NgModule }      from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { VeiculoComponent } from './veiculos/veiculo.component';
import { AddEditComponent } from './add-edit/add-edit.component';
import { VeiculoService } from './service/veiculo.service';

const routes: Routes = [
  { path: '', redirectTo: 'veiculos', pathMatch: 'full' },
  { path: 'veiculos', component: VeiculoComponent },
	{ path: 'add-edit/:id', component: AddEditComponent },
	{ path: 'add-edit', component: AddEditComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule{ }
