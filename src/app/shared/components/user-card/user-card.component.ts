import { Component, OnInit, Input, Output,  EventEmitter } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})
export class UserCardComponent implements OnInit {

  @Input() user;
  @Output() onDeleteUser = new EventEmitter<number>()

  constructor( private router : Router) { }

  ngOnInit(): void {

  }

  deleteCard(){
    this.onDeleteUser.emit();
  }

  editUser(userId){
    this.router.navigate(['users/edit/' + userId])
  }

}
