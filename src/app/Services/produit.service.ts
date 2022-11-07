import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';
//import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProduitService {
// API Produit
private  URLAfficheProduit ="http://localhost:3000/produits/Affiche";
  constructor(private http:HttpClient) { }

  public getProduits(){
    return this.http.get<any>(this.URLAfficheProduit)     
  }
}
