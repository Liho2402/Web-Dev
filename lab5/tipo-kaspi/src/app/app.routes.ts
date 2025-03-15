import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HealthComponent } from './health/health.component';
import { PcDeviceComponent } from './pc-device/pc-device.component';
import { PhoneComponent } from './phone/phone.component';
import { SchoolComponent } from './school/school.component';
import { LikesComponent } from './likes/likes.component';

export const routes: Routes = [
    {
        path: 'home',
        component: HomeComponent,
        title: 'Home'
    },
    {
        path: 'health',
        component: HealthComponent,
        title: 'Health'
    },
    {
        path: 'pc_device',
        component: PcDeviceComponent,
        title: 'PC Devices'
    },
    {
        path: 'phone',
        component: PhoneComponent,
        title: 'Phones'
    },
    {
        path: 'school',
        component: SchoolComponent,
        title: 'School'
    },
    {
        path: 'likes', 
        component: LikesComponent,
        title: 'Like'
    }
];
