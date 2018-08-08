// a class to help us manager the imports in needed for angular material
import { NgModule } from '@angular/core';

import {
  MatButtonModule,
  MatIconModule,
  MatFormFieldModule,
  MatInputModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatCheckboxModule,
  MatSidenavModule,
  MatToolbarModule,
  MatListModule,
  MatTabsModule
} from '@angular/material';


@NgModule({
  imports: [
            MatButtonModule, MatIconModule,
            MatFormFieldModule, MatCheckboxModule,
            MatInputModule, MatDatepickerModule,
            MatNativeDateModule, MatSidenavModule,
            MatToolbarModule, MatListModule, MatTabsModule
          ],
  exports: [
            MatButtonModule, MatIconModule, MatFormFieldModule,
            MatInputModule, MatDatepickerModule,
            MatNativeDateModule, MatCheckboxModule,
            MatSidenavModule, MatToolbarModule, MatListModule, MatTabsModule
          ]
  })
export class MaterialModule {}
