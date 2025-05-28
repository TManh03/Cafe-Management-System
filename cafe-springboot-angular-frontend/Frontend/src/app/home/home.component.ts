import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { SignupComponent } from '../signup/signup.component';
import { ForgotPasswordComponent } from '../forgot-password/forgot-password.component';
import { LoginComponent } from '../login/login.component';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';
import { error } from 'console';
import { DialogService } from '../services/dialog.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private dialog:MatDialog,
    private userServices:UserService,
    private router:Router,
    private dialogService: DialogService
  ) { }

  ngOnInit(): void {
    this.userServices.checkToken().subscribe((response:any)=>{
      this.router.navigate(['/cafe/dashboard']);
    },(error:any)=>{
      console.log(error);
    })
  }

  openLogin() {
    const ref = this.dialogService.openLogin();
    ref.componentInstance.openSignup.subscribe(() => {
      ref.close();
      this.openSignup();
    });
    ref.componentInstance.openForgotPassword.subscribe(() => {
      ref.close();
      this.openForgotPassword();
    });
  }

  openSignup() {
    const ref = this.dialogService.openSignup();
    ref.componentInstance.openLogin.subscribe(() => {
      ref.close();
      this.openLogin();
    });
  }

  openForgotPassword() {
    this.dialogService.openForgotPassword();
  }

}
