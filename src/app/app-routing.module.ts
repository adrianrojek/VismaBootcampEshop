import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PageNotFoundComponent} from './shared/components/page-not-found/page-not-found.component';

const routes: Routes = [
  {path: 'home', loadChildren: () => import('./home-page/home-page.module').then(mod => mod.HomePageModule)},
  {path: 'shop', loadChildren: () => import('./shop/shop.module').then(mod => mod.ShopModule)},
  {path: 'admin', loadChildren: () => import('./admin/admin.module').then(mod => mod.AdminModule)},
  {path: 'cart', loadChildren: () => import('./cart/cart.module').then(mod => mod.CartModule)},
  {path: '', loadChildren: () => import('./home-page/home-page.module').then(mod => mod.HomePageModule)},
  {path: '**', component: PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
