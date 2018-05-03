import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import {NgxPaginationModule} from 'ngx-pagination';

import { AppComponent } from './app.component';
import { VeiculoComponent } from './veiculos/veiculo.component';
import { AddEditComponent } from './add-edit/add-edit.component';
import { VeiculoService } from './service/veiculo.service';
import { AppRoutingModule }  from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    VeiculoComponent,
    AddEditComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    NgxPaginationModule,
    FormsModule, ReactiveFormsModule,
		AppRoutingModule,
    CommonModule
  ],
  providers: [VeiculoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
