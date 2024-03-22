import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CadastroClienteComponent } from './cadastro-cliente/cadastro-cliente.component';
import { CadastroVeiculoComponent } from './cadastro-veiculo/cadastro-veiculo.component';

// Definição das rotas
const routes: Routes = [
  { path: 'cadastro-cliente', component: CadastroClienteComponent },
  { path: 'cadastro-veiculo', component: CadastroVeiculoComponent },
  { path: '', redirectTo: '/cadastro-cliente', pathMatch: 'full' },
  { path: '**', redirectTo: '/cadastro-cliente' }
];

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CadastroClienteComponent,
    RouterModule.forRoot(routes) // Importa o módulo de roteamento e define as rotas
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
