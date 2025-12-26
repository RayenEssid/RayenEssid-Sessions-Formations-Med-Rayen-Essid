import { Component } from '@angular/core';
import { Formation } from '../../Models/formation';
import { FormationServiceService } from '../../Services/formation-service.service';

@Component({
    selector: 'app-recherche-formation',
    templateUrl: './recherche-formation.component.html',
    styleUrl: './recherche-formation.component.css',
    standalone: false
})
export class RechercheFormationComponent {
  formations? :Formation[];
  recherche ="";
  constructor(private formationService: FormationServiceService){}

  getSearch(event: string){
    this.recherche = event;
  }
  filteredFormations() {
    return this.formations?.filter(formation =>
      formation.tags.join(" ").toLowerCase().includes(this.recherche.toLowerCase())
    );
  }
  ngOnInit(): void {
      this.formationService.getFormations().subscribe(
        formations => this.formations = formations
      );
  }
}
