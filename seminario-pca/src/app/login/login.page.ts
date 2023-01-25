import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { ServicesPage } from '../services/services.page';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  loginForm: FormGroup;
  validation_message = {
    email: [
      { type: "required", message: "El email es un dato obligatorio" },
      { type: "pattern", message: "El email ingresado no es valido" }
    ]
  }

  validation_message_password = {
    password: [
      { type: "required", message: "La contraseña es un dato obligatorio" }
    ]
  }

  errorMessage: any;

  constructor(private router: Router,private formBuilder: FormBuilder, 
    private auth: ServicesPage, 
    private navCtrl: NavController,
    private storage: Storage
    ) { 

    this.loginForm = this.formBuilder.group({
      email: new FormControl(
        "",
        Validators.compose([
          Validators.required,
          Validators.pattern("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$")
        ])
      ),
      password: new FormControl(
        "",
        Validators.compose([
          Validators.required,
          Validators.minLength(5)
        ])
      )
    });
  }

  ngOnInit() {
  }

  loginUser(credentials: any) {
    console.log(credentials);
    this.auth.loginUser(credentials).then( res => {
      this.errorMessage = "";
      this.storage.set("isUserLoggedIn", true);
      this.navCtrl.navigateForward("/menu/home");
    }).catch(err => {
      this.errorMessage = err
    });
  }

  registerUser(){
    this.router.navigateByUrl("/register");
  }

}