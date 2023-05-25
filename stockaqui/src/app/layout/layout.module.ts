import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { EstoqueModule } from '../estoque/estoque.module';
import { RouterLink } from '@angular/router';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    SidebarComponent,
    FooterComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatCardModule,
    MatDividerModule,
    MatFormFieldModule,
    EstoqueModule,
    RouterLink
  ],
  exports: [
    SidebarComponent,
    FooterComponent,
    HomeComponent
  ]
})
export class LayoutModule { }
