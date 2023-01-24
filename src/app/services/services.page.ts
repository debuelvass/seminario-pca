import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicesPage {

  constructor() { }

  loginUser(credentials: any){
    return new Promise((accept, reject) =>{
      if ( credentials.email == "deyvid.buelvass@pca.edu.co" && credentials.password == "123456" )
      {
        accept("Login Exitoso");
      } else {
        reject("Login Fallido");
      }
    });
  }
}
