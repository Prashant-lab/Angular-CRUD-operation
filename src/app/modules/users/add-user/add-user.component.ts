import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  userId : any

  constructor( private userService : UsersService,
               private router : Router,
               private route : ActivatedRoute) {

                this.route.params.subscribe((result)=>{
                  this.userId =   result['userId'];
                });

                if(this.userId){
                  this.userService.getUsersById(this.userId).subscribe((response)=>{
                    this.userForm.patchValue(response)
                  })
                }
                }

  ngOnInit(): void {
  }

  userForm : FormGroup = new FormGroup({
    firstName : new FormControl('' , Validators.required),
    lastName : new FormControl(''),
    email : new FormControl('', Validators.required),
    age : new FormControl('', Validators.required),
    gender : new FormControl('', Validators.required),
    salary : new FormControl(''),
    id : new FormControl('')
  });

 
  
  saveUser(){
    if(this.userId){
      this.userService.editUser(this.userForm.value).subscribe((success)=>{
        alert('success')
        this.router.navigate(['/users'])
      }, (err) => {
        alert(err);
      })

    }else{
      this.userService.addUser(this.userForm.value).subscribe((success)=>{
        alert('success')
        this.router.navigate(['/users'])
      }, (err) => {
        alert(err);
      })
    }
  
    }
    
}
