import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Storage } from '@ionic/storage';
import { environment } from 'src/environments/environment';

const URL = environment.url;

@Injectable({
  providedIn: 'root'
})
export class UserService {

  token: string = null;

  constructor(private http: HttpClient,
              private storage: Storage) { }

    login(email: string, password: string) {
      const data = { email, password };

      return new Promise (resolve => {

        this.http.post(`${URL}/user/login`, data).subscribe((resp: any) => {
          console.log(resp.ok);
          if(resp.ok) {
            this.saveToken(resp.token);
            console.log('token???', this.storage.get('token'));
            resolve(true);
          } else {
            this.token = null;
            this.storage.clear();
            resolve(false);
          }
        });

      });

    }

    async saveToken(token: string) {
      console.log('try to savetoken');
      this.token = token;
      await this.storage.set('token', this.token);
    }

}
