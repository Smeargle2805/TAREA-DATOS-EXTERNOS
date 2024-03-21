import { Routes } from '@angular/router';
import { ItemlistComponent } from './itemlist/itemlist.component';
import { BerrylistComponent } from './berrylist/berrylist.component';

export const routes: Routes = [
    {
        path:"Items", component: ItemlistComponent
    },
    {
        path:"Bayas", component: BerrylistComponent
    }
];
