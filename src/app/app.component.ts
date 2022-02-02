import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular';
  appForm: FormGroup;

  constructor(public fb: FormBuilder) {}

  ngOnInit(): void {
    this.createForm();
  }
  createForm() {
    this.appForm = this.fb.group({
      birthday: [''],
    });
  }

  dateFun() {
    let year = this.appForm.get('birthday').value.split('-')[0];
    console.log('...', year);
    if ((0 == year % 4 && 0 != year % 100) || 0 == year % 400) {
      console.log(year + ' is a leap year');
      alert(year + ' is a leap year');
    } else {
      alert(year + ' is not a leap year');

      console.log(year + ' is not a leap year');
    }
  }
}
