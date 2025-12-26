import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CandidatServiceService } from '../../Services/candidat-service.service';
import { SessionServiceService } from '../../Services/session-service.service';
import { Session } from '../../Models/session';

@Component({
  selector: 'app-add-candidat',
  templateUrl: './add-candidat.component.html',
  styleUrls: ['./add-candidat.component.css'],
  standalone: false
})
export class AddCandidatComponent implements OnInit {
  session?: Session;

  constructor(private candidatService: CandidatServiceService,
    private router: Router, private activeRoute: ActivatedRoute, private sessionService: SessionServiceService) { }

  addCandidat(f: NgForm) {
    this.candidatService.addCandidat(
      f.value.nom, f.value.prenom, f.value.email,
      +f.value.numCIN, f.value.photo, f.value.motDePasse
    ).subscribe(
      (candidat) => {
        if (this.session) {
          this.session.candidats.push(candidat.id);

          this.sessionService.updateSession(this.session).subscribe(() => {
            this.router.navigate(['/public-space/formations', this.session?.formationId]);
          });
        }
      }
    );
  }

  ngOnInit(): void {
    this.activeRoute.params.subscribe(params => {
      this.sessionService.getSessionById(params['id']).subscribe(
        (session) => {
          this.session = session;
        }
      );
    });
  }
}
