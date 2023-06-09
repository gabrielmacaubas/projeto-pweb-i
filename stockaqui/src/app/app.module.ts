import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EstoqueModule } from './estoque/estoque.module';
import { ProdutoModule } from './produto/produto.module';
import { FirestoreModule } from './firestore/firestore.module';
import { LayoutModule } from './layout/layout.module';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { MatBadgeModule } from '@angular/material/badge';
import { MatMenuModule } from '@angular/material/menu';
import { EstoqueService } from './shared/services/estoque.service';
import { HttpClientModule } from '@angular/common/http';
import { InterceptorModule } from "./interceptor/interceptor.module";
import { ReactiveFormsModule } from '@angular/forms';
import { ProdutoService } from './shared/services/produto.service';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    EstoqueModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatDividerModule,
    MatButtonModule,
    HttpClientModule,
    FirestoreModule,
    MatBadgeModule,
    ProdutoModule,
    MatMenuModule,
    InterceptorModule,
    ReactiveFormsModule
  ],
  providers: [
    EstoqueService,
    ProdutoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
