import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

export interface IUserList {
  firstName: string;
  lastName: string;
  mobileNumber: string;
};

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  public userDetailsForm!: FormGroup;
  public userList: IUserList[] = [];

  constructor() {
    if (localStorage.getItem('userList')) {
      const userListDataFromLocalstorage = JSON.parse(localStorage.getItem('userList') as any);
      this.userList.push(...userListDataFromLocalstorage);
    }
  }

  ngOnInit(): void {
    this.createForm();
  }

  /**
   * createForm
   */
  public createForm(): void {
    this.userDetailsForm = new FormGroup({
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      mobileNumber: new FormControl('', [Validators.required, Validators.pattern('^([0-9]{10})$')])
    });
  }

  public onSubmit(): void {
    if (this.userDetailsForm.valid) {
      this.userList.push(this.userDetailsForm.value);
      localStorage.setItem('userList', JSON.stringify(this.userList));
    }
  }

  public clearUserList(): void {
    localStorage.removeItem('userList');
    this.userList.length = 0;
  }
}
