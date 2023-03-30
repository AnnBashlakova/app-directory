import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { AbstractControl, ValidatorFn } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { ItemsService } from 'src/app/services/items.service';



@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']

})
export class FormComponent implements OnInit {

  constructor( private item: ItemsService) {}
    myForm: FormGroup = new FormGroup({
    title: new FormControl('', [Validators.required, this.uppercaseValidator]),
    description: new FormControl('', [Validators.required, this.minLengthValidator(10)]),
    name: new FormControl('', [Validators.required, this.minLengthValidator(2)]),
    phone: new FormControl('', [Validators.required, this.minLengthValidator(9),this.maxLengthValidator(15), this.phoneValidator]),
    email: new FormControl('', [this.emailValidator]),
  })

  onSubmit() {
    this.item.postItem(this.myForm.value).subscribe((result)  => {
      console.log(result);
    })



    this.myForm.reset();

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
    const emailReg = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValid = emailReg.test(control.value);
    if (emailReg.test(control.value)){
      return null;
    } else {
      return {'email': true }
    }
    
  };


  minLengthValidator(minLength: number): ValidatorFn {
    return (control: AbstractControl): {[key: string]: any} | null => {
      const value = control.value;
      if (value.length >= minLength) {
        return null;
      } else {
        return { minLength: { requiredLength: minLength, actualLength: value ? value.length : 0 } };
      }
    }
  };

  maxLengthValidator(maxLength: number): ValidatorFn {
    return (control: AbstractControl): {[key: string]: any} | null => {
      const value = control.value;
      if (value.length <= maxLength) {
        return null;
      } else {
        return { minLength: { requiredLength: maxLength, actualLength: value ? value.length : 0 } };
      }
    }
  };

};