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
  data: [] = []; // storing user information from api
  country: [] = []; //storting country data from api
  max = 10;

  public selectedCountry: string = '';

  // country selection drop down
  onChange(newValue) {
    this.selectedCountry = newValue;
  }
  

  model:any ={}

  // methos to dsiplay user data
  displayData() {
    this.dataService.getDatas().subscribe(x => {
      this.data = x.payload.items;
      console.log(this.data);
    });
}

// method to display  countries fomr the api
displayCountries(){
  this.dataService.getCountries().subscribe(y => {
    this.country = y.payload.items;
    console.log('---', this.country)
  })
}


  ngOnInit() {
    this.displayData();
    this.displayCountries();
  }


  //form validation  on submit
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
