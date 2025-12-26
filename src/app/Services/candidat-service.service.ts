import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Candidat } from '../Models/candidat';

@Injectable({
  providedIn: 'root'
})
export class CandidatServiceService {

  constructor(private httpClient: HttpClient) { }
  private baseURL: string = 'http://localhost:3000/candidats';
  private options = {
    headers : new HttpHeaders(
    {
      'content-type' : "application/json"
    }
    )
  }
  
  getCandidats(): Observable<Candidat[]> {
    return this.httpClient.get<Candidat[]>(this.baseURL);
  }
  getCandidatById(id: string) : Observable<Candidat>{
    return this.httpClient.get<Candidat>(this.baseURL+"/"+id);
  }
  deleteCandidat(id : string):Observable<Candidat>{
    return this.httpClient.delete<Candidat>(this.baseURL+"/"+id)
  }
  addCandidat(nom: string, prenom: string, email: string, numCIN: number, photo: string, motDePasse: string): Observable<Candidat> {
    return this.httpClient.post<Candidat>(
      this.baseURL,
      JSON.stringify({
        nom: nom,
        prenom: prenom,
        email: email,
        numCIN: numCIN,
        photo: photo,
        motDePasse: motDePasse
      }),
      this.options
    );
  }
  editCandidat(candidat: Candidat): Observable<Candidat> {
    return this.httpClient.put<Candidat>(
      this.baseURL + "/" + candidat.id,
      JSON.stringify({
        nom: candidat.nom,
        prenom: candidat.prenom,
        email: candidat.email,
        numCIN: candidat.numCIN,
        photo: candidat.photo,
        motDePasse: candidat.motDePasse
      }),
      this.options
    );
  }
  
}
