import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './pages/not-found/not-found.component';

const routes: Routes = [
  {
    path:'',
    pathMatch:'full',
    redirectTo:'dashboard'
  },
  {
    path:'dashboard',
    loadChildren: ()=>import('./modules/dashboard/dashboard.module').then(m=>m.DashboardModule)
  },
  {
    path:'details',
    loadChildren: ()=>import('./modules/product-detail/product-detail.module').then(m=>m.ProductDetailModule)
  },
  {
    path:'createCollection',
    loadChildren: ()=>import('./modules/create-collection/create-collection.module').then(m=>m.CreateCollectionModule)
  },
  {
    path:'createNft',
    loadChildren: ()=>import('./modules/create-nft/create-nft.module').then(m=>m.CreateNftModule)
  },
  {
    path:'**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
