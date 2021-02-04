import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators} from '@angular/forms';


@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.scss']
})


export class UserRegisterComponent implements OnInit {

  registerationForm: FormGroup;
  constructor() { }

  ngOnInit() {
    this.registerationForm = new FormGroup({
    userName : new FormControl(null,Validators.required),
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [Validators.required, Validators.minLength(8)]),
    confirmPassword: new FormControl(null, [Validators.required]),
    mobile : new FormControl(null, [Validators.required, Validators.maxLength(10)])
    },this.passwordMatchingValidatior
    );
  }

  passwordMatchingValidatior(fg: FormGroup): validators {
    return fg.get('password').value === fg.get('confirmPassword').value ? null :
    {nomatched: true};
  }

  onSubmit() {
    console.log(this.registerationForm.value);
  }


}
