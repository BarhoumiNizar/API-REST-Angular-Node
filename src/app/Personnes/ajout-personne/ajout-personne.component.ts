import { Component, OnInit } from '@angular/core';
import { PersonnesService } from '../../Services/personnes.service';
import { Router } from '@angular/router';
import { Personne } from 'src/app/Interface/personne';
@Component({
  selector: 'app-ajout-personne',
  templateUrl: './ajout-personne.component.html',
  styleUrls: ['./ajout-personne.component.css']
})
export class AjoutPersonneComponent implements OnInit {

  constructor(private persService:PersonnesService,private route:Router) { }

  ngOnInit(): void {
  }

  addPersonne(p:any){
	  // subscribe ca fonctionne si dans l'url de back on a un return
   return this.persService.AddPersonne(p).subscribe(
      resultat=>{
        console.log('Ajout effectuée ')
         this.route.navigate(['/Personnes/Affiche']);
        
      }
    )
  }
   

   
  
  
}
