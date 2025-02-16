import { Component, Input } from '@angular/core';
import { ProductLocation } from '../product-location';

@Component({
  selector: 'app-product-location',
  standalone: true,
  imports: [],
  template: `
    <section class="listing">
      <img class="listing-photo" [src]="productLocation.photo" 
           [alt]="'Exterior photo of ' + productLocation.name">
      <h2 class="listing-heading">{{ productLocation.name }}</h2>
      <p class="listing-info">Rating: {{ productLocation.rating }}</p>
    </section>
  `,
  styleUrls: ['./product-location.component.css']
})
export class ProductLocationComponent {
  @Input() productLocation!: ProductLocation;
}
