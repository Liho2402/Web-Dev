import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductLocation } from '../product-location';
import { LikesService } from './likes.service';
import { ProductLocationComponent } from '../product-location/product-location.component';


@Component({
  selector: 'app-likes',
  standalone: true,
  imports: [CommonModule, ProductLocationComponent],
  templateUrl: './likes.component.html',
  styleUrls: ['./likes.component.css']
})
export class LikesComponent implements OnInit {
  likedProducts: ProductLocation[] = [];
  constructor(private likesService: LikesService) {}
  ngOnInit(): void {
    // Subscribe to liked products changes
    this.likesService.likedProducts$.subscribe(products => {
      console.log("Полученные лайкнутые товары:", products);
      this.likedProducts = products;
    });
  }
  
  removeFromLikes(product: ProductLocation): void {
    this.likesService.removeFromLikes(product.id);
  }
  
  getEncodedWhatsAppLink(product: ProductLocation): string {
    return `https://wa.me/?text=Check%20this%20product:%20${encodeURIComponent(product.linkKaspi)}`;
  }

  getEncodedTelegramLink(product: ProductLocation): string {
    return `https://t.me/share/url?url=${encodeURIComponent(product.linkKaspi)}&text=Check%20this%20product!`;
  }
}