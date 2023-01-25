import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class ServicesPage {

  constructor(private storage: Storage) { }

  loginUser(credentials: any){
    return new Promise((accept, reject) =>{
      if ( credentials.email == "deyvid.buelvass@pca.edu.co" && credentials.password == "123456" )
      {
        accept("Acceso exitoso");
      } else {
        reject("Acceso fallido");
      }
    });
  }

  registerUser(userData: any){
    userData.password = btoa(userData.password);
    return this.storage.set("user", userData);
  }
}
