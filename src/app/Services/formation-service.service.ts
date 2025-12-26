import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Formation } from '../Models/formation';

@Injectable({
  providedIn: 'root'
})
export class FormationServiceService {

  constructor(private httpClient: HttpClient) { }
  private baseURL: string = 'http://localhost:3000/formations';
  private options = {
    headers : new HttpHeaders(
    {
      'content-type' : "application/json"
    }
    )
  }
  
  getFormations(): Observable<Formation[]> {
    return this.httpClient.get<Formation[]>(this.baseURL);
  }
  getFormationById(id: string) : Observable<Formation>{
    return this.httpClient.get<Formation>(this.baseURL+"/"+id);
  }
  addFormation(titre: string, description: string, chargeHoraire: number, programme: string, niveau: string, tags: string[], categories: string[]): Observable<Formation> {
    return this.httpClient.post<Formation>(
      this.baseURL,
      JSON.stringify({
        titre: titre,
        description: description,
        chargeHoraire: chargeHoraire,
        programme: programme,
        niveau: niveau,
        tags: tags,
        categories: categories
      }),
      this.options
    );
  }
  
  deleteFormation(id : string):Observable<Formation>{
        return this.httpClient.delete<Formation>(this.baseURL+"/"+id)
  }
  editFormation(formation: Formation): Observable<Formation> {
    return this.httpClient.put<Formation>(
      this.baseURL + "/" + formation.id,
      JSON.stringify({
        titre: formation.titre,
        description: formation.description,
        chargeHoraire: formation.chargeHoraire,
        programme: formation.programme,
        niveau: formation.niveau,
        tags: formation.tags,
        categories: formation.categories
      }),
      this.options
    );
  }
  
}
