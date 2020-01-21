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
  constructor(private userService: UserService, private dataService: DataService) { }
  isValidFormSubmitted = false;
  user = new User();
  data: [] = []; // storing user information from 
  country: [] = []; //storting country data from api
  max = 10;

  countryApi  =
  {
    country: '',
  };

  onSubmit(){
    console.log('goo')
  }

  model:any ={}

  // function to dsiplay user data
  displayData() {
    this.dataService.getDatas().subscribe(x => {
      this.data = x.payload.items;
      console.log(this.data);
    });

}

displayCountries(){
  this.dataService.getCountries().subscribe(y => {
    this.country = y.payload.items;
    console.log('---',this.country)
  })
}


  ngOnInit() {
    this.displayData();
    this.displayCountries();
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
