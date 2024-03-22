import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroClienteComponent } from './cadastro-cliente/cadastro-cliente.component';
import { CadastroVeiculoComponent } from './cadastro-veiculo/cadastro-veiculo.component';

const routes: Routes = [
  { path: 'cadastro-cliente', component: CadastroClienteComponent },
  { path: 'cadastro-veiculo', component: CadastroVeiculoComponent },
  { path: '', redirectTo: '/cadastro-cliente', pathMatch: 'full' },
  { path: '**', redirectTo: '/cadastro-cliente' } // Rota de fallback, caso a rota não seja encontrada
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
