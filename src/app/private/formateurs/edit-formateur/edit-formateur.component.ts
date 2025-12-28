import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Formateur } from '../../../Models/formateur';
import { FormateurServiceService } from '../../../Services/formateur-service.service';

@Component({
    selector: 'app-edit-formateur',
    templateUrl: './edit-formateur.component.html',
    styleUrls: ['./edit-formateur.component.css'],
    standalone: false
})
export class EditFormateurComponent implements OnInit {
  formateur?: Formateur;

  constructor(
    private activeRoute: ActivatedRoute,
    private formateurService: FormateurServiceService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.activeRoute.params.subscribe(parametres => {
      this.formateurService.getFormateurById(parametres['id']).subscribe(
        formateur => this.formateur = formateur
      );
    });
  }

  editFormateur(f: NgForm): void {
    this.formateurService.editFormateur(this.formateur!).subscribe(
      () => this.router.navigate(['/admin-space/formateurs'])
    );
  }
}
