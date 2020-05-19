import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from 'src/app/login-registration/login/login.component';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor(private matDialog: MatDialog) {
  }

  login() {
    this.matDialog.open(LoginComponent, {
      panelClass: 'loginModalDialog',
      height: '100px',
      width: '100%',
      hasBackdrop: true
    });
  }
}