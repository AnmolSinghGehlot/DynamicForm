import { Component } from '@angular/core';
import { FormArray, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'testing';

  constructor(private fb: FormBuilder) { }

  bookingForm = this.fb.group({
    source: ['', Validators.required],
    destination: [''],
    date: [''],
    coach: [''],

    passengers: this.fb.array([
      this.fb.control({
        name: [''],
        age: [''],
        gender: [''],
        ph: ['']
      }),
    ])
  })
  counter!: number;
  onSubmit() {
    var source = this.bookingForm.controls['source'].value;
    var destination = this.bookingForm.controls['destination'].value;
    var date = this.bookingForm.controls['date'].value;
    var coach = this.bookingForm.controls['coach'].value;
    console.log('source is ' + source);
    console.log('destination is ' + destination);
    console.log('date is ' + date);
    console.log('coach is ' + coach);
    this.counter = 0;
    for (let pass of this.passengers.controls) {
      console.log("Mobile" + (this.counter + 1) + "::" + this.bookingForm.get(['passengers', this.counter])?.value);
      this.counter = this.counter + 1;
    }
  }

  get passengers() {
    return this.bookingForm.get('passengers') as FormArray;
  }

  addNewPassengers() {
    this.passengers.push(this.fb.control(''));
  }
}
