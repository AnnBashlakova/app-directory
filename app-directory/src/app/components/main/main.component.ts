
import { Component, OnInit } from '@angular/core';

import { ItemsService } from 'src/app/services/items.service';
import { IItems } from 'src/app/models/items';
import {Subscription} from 'rxjs';
import {MatListModule} from '@angular/material/list';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  items: IItems[];
  itemsSubcription: Subscription;
  
    constructor(private ItemsService: ItemsService) {}
  
    ngOnInit(): void {
      this.itemsSubcription = this.ItemsService.getItems().subscribe((data) => {
        this.items = data;

        console.log(this.items)
      });
    }
  
  
    ngOnDestroy(): void{
      if (this.itemsSubcription) this.itemsSubcription.unsubscribe();
    }
  
  }
  