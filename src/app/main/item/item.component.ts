import { Component, OnInit} from '@angular/core';
import { Item } from 'src/app/models/item';
import { ItemService } from 'src/app/services/item.service';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  group,
  query,
  stagger
} from '@angular/animations';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css'],
  providers: [ItemService],
  animations:[
    trigger('flyInOut', [
      state('down', style({ transform: 'translateY(0)' })),
      transition('void => *', [
        style({ transform: 'translateY(+100%)' }),
        animate(500)
      ]),
      transition('* => void', [
        animate(500, style({ transform: 'translateY(100%)' }))
      ])
    ]),
    trigger('flyFromRight', [
      state('right', style({ transform: 'translateX(0)' })),
      transition('void => *', [
        style({ transform: 'translateX(+100%)' }),
        animate(500)
      ]),
      transition('* => void', [
        animate(500, style({ transform: 'translateX(100%)' }))
      ])
    ]),
    trigger('flyFromRight2', [
      state('right2', style({ transform: 'translateX(0)' })),
      transition('void => *', [
        style({ transform: 'translateX(+100%)' }),
        animate(700)
      ]),
      transition('* => void', [
        animate(700, style({ transform: 'translateX(100%)' }))
      ])
    ]),
  ]
})
export class ItemComponent implements OnInit {
  constructor(private itemService: ItemService) {}
  items!: Item[];
  ngOnInit(): void {
    this.itemService.getItems().subscribe((data) => {
      this.items = data;
    });
  }

  getHandItems(){
    this.items = [];
    this.itemService.getItems().subscribe((data) => {
      data.forEach(element => {
        if(element.itemTypeId==4)
        this.items.push(element)
      });
    });
  }
  getBodyItems(){
    this.items = [];
    this.itemService.getItems().subscribe((data) => {
      data.forEach(element => {
        if(element.itemTypeId==5)
        this.items.push(element)
      });
    });
  }
  getHeadItems(){
    this.items = [];
    this.itemService.getItems().subscribe((data) => {
      data.forEach(element => {
        if(element.itemTypeId==6)
        this.items.push(element)
      });
    });
  }
  getFeetItems(){
    this.items = [];
    this.itemService.getItems().subscribe((data) => {
      data.forEach(element => {
        if(element.itemTypeId==7)
        this.items.push(element)
      });
    });
  }
}
