import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  imports: [CommonModule, MatToolbarModule, MatTableModule],
  declarations: [],
  exports: [MatToolbarModule, MatTableModule]
})
export class MaterialModule {}
