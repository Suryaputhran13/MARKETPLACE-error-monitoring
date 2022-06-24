import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreationComponentComponent } from './creation-component/creation-component.component';

const routes: Routes = [
    {
        path: '',
        component: CreationComponentComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CreateCollectionRoutingModule { }
