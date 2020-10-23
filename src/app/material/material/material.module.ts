import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatCardModule, MatFormFieldModule } from '@angular/material';

const material = [MatButtonModule,
                  MatCardModule,
                  MatFormFieldModule]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ...material
  ],
  exports: [
    ...material
  ]
})
export class MaterialModule { }
