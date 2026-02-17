import { Component, inject, OnInit } from '@angular/core';
import { WishListService } from '../../core/services/wishlist.service';

@Component({
  selector: 'app-wish-list',
  standalone: true,
  imports: [],
  templateUrl: './wish-list.component.html',
  styleUrl: './wish-list.component.scss'
})
export class WishListComponent {
  private readonly  _WishlistService=inject(WishListService)

wishItems: any[] = []; 

ngOnInit(): void {
  this._WishlistService.userWishlist().subscribe({
    next: (res) => {
      console.log( res); 
      
      this.wishItems = res; 
      
     
    },
    error: (err) => {
      console.error( err);
    }
  });
  
}
remove(id: any): void {
  this._WishlistService.deleteProduct(id).subscribe({
    next: (res) => {
      console.log( res);
      
      
      this.wishItems = this.wishItems.filter((item) => item.id !== id);
    },
    error: (err) => {
      console.log( err);
    }
  });
}
}
