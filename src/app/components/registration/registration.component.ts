import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  public langs: string[] = [
    'English',
    'Gujarati',
    'French',
    'German',
  ]

  public myform!: FormGroup;

  constructor(private router: Router) { }

  ngOnInit() {
    this.myform = new FormGroup({
      name: new FormControl('', Validators.required),
      email: new FormControl('', [
        Validators.required,
        Validators.pattern("[a-zA-Z0-9_\.\+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-\.]+")
      ]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
      language: new FormControl("", Validators.required),
      gender: new FormControl('', Validators.required),
      mobileNo: new FormControl('', [
        Validators.required,
        Validators.maxLength(10),
        Validators.minLength(10)]),
    });
  }

  get f() { return this.myform.controls; }

  public onSubmit() {
    if (this.myform.valid) {
      this.router.navigate(['dashboard'])
    }
  }
}
