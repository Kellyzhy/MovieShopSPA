import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/shared/models/user';
import { AuthenticationService } from '../../services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  currentUser: User; //get value from subject and give to component 
  isAuthenticated: boolean;
  
  constructor(public authService: AuthenticationService, private router: Router) { }

  ngOnInit() {
    this.authService.isAuthenticated.subscribe( //get value from isAuth which is boolean
      a => {this.isAuthenticated = a
      if (this.isAuthenticated) {
        this.currentUser = this.authService.getCurrentUser();
      }
      }
    );
  }

  logout() {
    this.authService.logout(); //destroy token
    this.router.navigateByUrl('/login'); //redirect to login page
  }

}
