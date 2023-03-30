import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { AbstractControl, ValidatorFn } from '@angular/forms';
import { ItemsService } from 'src/app/services/items.service';
import { IItems } from '../models/items';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})

export class FormComponent implements OnInit {

  constructor( private item: ItemsService) {}
    myForm: FormGroup = new FormGroup({
    title: new FormControl('', [
      Validators.required, 
      this.uppercaseValidator]),
    description: new FormControl('', [
      Validators.required, 
      this.minLengthValidator(10)
    ]),
    phone: new FormControl('', [
      Validators.required, 
      this.phoneValidator, 
      this.maxLengthValidator(15), 
      this.minLengthValidator(10)
    ]),
    name: new FormControl('', this.minLengthValidator(2)),
    email: new FormControl('', [this.emailValidator]),
  })


  onSubmit() {
    this.item.postItem(this.myForm.value).subscribe(
      (response: IItems) => {
        alert('success!');
        this.myForm.reset();
      },
      (error: any) => {
        alert(error)
        console.error('Error:', error);
      }
    );
  }

  ngOnInit(): void {}


  uppercaseValidator(control: FormControl): {[key:string]: any}|null{
    const value = control.value;
    if (value && /[A-ZА-ЯЁ]/.test(value)) {
      return null;
    } else {
      return { uppercase: true }
    }
  };

  phoneValidator(control: FormControl): {[key:string]: any}|null{
    const value = control.value;
    const phoneReg = /^\+(?:[0-9] ?){6,14}[0-9]$/;
    if (value && phoneReg.test(value)) {
      return null;
    } else {
      return { phone: true }
    }
  };

  emailValidator(control: AbstractControl): { [key: string]: any } | null {
    const value = control.value;
    const emailReg = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    // const isValid = emailReg.test(control.value);
    if (emailReg.test(value)){
      return null;
    } else {
      return {'email': true }
    };
  };

  maxLengthValidator(maxLength: number): ValidatorFn {
    return (control: AbstractControl): {[key: string]: any} | null => {
      const value = control.value;
      if (value && value.length > maxLength) {
        return { 'stringLength': true };
      }
      return null;
    };
  };

  minLengthValidator(minLength: number): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      const value = control.value;
      if (value && value.length  <= minLength) {
        return { 'stringLength': true };
      }
      return null;
    };
  };
};