import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent {
  loginForm = new FormGroup({
    email: new FormControl(''),
    senha: new FormControl(''),
  });

  cadastroForm = new FormGroup({
    email: new FormControl(''),
    senha1: new FormControl(''),
    senha2: new FormControl(''),
  });

  onSubmit() {}
}
