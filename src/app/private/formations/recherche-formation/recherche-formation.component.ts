import { Component } from '@angular/core';
import { Formation } from '../../../Models/formation';
import { FormationServiceService } from '../../../Services/formation-service.service';

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

  ngOnInit(): void {
      this.formationService.getFormations().subscribe(
        formations => this.formations = formations
      );
  }
  deleteFormation(id: string) {
    if (confirm("Êtes-vous sûr de vouloir supprimer cette formation ?")) {
      this.formationService.deleteFormation(id).subscribe(
        formationDeleted => this.formations = this.formations?.filter(formation => formation!.id !== formationDeleted.id)
      );
    }
  }
}
