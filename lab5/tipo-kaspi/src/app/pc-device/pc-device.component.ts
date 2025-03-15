
import { Component, Input} from '@angular/core';
import { ProductLocation } from '../product-location';
import { ProductLocationComponent } from '../product-location/product-location.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pc-device',
  imports: [ProductLocationComponent, CommonModule],
  templateUrl: './pc-device.component.html',
  styleUrl: './pc-device.component.css'
})
export class PcDeviceComponent {
  productLocationList: ProductLocation[] = [{
    "id": 0,
    "name": "Мышь Logitech G102 Lightsync черный",
    "photo": "../assets/mouse.jpg",
    "rating": 5,
    "descrip": "Мышь проводная Logitech G102 LightSync позволяет играть с максимальной эффективностью",
    "delivery": true,
    "linkKaspi": "https://kaspi.kz/shop/p/logitech-g102-lightsync-chernyi-100956618/?c=750000000",
    "likes": 0
  },
  {
    "id": 1,
    "name": "Клавиатура AULA F75 белый",
    "photo": "../assets/key.jpg",
    "rating": 5,
    "descrip": "Характеристики Клавиатура AULA F75 белый",
    "delivery": true,
    "linkKaspi": "https://kaspi.kz/shop/p/aula-f75-belyi-117731409/?c=353220100",
    "likes": 0
  },
  {
    "id": 2,
    "name": "Коврик для мыши Inova Death Life",
    "photo": "../assets/kov.jpg",
    "rating": 5,
    "descrip": "Это удобный аксессуар, который обеспечивает плавное и точное движение мыши.",
    "delivery": true,
    "linkKaspi": "https://kaspi.kz/shop/p/inova-death-life-115283473/?c=353220100",
    "likes": 0
  },
  {
    "id": 3,
    "name": "Термопаста Arctic MX-4 4 г",
    "photo": "../assets/termo.jpg",
    "rating": 5,
    "descrip": "Характеристики Термопаста Arctic MX-4 4 г",
    "delivery": true,
    "linkKaspi": "https://kaspi.kz/shop/p/termopasta-arctic-mx-4-4-g-109576930/?c=353220100",
    "likes": 0
  },
  {
    "id": 4,
    "name": "Мышь Wireless Mouse черный",
    "photo": "../assets/mouse2.jpg",
    "rating": 5,
    "descrip": "Мышь проводная Logitech G102 LightSync позволяет играть с максимальной эффективностью",
    "delivery": true,
    "linkKaspi": "https://kaspi.kz/shop/p/logitech-g102-lightsync-chernyi-100956618/?c=750000000",
    "likes": 0
  }
]
}
