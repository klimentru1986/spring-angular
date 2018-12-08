import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { NgrxDataModule } from 'ngrx-data';
import { entityConfig } from './ngrx-data-config';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

@NgModule({
  imports: [
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({
      maxAge: 25
    }),
    NgrxDataModule.forRoot(entityConfig)
  ]
})
export class StoreDataModule {}
