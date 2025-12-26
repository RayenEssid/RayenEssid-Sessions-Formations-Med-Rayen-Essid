import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CandidatServiceService } from '../../../Services/candidat-service.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-add-candidat',
    templateUrl: './add-candidat.component.html',
    styleUrls: ['./add-candidat.component.css'],
    standalone: false
})
export class AddCandidatComponent {
  constructor(private candidatService: CandidatServiceService,
              private router: Router) {}

  addCandidat(f: NgForm) {
    this.candidatService.addCandidat(f.value.nom, f.value.prenom, f.value.email, +f.value.numCIN, f.value.photo, f.value.motDePasse).subscribe(
      () => this.router.navigate(['/admin-space/candidats'])
    );
  }
}
