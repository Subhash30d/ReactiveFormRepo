import { Component , OnInit} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiserviceService } from './shared/apiservice.service';
import { filter, map, Observable, of } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent implements OnInit{

  

  RegistrationForm: any;
  title = 'AssignmentsProj';
  ngOnInit(): void {
    this.RegistrationForm=new FormGroup({
      'firstName': new FormControl("",[Validators.required,Validators.minLength(5)]),
      'lastName': new FormControl("",[Validators.required,Validators.minLength(5)]),
      'mobileNumber': new FormControl("",[Validators.required, Validators.minLength(10),Validators.pattern('[6-9]\\d{9}')]),
      'dob': new FormControl("",[Validators.required]),
      'emailId': new FormControl("",[Validators.required]),
      'password': new FormControl("",[Validators.required,Validators.minLength(7)]),
      'confirmPassword': new FormControl("",[Validators.required,Validators.minLength(7)]),
      //'gender': new FormControl("",[Validators.required])

    })
    
  }
// functions to validate the form control fields

  get MobileNumber(){
    return this.RegistrationForm.get('mobileNumber');
  }

  get FirstName(){
    return this.RegistrationForm.get('firstName');
  }

  get EmailId(){
    return this.RegistrationForm.get('emailId');
  }

  get Password(){
    return this.RegistrationForm.get('password');
  }
  get ConfirmPassword(){
    return this.RegistrationForm.get('confirmPassword');
  }
  get Dob(){
    return this.RegistrationForm.get('dob');
  }

  Submit(){
        if( this.RegistrationForm.get('password').value != this.RegistrationForm.get('confirmPassword').value){
        window.alert("password not matched");
        console.log("password not matched")
        }
        else{
          console.log(this.RegistrationForm.value)
        }
      }
 

 

}

