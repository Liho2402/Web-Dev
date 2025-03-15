import { Component, Input} from '@angular/core';
import { ProductLocation } from '../product-location';
import { ProductLocationComponent } from '../product-location/product-location.component';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-phone',
  imports: [ProductLocationComponent, CommonModule],
  templateUrl: './phone.component.html',
  styleUrl: './phone.component.css'
})
export class PhoneComponent {
  productLocationList: ProductLocation[] = [{
    "id": 0,
    "name": "Смартфон Apple iPhone 13 128Gb черный",
    "photo": "../assets/ip13.jpg",
    "rating": 5,
    "descrip": "Apple iPhone 13 получил дисплей 6.1 дюйма Super Retina XDR",
    "delivery": true,
    "linkKaspi": "https://kaspi.kz/shop/p/apple-iphone-13-128gb-chernyi-102298404/?c=353220100",
    "likes": 0
  },
  {
    "id": 1,
    "name": "Смартфон Apple iPhone 16 Pro Max 256Gb черный",
    "photo": "../assets/ip16.jpeg",
    "rating": 5,
    "descrip": "Флагманский IPhone 16 Pro Max вобрал в себя лучшие черты",
    "delivery": true,
    "linkKaspi": "https://kaspi.kz/shop/p/apple-iphone-16-pro-max-256gb-chernyi-123787551/?c=353220100",
    "likes": 0
  },
  {
    "id": 2,
    "name": "Смартфон Samsung Galaxy A16 6 ГБ/128 ГБ черный",
    "photo": "../assets/a16.jpeg",
    "rating": 5,
    "descrip": "Характеристики Смартфон Samsung Galaxy A16 6 ГБ/128 ГБ черный",
    "delivery": true,
    "linkKaspi": "https://kaspi.kz/shop/p/samsung-galaxy-a16-6-gb-128-gb-chernyi-130609900/?c=353220100",
    "likes": 0
  },
  {
    "id": 3,
    "name": "Смартфон Apple iPhone 16 Pro Max 128Gb черный",
    "photo": "../assets/ip16.jpeg",
    "rating": 5,
    "descrip": "Флагманский IPhone 16 Pro Max",
    "delivery": true,
    "linkKaspi": "https://kaspi.kz/shop/p/logitech-g102-lightsync-chernyi-100956618/?c=750000000",
    "likes": 0
  },
  {
    "id": 4,
    "name": "Смартфон Apple iPhone 13 256Gb черный",
    "photo": "../assets/ip13.jpg",
    "rating": 5,
    "descrip": "Norm",
    "delivery": true,
    "linkKaspi": "https://kaspi.kz/shop/p/logitech-g102-lightsync-chernyi-100956618/?c=750000000",
    "likes": 0
  }
]
}
