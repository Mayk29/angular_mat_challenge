import { Component } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSliderModule } from '@angular/material/slider';
import { MatRadioModule } from '@angular/material/radio';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatTooltipModule } from '@angular/material/tooltip';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatInputModule,
    MatSliderModule,
    MatRadioModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    MatTooltipModule,
    ReactiveFormsModule
  ],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
  trainerName: string = '';
  email: string = '';
  password: string = '';
  gender: string = '';
  birthDate!: Date;
  address: string = '';
  badgeNumber: number = 5;
  region: string = '';
  terms: boolean = false;
  submitted = false;
  minSkillLevel = 1;
  maxSkillLevel = 8;

  formdata: FormGroup = new FormGroup({
    trainerName: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(8)]),
    gender: new FormControl('', Validators.required),
    birthDate: new FormControl(null, Validators.required),
    address: new FormControl(''),
    badgeNumber: new FormControl(5),
    region: new FormControl('', Validators.required),
    terms: new FormControl(false, Validators.requiredTrue)
  });

  onClickSubmit(data: any) {
    if (this.formdata.invalid) {
      console.error("Form is invalid. Please fill in all required fields.");
      return;
    }

    this.submitted = true;
    this.trainerName = data.trainerName;
    this.email = data.email;
    this.password = data.password;
    this.gender = data.gender;
    this.birthDate = data.birthDate;
    this.address = data.address;
    this.badgeNumber = data.badgeNumber;
    this.region = data.region;
    this.terms = data.terms;

    console.log("Form submitted successfully", this.formdata.value);
  }
}
