import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { ActionsMenuComponent } from '@shared/components/actions-menu/actions-menu/actions-menu.component';



@NgModule({
  declarations: [
    ActionsMenuComponent
  ],
  imports: [
    CommonModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule
  ],
  exports: [
    ActionsMenuComponent
  ]
})
export class ActionsMenuModule { }
