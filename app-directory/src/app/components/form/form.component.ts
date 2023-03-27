import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
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
    title: new FormControl(''),
    description: new FormControl(''),
    name: new FormControl(''),
    phone: new FormControl(''),
    email: new FormControl(''),
  })

  onSubmit() {
    this.item.postItem(this.myForm.value).subscribe((result) => {
      console.log(result);
    })

  }

  ngOnInit(): void {}


}
