import { Component } from '@angular/core';
import { ProductLocationComponent } from '../product-location/product-location.component';
import { ProductLocation } from '../product-location';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ProductLocationComponent, CommonModule],
  templateUrl: `./home.component.html`,
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  productLocationList: ProductLocation[] = [{
    "id": 0,
    "name": "Мышь Logitech G102 Lightsync черный",
    "photo": "../assets/mouse.jpg",
    "rating": 5,
    "descrip": "Мышь проводная Logitech G102 LightSync позволяет играть с максимальной эффективностью",
    "delivery": true,
    "linkKaspi": "https://kaspi.kz/shop/p/logitech-g102-lightsync-chernyi-100956618/?c=750000000"
  },
  {
    "id": 1,
    "name": "Сумка Portcase 9011 черный",
    "photo": "../assets/sumka.jpg",
    "rating": 4.5,
    "descrip": "Предназначен для удобной переноски и защиты устройства",
    "delivery": true,
    "linkKaspi": "https://kaspi.kz/shop/p/sumka-portcase-9011-chernyi-108895248/?c=750000000"
  },
  {
    "id": 2,
    "name": "Планшет Samsung Galaxy Tab A9+ 5G 11 дюйм 8 Гб/128 Гб серебристый",
    "photo": "../assets/plan.jpg",
    "rating": 4,
    "descrip": "Характеристики Планшет Samsung Galaxy Tab A9+ 5G 11 дюйм 8 Гб/128 Гб серебристый",
    "delivery": true,
    "linkKaspi": "https://kaspi.kz/shop/p/samsung-galaxy-tab-a9-5g-11-djuim-8-gb-128-gb-serebristyi-114175605/?c=750000000"
  },
  {
    "id": 3,
    "name": "Groinneya TJ01 пучковые C 0.03 мм черный 10 мм, 16 мм",
    "photo": "../assets/res.jpg",
    "rating": 4.5,
    "descrip": "Набор ресничек, из искусственного волокна, предназначен для наращивания",
    "delivery": true,
    "linkKaspi": "https://kaspi.kz/shop/p/groinneya-tj01-puchkovye-c-0-03-mm-chernyi-10-mm-16-mm-122310719/?c=750000000"
  },
  {
    "id": 4,
    "name": "Наушники Apple AirPods 3 with Lightning Charging Case белый",
    "photo": "../assets/pods.jpg",
    "rating": 5,
    "descrip": "Вы будете чётко слышать весь спектр — от глубоких, насыщенных басов до кристально чистых высоких нот.",
    "delivery": true,
    "linkKaspi": "https://kaspi.kz/shop/p/apple-airpods-3-with-lightning-charging-case-belyi-106667987/?c=750000000"
  },
  {
    "id": 5,
    "name": "Morbido диван прямой Комфорт, обивка микровелюр, 80х210х80 см, серый",
    "photo": "../assets/divan.jpeg",
    "rating": 4,
    "descrip": "Практичный  диван-кровать с легкой системой трансформации",
    "delivery": true,
    "linkKaspi": "https://kaspi.kz/shop/p/morbido-divan-prjamoi-komfort-obivka-mikroveljur-80h210h80-sm-seryi-109382996/?c=750000000"
  },
  {
    "id": 6,
    "name": "Мобильный телефон Nokia 216 Dual Sim черный",
    "photo": "../assets/nokia.jpg",
    "rating": 5,
    "descrip": "Характеристики Мобильный телефон Nokia 216 Dual Sim черный",
    "delivery": true,
    "linkKaspi": "https://kaspi.kz/shop/p/nokia-216-dual-sim-chernyi-8800313/?c=750000000"
  },
  {
    "id": 7,
    "name": "SSD Kingston SNV3S/1000G 1000 Гб",
    "photo": "../assets/king.jpg",
    "rating": 5,
    "descrip": "Kingston’s NV3 PCIe 4.0 NVMe SSD — это новое решение для хранения данных на основе контроллера NVMe Gen 4x4",
    "delivery": true,
    "linkKaspi": "https://kaspi.kz/shop/p/ssd-kingston-snv3s-1000g-1000-gb-123793481/?c=750000000"
  },
  {
    "id": 8,
    "name": "Умная колонка Яндекс Станция Лайт 2 фиолетовый",
    "photo": "../assets/alice.jpg",
    "rating": 4,
    "descrip": "Характеристики Умная колонка Яндекс Станция Лайт 2 фиолетовый",
    "delivery": true,
    "linkKaspi": "https://kaspi.kz/shop/p/jandeks-stantsija-lait-2-fioletovyi-122679962/?c=750000000"
  },
  {
    "id": 9,
    "name": "Наушники OEM Air pro 2 белый",
    "photo": "../assets/head.jpg",
    "rating": 4,
    "descrip": "Характеристики Наушники OEM Air pro 2 белый",
    "delivery": true,
    "linkKaspi": "https://kaspi.kz/shop/p/oem-air-pro-2-belyi-118366664/?c=750000000"
  },
];

shareOnWhatsApp(productUrl: string) {
  const url = `https://wa.me/?text=Check%20this%20product:%20${encodeURIComponent(productUrl)}`;
  window.open(url, '_blank');
}
shareOnTelegram(productUrl: string) {
  const url = `https://t.me/share/url?url=${encodeURIComponent(productUrl)}&text=Check%20this%20product!`;
  window.open(url, '_blank');
}
}
