import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup,Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { ServicesPage } from '../services/services.page';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  registerForm: FormGroup;

  validation_message_name = {
    name: [
      { type: "required", message: "El nombre es un dato obligatorio" }
    ]
  }

  validation_message_lastname = {
    last_name: [
      { type: "required", message: "El apellido es un dato obligatorio" }
    ]
  }

  validation_message_document_type = {
    document_type: [
      { type: "required", message: "El tipo de documento es un dato obligatorio" }
    ]
  }

  validation_message_document_number = {
    document_number: [
      { type: "required", message: "El número de documento es un dato obligatorio" }
    ]
  }

  validation_message_career = {
    career: [
      { type: "required", message: "La carrera es un dato obligatorio" }
    ]
  }

  validation_message_email = {
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

  constructor(private navCtrl: NavController,private formBuilder: FormBuilder,private authenticate: ServicesPage,private alertController: AlertController
    ) { 

    this.registerForm = this.formBuilder.group({
      name: new FormControl("",
      Validators.compose([
        Validators.required,
        Validators.minLength(5)
      ])),
      last_name: new FormControl("",
      Validators.compose([
        Validators.required,
        Validators.minLength(5)
      ])),
      document_type: new FormControl("",
      Validators.compose([
        Validators.required
      ])),
      document_number: new FormControl("",
      Validators.compose([
        Validators.required,
        Validators.minLength(7)
      ])),
      career: new FormControl("",
      Validators.compose([
        Validators.required
      ])),
      email: new FormControl(
        "",
        Validators.compose([
          Validators.required,
          Validators.pattern("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$")
        ])),
      password: new FormControl("",
      Validators.compose([
        Validators.required,
        Validators.minLength(5)
      ])
      )
    });
  }

  ngOnInit() {
  }

  goToLogin(){
    this.navCtrl.navigateBack("/login");
  }

  registerUser(register_form: any){
    console.log(register_form)
    this.authenticate.registerUser(register_form).then( res => {
      this.navCtrl.navigateForward("/login");
    }).catch(err => {
      this.presentAlert("Información", "Ocurrio un error", err);
    })
  }

  async presentAlert(header: any, subHeader: any, message: any) {
    const alert = await this.alertController.create(
      {
        header: header,
        subHeader: subHeader,
        message: message,
        buttons: ['Ok']
      }
    );
    await alert.present();
  }

}
