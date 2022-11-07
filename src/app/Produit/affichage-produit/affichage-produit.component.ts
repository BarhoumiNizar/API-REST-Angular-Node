import { Component, OnInit } from '@angular/core';
import { ProduitService } from '../../Services/produit.service';
@Component({
  selector: 'app-affichage-produit',
  templateUrl: './affichage-produit.component.html',
  styleUrls: ['./affichage-produit.component.css']
})
export class AffichageProduitComponent implements OnInit {
  produits : any=[];
  constructor(private produitService:ProduitService) { }

  ngOnInit(): void {
    this.ProduitListe()
  }
  ProduitListe(){
    return this.produitService.getProduits().subscribe(
      data=>{
        console.log('hfhdhh GGGG '+ data.length )
        this.produits=data
       }
    );
 }
}
