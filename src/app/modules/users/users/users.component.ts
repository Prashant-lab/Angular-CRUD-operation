import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersService } from '../../../services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor(private userservice : UsersService,
              private router : Router,
              private route: ActivatedRoute) { }

  users:any;

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(){
    this.userservice.getUsers().subscribe( (users) => {
      this.users = users
     },
     (err)=>{
      console.log(err);
     });
  }

  deletedUser(user){
    this.userservice.deleteUser(user.id).subscribe( (success)=>{
      // this.router.navigate(['/roles'])
      this.getUsers();
      alert('user has been deleted');

    },
    (err)=>{
      alert(err);
    })
  };

  addUser = () => {
    this.router.navigate(['/users/add'])
  }

}
