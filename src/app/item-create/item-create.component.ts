import { Component, OnInit } from '@angular/core';
import { ItemService } from '../item.service';
import { Router } from '@angular/router';
import { Item } from '../model/item';

@Component({
  selector: 'app-item-create',
  templateUrl: './item-create.component.html',
  styleUrls: ['./item-create.component.css']
})
export class ItemCreateComponent implements OnInit {

  item: Item = new Item();


  constructor(private itemService: ItemService, private router: Router) { }

  ngOnInit() {
  }

  save() {
    this.itemService.createItem(this.item)
      .subscribe(data => console.log(data), error => console.log(error));
    this.item = new Item();
    this.gotoList();
  }

  onSubmit() {
    this.save();    
  }

  gotoList() {
    this.router.navigate(['/item']);
  }

}
