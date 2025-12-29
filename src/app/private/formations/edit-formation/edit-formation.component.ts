import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Formation } from '../../../Models/formation';
import { FormationServiceService } from '../../../Services/formation-service.service';

@Component({
    selector: 'app-edit-formation',
    templateUrl: './edit-formation.component.html',
    styleUrls: ['./edit-formation.component.css'],
    standalone: false
})
export class EditFormationComponent implements OnInit {
  formation?: Formation;
  tagsString: string = '';  
  categoriesString: string = ''; 

    constructor(
    private activeRoute: ActivatedRoute,      // Pour récupérer l'ID dans l'URL
    private formationService: FormationServiceService, // Service CRUD
    private router: Router                    // Pour naviguer après édition
  ) {}

  onTagsInput(event: Event): void {
    this.tagsString = (event.target as HTMLInputElement).value;
  }

  onCategoriesInput(event: Event): void {
     // Récupère la valeur de l'input
    this.categoriesString = (event.target as HTMLInputElement).value;
  }

  ngOnInit(): void {
    this.activeRoute.params.subscribe(params => {
      this.formationService.getFormationById(params['id']).subscribe(
        (formation) => {
          this.formation = formation;
        //  Transforme les tableaux en strings pour l'affichage
          if (this.formation) {
      // 1. Convertit les strings en tableaux
      // "angular, web" → ["angular", "web"]
            this.tagsString = this.formation.tags.join(', ');
            this.categoriesString = this.formation.categories.join(', ');
          }
        }
      );
    });
  }

  editFormation(f: NgForm): void {
    if (this.formation) {
      this.formation.tags = this.tagsString.split(',').map(tag => tag.trim());
      this.formation.categories = this.categoriesString.split(',').map(category => category.trim());

      this.formationService.editFormation(this.formation).subscribe(
         // Redirige vers la liste après succès
        () => this.router.navigate(['/admin-space/formations'])
      );
    }
  }
}
