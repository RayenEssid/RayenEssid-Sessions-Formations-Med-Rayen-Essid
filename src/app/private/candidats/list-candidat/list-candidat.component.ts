import { Component } from '@angular/core';
import { Candidat } from '../../../Models/candidat';
import { CandidatServiceService } from '../../../Services/candidat-service.service';

@Component({
    selector: 'app-list-candidat',
    templateUrl: './list-candidat.component.html',
    styleUrl: './list-candidat.component.css',
    standalone: false
})
export class ListCandidatComponent {
  candidats?: Candidat[];

  constructor(private candidatService: CandidatServiceService) {}

  deleteCandidat(id: string) {
    if (confirm("Êtes-vous sûr de vouloir supprimer ce candidat ?")) {
      this.candidatService.deleteCandidat(id).subscribe(
        candidatDeleted => this.candidats = this.candidats?.filter(candidat => candidat!.id !== candidatDeleted.id)
      );
    }
  }

  ngOnInit(): void {
    this.candidatService.getCandidats().subscribe(
      candidats => this.candidats = candidats
    );
  }
}
