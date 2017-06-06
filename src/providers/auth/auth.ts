import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class UsersProvider {

  public users: any;
  public isLogged = false;
  public isRegistered: any;
  public data: any;

  constructor(public http: Http) {
    console.log('Hello AuthProvider Provider');
  }

  findAll(){
    var url = "http://pfim.infoconsultancy.com/findall.php";
    this.http.get(url)
    .map(response => response.json())
    .subscribe(response => {
      this.users = response;
    })
  }

  authenticate(user) {
    if (this.isLogged) {
      return Promise.resolve(this.isLogged);
    }

    return new Promise(resolve => {
      this.http.post('http://pfim.infoconsultancy.com/login.php', user)
        .map(res => res.json())
        .subscribe(data => {
          this.isLogged = data.status;
          resolve(this.isLogged);
        });
    });
  }

  register(user) {
    if (this.isRegistered) {
      return Promise.resolve(this.isRegistered);
    }

    return new Promise(resolve => {
      this.http.post('http://pfim.infoconsultancy.com/register.php', user)
        .map(res => res.json())
        .subscribe(data => {
          this.isRegistered = data.status;
          resolve(this.isRegistered);
        });
    });
  }

}
