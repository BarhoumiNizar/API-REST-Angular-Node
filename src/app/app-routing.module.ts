import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AffichageProduitComponent } from './Produit/affichage-produit/affichage-produit.component';
import { AffichagePersonnesComponent } from './Personnes/affichage-personnes/affichage-personnes.component';
import { AjoutPersonneComponent } from './Personnes/ajout-personne/ajout-personne.component';


const routes: Routes = [
  {
    path :'Produit/Affichage',component:AffichageProduitComponent
  },
  {
    path :'Personnes/Affiche',component:AffichagePersonnesComponent
  },
  {
    path :'Personnes/Ajout',component:AjoutPersonneComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
