import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro-cliente',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './cadastro-cliente.component.html',
  styleUrl: './cadastro-cliente.component.css'
})
export class CadastroClienteComponent {

  constructor(private router: Router) { }

  concluirCadastroCliente() {
    // Aqui você pode adicionar lógica para salvar o cliente, se necessário
    // Após o cadastro do cliente ser concluído, navegue para a tela de cadastro de veículo
    this.router.navigate(['/cadastro-veiculo']);
  }
}