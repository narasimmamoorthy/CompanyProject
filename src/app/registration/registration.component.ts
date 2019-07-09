import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegistrationService } from '../registration_service/registration.service'
import { User } from '../user/user';

// import custom validator to validate that password and confirm password fields match

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  providers:[RegistrationService],
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  registrationService:RegistrationService;
  registrationForm: FormGroup;
  model: any = {};
  user:any={};

  constructor(private formBuilder: FormBuilder) { }

   // convenience getter for easy access to form fields
   get f() { return this.registrationForm.controls; }

  ngOnInit() {
    this.registrationForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      username: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required]
  });
  }

  onSubmit() {
    alert('SUCCESS 1 !! :-)\n\n' + JSON.stringify(this.user, null, 4));
    this.registrationService.registerUser(this.user);
    alert('SUCCESS 2 !! :-)\n\n' + JSON.stringify(this.user, null, 4));
  }

  
}
