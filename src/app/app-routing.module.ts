import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroClienteComponent } from './cadastro-cliente/cadastro-cliente.component';
import { CadastroVeiculoComponent } from './cadastro-veiculo/cadastro-veiculo.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { TelaLoginComponent } from './Telas/tela-login/tela-login.component';

const routes: Routes = [
  {path: 'tela-login', component: TelaLoginComponent},
  { path: 'nav-bar', component: NavBarComponent },
  { path: 'cadastro-cliente', component: CadastroClienteComponent },
  { path: 'cadastro-veiculo', component: CadastroVeiculoComponent },
  { path: '', redirectTo: 'tela-login', pathMatch: 'full' }, // Rota inicial para a NavBarComponent
  { path: '**', redirectTo: 'tela-login' } // Rota de fallback, caso a rota não seja encontrada
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
