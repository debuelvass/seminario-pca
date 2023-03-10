import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ServicesPage {
// url Server del endpoint

  urlServer = "https://librarypca.fly.dev/";
  httpHeaders = { headers: new HttpHeaders({"Content-Type": "application/json"}) };

  constructor(private storage: Storage, private http: HttpClient) { }

  // funcion para autenticarse el usuario de manera local

  loginUserLocal(credentials: any){
    return new Promise((accept, reject) =>{
      if ( credentials.email == "deyvid.buelvass@pca.edu.co" && credentials.password == "123456" )
      {
        accept("Login Exitoso");
      } else {
        reject("Login Fallido");
      }
    });
  }
  // funcion para cerrar la sesion del usuario, coloca isUserLoggedIn en false y elimina a user_id del storage

  logout() {    
    this.storage.set('isUserLoggedIn',false);  
    this.storage.remove("user_id")      
    } 

  registerUserLocal(userData: any){
    userData.password = btoa(userData.password);
    return this.storage.set("user", userData);
  }

  // funcion para autenticarse el usuario

  loginUser(credentials: any){
    return new Promise( (accept, reject) => {
      let params = {
        "user": credentials
      }
      this.http.post(`${this.urlServer}login`, params, this.httpHeaders).subscribe( (data: any) => {
        if (data.status == "OK") {
          accept(data);
          console.log(data);
        }else{
          reject(data.errors)
        }
      }, (error) => {
        reject("Ocurrio un error en Login")
      })
    })
  }

  // funcion para registrarse el usuario

  registerUser(userData: any){
    let params = {
      "user": userData
    }
    return new Promise( (accept, reject) => {
      this.http.post(`${this.urlServer}signup`,params, this.httpHeaders).subscribe((data: any) => {
        if (data.status == "OK"){
          accept(data.msg);
        }else{
          reject(data.errors)
        }
      },(error) => {
        reject("Error al intentar registrarse")
      })
    })
  }

  
}
