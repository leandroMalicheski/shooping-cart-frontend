import { Component, OnInit } from '@angular/core';
import { ItemService } from '../item.service';
import { Item } from '../model/item';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  items: Observable<Item[]>;

  constructor(private itemService: ItemService, private router: Router) { }

  ngOnInit() {
    this.loadData();
  }

  loadData(){
    this.items = this.itemService.getItemsList();
  }

  deleteItem(id: string){
    this.itemService.deleteItem(id)
    .subscribe(
      data => {
        console.log(data);
        this.loadData();
      },
      error => console.log(error));
  }

  updateItem(id: string){
    this.router.navigate(['item-update', id]);
  }

  createItem(){
    this.router.navigate(['item-create']);
  }

}
