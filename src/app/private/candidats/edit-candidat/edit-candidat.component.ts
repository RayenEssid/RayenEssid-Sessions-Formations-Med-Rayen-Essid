import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Candidat } from '../../../Models/candidat';
import { CandidatServiceService } from '../../../Services/candidat-service.service';

@Component({
    selector: 'app-edit-candidat',
    templateUrl: './edit-candidat.component.html',
    styleUrl: './edit-candidat.component.css',
    standalone: false
})
export class EditCandidatComponent implements OnInit {
  candidat?: Candidat;

  constructor(
    private activeRoute: ActivatedRoute,
    private candidatService: CandidatServiceService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.activeRoute.params.subscribe(parametres => {
      this.candidatService.getCandidatById(parametres['id']).subscribe(
        candidat => this.candidat = candidat
      );
    });
  }

  editCandidat(f: NgForm): void {
    this.candidatService.editCandidat(this.candidat!).subscribe(
      () => this.router.navigate(['/admin-space/candidats'])
    );
  }
}
