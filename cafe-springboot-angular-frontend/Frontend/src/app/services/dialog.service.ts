import { Injectable } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { LoginComponent } from '../login/login.component';
import { SignupComponent } from '../signup/signup.component';
import { ForgotPasswordComponent } from '../forgot-password/forgot-password.component';

@Injectable({ providedIn: 'root' })
export class DialogService {
  constructor(private dialog: MatDialog) {}

  openLogin() {
    const dialogConfig = new MatDialogConfig(); dialogConfig.width = '550px';
    return this.dialog.open(LoginComponent, dialogConfig);
  }

  openSignup() {
    const dialogConfig = new MatDialogConfig(); dialogConfig.width = '550px';
    return this.dialog.open(SignupComponent, dialogConfig);
  }

  openForgotPassword() {
    const dialogConfig = new MatDialogConfig(); dialogConfig.width = '550px';
    return this.dialog.open(ForgotPasswordComponent, dialogConfig);
  }
}
