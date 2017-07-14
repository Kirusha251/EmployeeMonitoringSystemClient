import { Component, OnInit } from '@angular/core';
import {SelectItem} from "primeng/primeng";
import {Router} from "@angular/router";
import {AlertService} from "../../service/alert.service";
import {UserService} from "../../service/user.service";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  model: any = {};
  loading = false;
  selectedRole: string;
  constructor(private router: Router,
              private userService: UserService,
              private alertService: AlertService) { }

  ngOnInit() {
  }
  register(){
    this.loading = true;

    this.userService.create(this.model.email, this.model.username, this.model.password)
      .subscribe(
        data => {
          this.alertService.success('Регистрация прошла успешно!', true)
          this.router.navigate(['/login']);
        },
        error => {
          this.alertService.error("Ошибка, пользователь с таким email уже существует!");
          this.loading = false;
        }
      )
  }
}
