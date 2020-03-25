import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { JwtStorageService } from './jwt-storage.service';
import { Login } from 'src/app/shared/models/login';
import { Observable, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { JwtHelperService } from '@auth0/angular-jwt'; //help to decode out TOKEN to get the information in payload, give javascipt object
import { User } from 'src/app/shared/models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private currentUserSubject = new BehaviorSubject<User>({} as User); //create an instance of BS, hold value of User
  public currentUser = this.currentUserSubject.asObservable(); //create an observable

  private isAuthenticatedSubject = new BehaviorSubject<boolean>(false);
  public isAuthenticated = this.isAuthenticatedSubject.asObservable();
  
  private user: User;
  constructor(private apiService: ApiService, private jwtStorageService: JwtStorageService) { }

  login(userLogin: Login): Observable<boolean> {
    //login component will call this login method which will call API login method by sending username and password in body
    //if username and password is validate from API, then call JWTstorageservice save TOKEN method, otherwise return false to the component
    return this.apiService.create('/account/login', userLogin)
      .pipe(map(response => {
        if (response) {
          this.jwtStorageService.saveToken(response.token);
          this.populateUserInfo();
          return true;
        }
        return false;
      }))
    }

  logout() { //reset everything when logout
    // Remove JWT from localstorage
    this.jwtStorageService.destroyToken();
    // Set current user to an empty object
    this.currentUserSubject.next({} as User);
    // Set auth status to false
    this.isAuthenticatedSubject.next(false);
  }

  populateUserInfo(){
    if (this.jwtStorageService.getToken()) {
      const token = this.jwtStorageService.getToken();
      const decodedToken = this.decodedToken();
      this.currentUserSubject.next(decodedToken); //push User into subject
      this.isAuthenticatedSubject.next(true); //.next() --> send value to observable
    }
  }
  //when u refersh ur browser, that means angular will reload everything, so we have to make sure we check if the token is preset 
  //in the AppComponent init method

  private decodedToken():User {
    const token = this.jwtStorageService.getToken();
    if (!token || new JwtHelperService().isTokenExpired(token)) {
      this.logout(); //destroy token
      return null;
    }
    const decodedToken = new JwtHelperService().decodeToken(token);
    this.user = decodedToken; //get decoded information in payload
    return this.user;
  }

  getCurrentUser(): User {
    return this.currentUserSubject.value; //get subject value
  }

}
