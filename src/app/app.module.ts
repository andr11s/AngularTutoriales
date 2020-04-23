import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'


import { AppComponent } from './app.component';
import { BodyComponent } from './body/body.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { DatabindingComponent } from './temastutorial/databinding/databinding.component';
import { ContenidoComponent } from './temastutorial/contenido/contenido.component';
import { DirectivasComponent } from './temastutorial/directivas/directivas.component';
import { ApphomeComponent } from './apphome/apphome.component';
import { AppRoutingModule } from './app.routes';
import { FormreactComponent } from './temastutorial/formreact/formreact.component';

import { PersonasService } from './temastutorial/formreact/formreat.service'

@NgModule({
  declarations: [
    AppComponent,
    BodyComponent,
    HeaderComponent,
    FooterComponent,
    DatabindingComponent,
    ContenidoComponent,
    DirectivasComponent,
    ApphomeComponent,
    FormreactComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [PersonasService],
  bootstrap: [AppComponent]
})
export class AppModule { }
