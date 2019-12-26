import { Component, OnInit } from '@angular/core';
import { User } from '../model/user';
import { Observable } from 'rxjs';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  users: Observable<User[]>;
  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
    this.loadData();
  }

  loadData(){
    this.users = this.userService.getUserList();
  }

  deleteUser(id: string){
    this.userService.deleteUser(id)
    .subscribe(
      data => {
        console.log(data);
        this.loadData();
      },
      error => console.log(error));
  }

  updateUser(id: string){
    this.router.navigate(['user-update', id]);
  }

  createUser(){
    this.router.navigate(['user-create']);
  }

  viewUserCart(id: string){
    this.router.navigate(['cart', id]);
  }
}
