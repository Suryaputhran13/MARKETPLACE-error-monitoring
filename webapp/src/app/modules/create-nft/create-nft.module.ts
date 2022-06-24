import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateNftRoutingModule } from './create-nft-routing.module';
import { NftCreationComponentComponent } from './nft-creation-component/nft-creation-component.component';
import { FormsModule } from '@angular/forms';

import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { CommonComponentsModule } from 'src/app/common/common-components.module';
import {DropdownModule} from 'primeng/dropdown';

@NgModule({
  declarations: [
    NftCreationComponentComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    CreateNftRoutingModule,
    CommonComponentsModule,
    InputTextModule,
    InputTextareaModule,
    ButtonModule,
    DropdownModule
  ],
  bootstrap: [NftCreationComponentComponent]
})
export class CreateNftModule { }
