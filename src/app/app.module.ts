import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { BodyComponent } from './body/body.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { DatabindingComponent } from './temastutorial/databinding/databinding.component';
import { ContenidoComponent } from './temastutorial/contenido/contenido.component';
import { DirectivasComponent } from './temastutorial/directivas/directivas.component';
import { ApphomeComponent } from './apphome/apphome.component';
import { AppRoutingModule } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    BodyComponent,
    HeaderComponent,
    FooterComponent,
    DatabindingComponent,
    ContenidoComponent,
    DirectivasComponent,
    ApphomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
