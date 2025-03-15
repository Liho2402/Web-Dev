import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductLocation } from '../product-location';
import { LikesService } from '../likes/likes.service';

@Component({
  selector: 'app-product-location',
  imports: [CommonModule],
  templateUrl: `./product-location.component.html`,
  styleUrls: ['./product-location.component.css']
})

export class ProductLocationComponent {
  @Input() productLocation!: ProductLocation;
  
  constructor(private likesService: LikesService) {}
  
  incrementLikes(): void {
    // Add to likes and remove from main view
    this.likesService.addToLikes(this.productLocation);
  }
  
  removeLikes(): void {
    // Remove from likes
    this.likesService.removeFromLikes(this.productLocation.id);
  }
  
  isLiked(): boolean {
    return this.likesService.isProductInLikes(this.productLocation.id);
  }

  getEncodedWhatsAppLink(): string {
    return `https://wa.me/?text=Check%20this%20product:%20${encodeURIComponent(this.productLocation.linkKaspi)}`;
  }

  getEncodedTelegramLink(): string {
    return `https://t.me/share/url?url=${encodeURIComponent(this.productLocation.linkKaspi)}&text=Check%20this%20product!`;
  }
}
