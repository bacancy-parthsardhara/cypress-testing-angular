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

  constructor(private router: Router) { }

  ngOnInit(): void { }

  public onSubmit(form: NgForm) {
    this.isSubmitted = !this.isSubmitted;
    // Used setTimeout for some purpose of cypress testing.
    setTimeout(() => {
      if (form.valid) {
        this.router.navigate(['dashboard']);
      }
    }, 5000);
  }
}
