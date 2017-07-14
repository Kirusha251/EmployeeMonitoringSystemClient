import { Component, OnInit } from '@angular/core';
import {UserService} from "../../service/user.service";
import {Router} from "@angular/router";
import {AuthenticationService} from "../../service/authentication.service";
import {User} from "../../model/user";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  user: User;
  username: any = {};
  isDisplay = false;
  constructor(private userService: UserService,
              private authenticationService: AuthenticationService,
              private router: Router) { }

  ngOnInit() {
  }

  checkForLogin(){
    if (localStorage.getItem('UserToken')) {
      if (this.user == null) {
        this.userService.getSignedUser()
          .subscribe(data => this.user = data);
      }
      return true;
    }
    else {
      return false;
    }
  }

  logout(){
    this.authenticationService.logout();
    this.router.navigate(['/login']);
    this.isDisplay = false;
  }

  showDialog(){
    this.isDisplay = !this.isDisplay;
  }
  no(){
    this.isDisplay = false;
  }
}
