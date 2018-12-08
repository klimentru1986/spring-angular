import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthService) {}

  ngOnInit() {
    this.loginForm = this.initForm();
  }

  public login() {
    this.authService
      .login(this.loginForm.value)
      .subscribe(res => console.log(res));
  }

  private initForm(): FormGroup {
    return this.fb.group({
      name: [null, [Validators.required]],
      password: [null, [Validators.required]]
    });
  }
}
