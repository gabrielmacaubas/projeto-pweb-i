import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class MensagemService {
  constructor(private snackBar: MatSnackBar) { }

  success(mensagem: string): void {
    this.abrirSnackBar(mensagem, ['success']);
  }

  error(mensagem: string): void {
    this.abrirSnackBar(mensagem, ['error']);
  }

  info(mensagem: string): void {
    this.abrirSnackBar(mensagem, ['info']);
  }

  private abrirSnackBar(mensagem: string, classesExtras: string[]): void {
    const snackConfig = new MatSnackBarConfig();
    snackConfig.politeness = 'assertive';
    snackConfig.duration = 5000;
    snackConfig.panelClass = classesExtras;

    this.snackBar.open(mensagem, 'X', snackConfig);
  }
}
