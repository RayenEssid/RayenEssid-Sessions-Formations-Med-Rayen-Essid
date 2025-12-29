
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { FormationServiceService } from '../../../Services/formation-service.service';

@Component({
  selector: 'app-add-formation',
  templateUrl: './add-formation.component.html',
  styleUrls: ['./add-formation.component.css'],
  standalone: false
})
export class AddFormationComponent {
  constructor(private formationService: FormationServiceService, private router: Router) { }

  addFormation(f: NgForm) {
    // Transforme la chaîne de tags en tableau
    const tagsArray = f.value.tags ? f.value.tags.split(',').map((tag: string) => tag.trim()) : [];
    const categoriesArray = f.value.categories ? f.value.categories.split(',').map((cat: string) => cat.trim()) : [];
    // Appelle le service pour créer la formation
    this.formationService
      .addFormation(
        f.value.titre,
        f.value.description,
        +f.value.chargeHoraire,
        f.value.programme,
        f.value.niveau,
        tagsArray,
        categoriesArray
      )
      .subscribe(() =>
        // Redirige vers la liste des formations après succès 
       this.router.navigate(['/admin-space/formations']));
  }
}
