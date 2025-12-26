import { Component } from '@angular/core';
import { Formateur } from '../../../Models/formateur';
import { FormateurServiceService } from '../../../Services/formateur-service.service';

@Component({
    selector: 'app-list-formateur',
    templateUrl: './list-formateur.component.html',
    styleUrl: './list-formateur.component.css',
    standalone: false
})
export class ListFormateurComponent {
  formateurs?: Formateur[];

  constructor(private formateurService: FormateurServiceService) {}

  deleteFormateur(id: string) {
    if (confirm("Êtes-vous sûr de vouloir supprimer ce formateur ?")) {
      this.formateurService.deleteFormateur(id).subscribe(
        formateurDeleted => this.formateurs = this.formateurs?.filter(formateur => formateur!.id !== formateurDeleted.id)
      );
    }
  }

  ngOnInit(): void {
    this.formateurService.getFormateurs().subscribe(
      formateurs => this.formateurs = formateurs
    );
  }
}
