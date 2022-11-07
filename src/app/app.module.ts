import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AffichageProduitComponent } from './Produit/affichage-produit/affichage-produit.component';
import {HttpClientModule} from'@angular/common/http';
import { AffichagePersonnesComponent } from './Personnes/affichage-personnes/affichage-personnes.component';
import { AjoutPersonneComponent } from './Personnes/ajout-personne/ajout-personne.component';

@NgModule({
  declarations: [
    AppComponent,
    AffichageProduitComponent,
    AffichagePersonnesComponent,
    AjoutPersonneComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
