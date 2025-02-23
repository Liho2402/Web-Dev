import { Component, Input } from '@angular/core';
import { ProductLocation } from '../product-location';

@Component({
  selector: 'app-product-location',
  imports: [],
  templateUrl: `./product-location.component.html`,
  styleUrls: ['./product-location.component.css']
})

export class ProductLocationComponent {
  @Input() productLocation!:ProductLocation;
  
  getEncodedWhatsAppLink(): string {
    return `https://wa.me/?text=Check%20this%20product:%20${encodeURIComponent(this.productLocation.linkKaspi)}`;
  }

  getEncodedTelegramLink(): string {
    return `https://t.me/share/url?url=${encodeURIComponent(this.productLocation.linkKaspi)}&text=Check%20this%20product!`;
  }
}
