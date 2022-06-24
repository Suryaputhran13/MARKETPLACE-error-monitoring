import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NftCreationComponentComponent } from './nft-creation-component/nft-creation-component.component';

const routes: Routes = [
    {
        path: '',
        component: NftCreationComponentComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CreateNftRoutingModule { }
