import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { IItems } from 'src/app/models/items';

@Component({
  selector: 'app-items-details',
  templateUrl: './items-details.component.html',
  styleUrls: ['./items-details.component.scss']
})
export class ItemsDetailsComponent  implements OnInit{

  item: IItems;


  itemSubcription: Subscription;

  constructor(private route: ActivatedRoute){}

  ngOnInit(): void {
    
    this.itemSubcription = this.route.data.subscribe((data) => {
      // console.log(data)
      this.item = data['data'];

      console.log(this.item)
    });


  }

  
}
