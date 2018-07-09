import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  imports: [
    CommonModule,
    MatToolbarModule,
    MatTableModule,
    MatInputModule,
    MatButtonModule
  ],
  declarations: [],
  exports: [MatToolbarModule, MatTableModule, MatInputModule, MatButtonModule]
})
export class MaterialModule {}
