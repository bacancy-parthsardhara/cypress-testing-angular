import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  @ViewChild('myForm') myForm!: NgForm;
  
  public isSubmitted = false;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  public onSubmit(form: NgForm) {
    console.log('Button is working :>> ', form.valid, form.value);
    if(form.valid) {
      this.isSubmitted = !this.isSubmitted;
      this.router.navigate(['dashboard'])
    }
  }
}
