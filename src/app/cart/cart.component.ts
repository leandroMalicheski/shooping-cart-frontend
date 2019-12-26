import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Cart } from '../model/cart';
import { CartService } from '../cart.service';
import { Observable } from 'rxjs';
import { ItemService } from '../item.service';
import { Item } from '../model/item';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  userId : string;
  cart : Cart;
  items: Observable<Item[]>;
  
  constructor(private route: ActivatedRoute, private cartService: CartService, private itemService: ItemService) { }

  ngOnInit() {
    this.cart = new Cart();
    this.userId = this.route.snapshot.params['id'];
    this.loadItemsData();
    
    this.cartService.getCartByUserId(this.userId)
      .subscribe(data => {
        console.log(data)
        this.cart = data;
      }, error => console.log(error));
  }

  loadItemsData(){
    this.items = this.itemService.getItemsList();
  }

  addToCart(id: string){
    
  }

}
