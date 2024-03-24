import { Component } from '@angular/core';
import { NgModel } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-usuario',
  templateUrl: './login-usuario.component.html',
  styleUrls: ['./login-usuario.component.css']
})
export class LoginUsuarioComponent {

  cpf: string = '';
  senha: string = '';

  constructor(private router: Router) {}



  doLogin(): void {
    if (true) {
      this.router.navigate(['/nav-bar']); // Redireciona para a rota da NavBar
    } else {
      alert('CPF ou senha incorretos');
    }
  }
}
