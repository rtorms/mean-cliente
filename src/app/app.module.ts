import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {RouterModule, Routes} from "@angular/router";

import { AppComponent } from './app.component';
import { ClienteComponent } from './cliente/cliente.component';
import { ClienteDetailComponent } from './cliente-detail/cliente-detail.component';
import { ClienteCreateComponent } from './cliente-create/cliente-create.component';
import { ClienteEditComponent } from './cliente-edit/cliente-edit.component';


const appRoutes: Routes = [

  { path: '', redirectTo: '/clientes', pathMatch: 'full'},
  { path: 'clientes', component: ClienteComponent, data: { title: 'Cliente List' }},
  { path: 'cliente-details/:id', component: ClienteDetailComponent, data: { title: 'Cliente Details' }},
  { path: 'cliente-create', component: ClienteCreateComponent, data: { title: 'Create Cliente' }},
  { path: 'cliente-edit/:id', component: ClienteEditComponent, data: { title: 'Edit Cliente' }},
];

@NgModule({
  declarations: [
    AppComponent,
    ClienteComponent,
    ClienteDetailComponent,
    ClienteCreateComponent,
    ClienteEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes, {enableTracing: true})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
