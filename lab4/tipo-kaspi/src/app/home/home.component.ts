import { Component } from '@angular/core';
import { ProductLocationComponent } from '../product-location/product-location.component';
import { ProductLocation } from '../product-location';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ProductLocationComponent],
  template: `
    <section>
      <form>
        <input type="text" placeholder="Search product">
        <button class="primary" type="button">Search</button>
      </form>
    </section>
    <section class="result">
      <app-product-location *ngFor="let productLocation of productLocationList" [productLocation]="productLocation"></app-product-location>
    </section>
  `,
  styleUrl: './home.component.css'
})
export class HomeComponent {
  productLocationList: ProductLocation[] = [{
    "id": 1,
    "name": "Мышь Logitech G102 Lightsync черный",
    "photo": "./assets/64119540187166.jpg",
    "availableUnits": 10,
    "rating": 5,
  },
  {
    "id": 2,
    "name": "Сумка Portcase 9011 черный",
    "photo": "./assets/69003730550814.jpg",
    "availableUnits": 15,
    "rating": 4.9,
  },
  {
    "id": 3,
    "name": "Клавиатура AULA F75 белый",
    "photo": "./assets/24789850.jpg",
    "availableUnits": 5,
    "rating": 5,
  }
];
}
