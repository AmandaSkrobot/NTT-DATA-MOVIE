import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CardComponent } from './card.component';
import { CardDetailComponent } from '../card-detail/card-detail.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
     CardComponent
  ],
  declarations: [
    CardComponent,
     CardDetailComponent
  ]
})
export class CardModule {}