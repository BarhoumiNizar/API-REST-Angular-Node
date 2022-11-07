import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';
//import { Observable } from 'rxjs';
import { Personne } from 'src/app/Interface/personne';
@Injectable({
  providedIn: 'root'
})
export class PersonnesService {
// API Personnes
private  APIPersonnesAfficher ="http://localhost:3000/personnes/Afficher";
private  APIPersonnesDelete ="http://localhost:3000/delete/";
private  APIPersonnesAdd ="http://localhost:3000/users/";
  constructor(private http:HttpClient) { }
  public getPersonnes(){
    return this.http.get<any>(this.APIPersonnesAfficher)
  }

  public deletePersonne(id:number){
    return this.http.get(this.APIPersonnesDelete+`${id}`)
  }

  public AddPersonne(pers:Personne){
    return this.http.post(this.APIPersonnesAdd,pers)
  }
}
