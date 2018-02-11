import { Component, OnInit } from '@angular/core';
import { User } from '../model/user';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  readonly path = 'api/user';

  private userToAdd: User = {
    username: '',
    password: '',
    firstName: '',
    lastName: '',
    role: 'USER'
  }

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
    this.resetUser();
  }

  addUser() {
    console.log(this.userToAdd);
    this.http.post(this.path, this.userToAdd).subscribe(
      (res: Response) => {
        this.router.navigate(['/login']);
        this.resetUser();
      })
  }

  resetUser() {
    this.userToAdd = {
      username: '',
      password: '',
      firstName: '',
      lastName: '',
      role: 'USER'
    }
  }

}
