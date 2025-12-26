import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormateurServiceService } from '../../../Services/formateur-service.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-add-formateur',
    templateUrl: './add-formateur.component.html',
    styleUrls: ['./add-formateur.component.css'],
    standalone: false
})
export class AddFormateurComponent {
  constructor(private formateurService: FormateurServiceService,
              private router: Router) {}

  addFormateur(f: NgForm) {
    this.formateurService.addFormateur(f.value.nom, f.value.prenom, f.value.email, +f.value.telephone, +f.value.numCIN, f.value.photo, f.value.cv, f.value.specialites.split(',')).subscribe(
      () => this.router.navigate(['/formateurs'])
    );
  }
}
