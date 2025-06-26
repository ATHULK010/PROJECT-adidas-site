import { Routes } from '@angular/router';
import { Carosel } from './carosel/carosel';
import { About } from './about/about';
import { Products } from './products/products';
import { Cart } from './cart/cart';
import { User } from './user/user';
import { Partner } from './partner/partner';
import { SingleviewList } from './singleview-list/singleview-list';
import { Home } from './pages/home/home';

export const routes: Routes = [{path:'',component:Carosel},{path:'about',component:About},
    {path:'products', component:Products},{path:'cart',component:Cart},{path:'user',component:User},
   {path:'partner',component:Partner},{path:'singleview-list/:titleid',component:SingleviewList},{path:'home',component:Home},];
