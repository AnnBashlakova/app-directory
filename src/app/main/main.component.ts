
import { ItemsService } from 'src/app/services/items.service';
import { IItems } from 'src/app/models/items';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  items: IItems[];
  itemsSubcription: Subscription;

  constructor(private ItemsService: ItemsService) { }

  ngOnInit(): void {
    this.itemsSubcription = this.ItemsService.getItems().subscribe((data) => {
      this.items = data;
    });
  }

  ngOnDestroy(): void {
    if (this.itemsSubcription) this.itemsSubcription.unsubscribe();
  }
};