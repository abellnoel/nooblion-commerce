import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShoppingCartService } from 'src/services/shopping-cart.service';
import { Product } from 'src/interfaces/productInterface';

@Component({
  selector: 'nbl-shopping-cart-drop-down',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './shopping-cart-drop-down.component.html',
  styleUrls: ['./shopping-cart-drop-down.component.css']
})
export class ShoppingCartDropDownComponent {

    cartProducts : Product[] = [];
    totalPrice : number = 0;
    constructor(private shoppingCartService: ShoppingCartService){}

    ngOnInit(): void {
        this.shoppingCartService.getShoppingCart().subscribe(data => this.cartProducts=data);
    }

    calculateTotalPrice(){
        this.totalPrice = this.cartProducts.map(a => a.productPrice).reduce((a,b) => a + b, 0);
    }
}