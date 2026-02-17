import { Component, inject } from '@angular/core';
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
  

}
