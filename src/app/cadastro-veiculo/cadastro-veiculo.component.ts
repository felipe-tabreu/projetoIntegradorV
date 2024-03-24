import { Component } from '@angular/core';

@Component({
  selector: 'app-cadastro-veiculo',
  templateUrl: './cadastro-veiculo.component.html',
  styleUrl: './cadastro-veiculo.component.css'
})
export class CadastroVeiculoComponent {

  selectedMarca: string = '';
  selectedModelo: string = '';
  modelos: string[] = [];

  atualizarModelos() {
    if (this.selectedMarca === 'Fiat') {
      this.modelos = ['Palio', 'Uno', 'Fiorino'];
    } else if (this.selectedMarca === 'Chevrolet') {
      this.modelos = ['Onix', 'Prisma', 'Cruze'];
    } else {
      this.modelos = [];
    }
  }



  }



