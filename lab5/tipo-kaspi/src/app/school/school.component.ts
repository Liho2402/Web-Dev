import { Component, Input} from '@angular/core';
import { ProductLocation } from '../product-location';
import { ProductLocationComponent } from '../product-location/product-location.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-school',
  imports: [ProductLocationComponent, CommonModule],
  templateUrl: './school.component.html',
  styleUrl: './school.component.css'
})
export class SchoolComponent {
  productLocationList: ProductLocation[] = [{
    "id": 0,
    "name": "Дневник школьный Дәуір Байтерек 2042000033-5, 43 л",
    "photo": "../assets/s1.jpg",
    "rating": 5,
    "descrip": "Дневник для 5-ти дневной формы обучения",
    "delivery": true,
    "linkKaspi": "https://kaspi.kz/shop/p/logitech-g102-lightsync-chernyi-100956618/?c=750000000",
    "likes": 0
  },
  {
    "id": 1,
    "name": "Дневник школьный 8&8 №7 14003061-7, 48 листов",
    "photo": "../assets/k2.jpg",
    "rating": 5,
    "descrip": "Дневник для 5-ти дневной формы обучения",
    "delivery": true,
    "linkKaspi": "https://kaspi.kz/shop/p/aula-f75-belyi-117731409/?c=353220100",
    "likes": 0
  },
  {
    "id": 2,
    "name": "Дневник школьный 8&8 №7 14003061-7, 48 листов",
    "photo": "../assets/k3.jpg",
    "rating": 5,
    "descrip": "Дневник для 5-ти дневной формы обучения",
    "delivery": true,
    "linkKaspi": "https://kaspi.kz/shop/p/inova-death-life-115283473/?c=353220100",
    "likes": 0
  },
  {
    "id": 3,
    "name": "Мышь Logitech G102 Lightsync черный",
    "photo": "../assets/k4.jpg",
    "rating": 5,
    "descrip": "Дневник для 5-ти дневной формы обучения",
    "delivery": true,
    "linkKaspi": "https://kaspi.kz/shop/p/logitech-g102-lightsync-chernyi-100956618/?c=750000000",
    "likes": 0
  },
  {
    "id": 4,
    "name": "Мышь Logitech G102 Lightsync черный",
    "photo": "../assets/k5.jpg",
    "rating": 5,
    "descrip": "Мышь проводная Logitech G102 LightSync позволяет играть с максимальной эффективностью",
    "delivery": true,
    "linkKaspi": "https://kaspi.kz/shop/p/logitech-g102-lightsync-chernyi-100956618/?c=750000000",
    "likes": 0
  }
]
}
