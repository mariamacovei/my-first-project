import {Injectable} from '@angular/core';
import {catchError, map} from 'rxjs/operators';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class FunctionlService {

  isLogin = false;

  constructor(private http: HttpClient) {
  }

  register(form) {
    const header = {
      headers: new HttpHeaders({
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json'
        }
      )

    };

    return this.http.post<any>(environment.server_url + '/register', form, header);
  }

  login(form) {

    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    console.log(currentUser);
    console.log( form.get('email').value);

    if (currentUser.email === form.get('email').value) {
      const token = currentUser.token;
      if (!token) {
        return null;
      }

      const header = {
        headers: new HttpHeaders({
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + token
          }
        )

      };

      return this.http.post<any>(environment.server_url + '/login', form, header).pipe(map(res => {
        return res;
      }));

    } else {
      return null;
    }
  }

  getCourses() {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    const token = currentUser.token;
    if (!token) {
      return null;
    }

    const header = {
      headers: new HttpHeaders({
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + token
        }
      )

    };


    return this.http.get(environment.server_url + '/courses', header);

  }
}

