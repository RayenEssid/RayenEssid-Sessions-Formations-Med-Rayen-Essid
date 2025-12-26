import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Formateur } from '../Models/formateur';

@Injectable({
  providedIn: 'root'
})
export class FormateurServiceService {

  constructor(private httpClient: HttpClient) { }
  private baseURL: string = 'http://localhost:3000/formateurs';
  private options = {
    headers : new HttpHeaders(
    {
      'content-type' : "application/json"
    }
    )
  }
  
  getFormateurs(): Observable<Formateur[]> {
    return this.httpClient.get<Formateur[]>(this.baseURL);
  }
  getFormateurById(id: string) : Observable<Formateur>{
    return this.httpClient.get<Formateur>(this.baseURL+"/"+id);
  }
  deleteFormateur(id : string):Observable<Formateur>{
      return this.httpClient.delete<Formateur>(this.baseURL+"/"+id)
  }
  addFormateur(nom: string, prenom: string, email: string, telephone: number, numCIN: number, photo: string, cv: string, specialites: string[]): Observable<Formateur> {
    return this.httpClient.post<Formateur>(
      this.baseURL,
      JSON.stringify({
        nom: nom,
        prenom: prenom,
        email: email,
        telephone: telephone,
        numCIN: numCIN,
        photo: photo,
        cv: cv,
        specialites: specialites
      }),
      this.options
    );
  }
  editFormateur(formateur: Formateur): Observable<Formateur> {
    return this.httpClient.put<Formateur>(
      this.baseURL + "/" + formateur.id,
      JSON.stringify({
        nom: formateur.nom,
        prenom: formateur.prenom,
        email: formateur.email,
        telephone: formateur.telephone,
        numCIN: formateur.numCIN,
        photo: formateur.photo,
        cv: formateur.cv,
        specialites: formateur.specialites
      }),
      this.options
    );
  }
  
}
