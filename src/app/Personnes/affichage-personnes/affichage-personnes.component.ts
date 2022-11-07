import { Component, OnInit } from '@angular/core';
import { PersonnesService } from '../../Services/personnes.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-affichage-personnes',
  templateUrl: './affichage-personnes.component.html',
  styleUrls: ['./affichage-personnes.component.css']
})
export class AffichagePersonnesComponent implements OnInit {

  personnes:any=[]
  id=0
  constructor(private persService:PersonnesService,private route:Router) {  }

  ngOnInit(): void {
    this.getPersonnes()
  }

  getPersonnes(){
    return this.persService.getPersonnes().subscribe(
      resultat=>{
        console.log('Nb Personnes '+resultat)
        this.personnes=resultat
      }
    )
  }

  // Delete Personne
  deletePersonne(id:number){
    //console.log('id = '+id)
    return this.persService.deletePersonne(id).subscribe(
      data=>{
        
        console.log('Suppression effectuée '+id)
        // on utilise this.route.navigate si on a la suppression dans un autre component
        //this.route.navigate(['']);
       // this.getPersonnes()
       window.location.reload()
       /*
            //from cache
            window.location.reload(); 
            window.location.reload(false);
            // from server
            window.location.reload(true);

       */
      }
    ) 
  }
}
