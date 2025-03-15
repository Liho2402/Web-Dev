import { Component, Input} from '@angular/core';
import { ProductLocation } from '../product-location';
import { ProductLocationComponent } from '../product-location/product-location.component';
import { CommonModule } from '@angular/common';
import { LikesService } from '../likes/likes.service';

@Component({
  selector: 'app-health',
  imports: [ProductLocationComponent, CommonModule],
  templateUrl: './health.component.html',
  styleUrl: './health.component.css'
})


export class HealthComponent {
  productLocationList: ProductLocation[] = [{
    "id": 0,
    "name": "AXIS-Y сыворотка Dark Spot Correcting Glow для лица 50 мл",
    "photo": "../assets/h1.jpg",
    "rating": 5,
    "descrip": "Корректирующая сыворотка Dark Spot Correcting Glow Serum",
    "delivery": true,
    "linkKaspi": "https://kaspi.kz/shop/p/axis-y-syvorotka-dark-spot-correcting-glow-dlja-litsa-50-ml-104067981/?c=353220100",
    "likes": 0
  },
  {
    "id": 1,
    "name": "Dr. Althea крем 345 Relief для лица 50 мл",
    "photo": "../assets/h2.jpg",
    "rating": 5,
    "descrip": "Восстанавливающий крем с ниацинамидом 345 Relief Cream ",
    "delivery": true,
    "linkKaspi": "https://kaspi.kz/shop/p/dr-althea-krem-345-relief-dlja-litsa-50-ml-115616909/?c=353220100",
    "likes": 0
  },
  {
    "id": 2,
    "name": "Farmstay сыворотка All-In-One Collagen and Hyaluronic Acid Ampoule Anti-Wrinkle Whitening для лица 250 мл",
    "photo": "../assets/h3.jpg",
    "rating": 5,
    "descrip": "Это удобный аксессуар, который обеспечивает плавное и точное движение мыши.",
    "delivery": true,
    "linkKaspi": "https://kaspi.kz/shop/p/farmstay-syvorotka-all-in-one-collagen-and-hyaluronic-acid-ampoule-anti-wrinkle-whitening-dlja-litsa-250-ml-100028087/?c=353220100",
    "likes": 0
  },
  {
    "id": 3,
    "name": "The Ordinary сыворотка Niacinamide 10%+Zinc 1% для лица, для зоны декольте 30 мл",
    "photo": "../assets/h4.jpg",
    "rating": 5,
    "descrip": "Сыворотка предназначена",
    "delivery": true,
    "linkKaspi": "https://kaspi.kz/shop/p/the-ordinary-syvorotka-niacinamide-10-zinc-1-dlja-litsa-dlja-zony-dekol-te-30-ml-100703687/?c=353220100",
    "likes": 0
  },
  {
    "id": 4,
    "name": "AXIS-Y сыворотка Vegan Collagen для области вокруг глаз 10 мл",
    "photo": "../assets/h5.jpg",
    "rating": 5,
    "descrip": "Мышь проводная Logitech G102 LightSync позволяет играть с максимальной эффективностью",
    "delivery": true,
    "linkKaspi": "https://kaspi.kz/shop/p/logitech-g102-lightsync-chernyi-100956618/?c=750000000",
    "likes": 0
  }
]
 
constructor(private likesService: LikesService) {} 

addToLikes(product: ProductLocation): void {
  this.likesService.addToLikes(product);
}
}
