import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { NgForm } from '@angular/forms';
import { User } from '../user';
import { DataService } from '../data.service';

@Component({
  selector: 'app-contactform',
  templateUrl: './contactform.component.html',
  styleUrls: ['./contactform.component.css']
})
export class ContactformComponent implements OnInit {
  isValidFormSubmitted = false;
  user = new User();
  data: any;

  max = 10;
  constructor(private userService: UserService, private dataService: DataService,) { }

  displayData(){
    this.dataService.getDatas().subscribe(x =>{
      this.data =x;
      console.log(this.data)
    })
}

  countryApi  = 
  {
    country:'', 
  }


  ngOnInit() {
    this.displayData()
  }


  onFormSubmit(form: NgForm) {
    this.isValidFormSubmitted = false;
    if (form.invalid) {
       return;
    }
    this.isValidFormSubmitted = true;
    this.user = form.value;
    this.userService.createUser(this.user);
    this.user = new User();
    form.resetForm();
 }

}
