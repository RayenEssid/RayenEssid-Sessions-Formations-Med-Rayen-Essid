import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Session } from '../../../Models/session';
import { SessionServiceService } from '../../../Services/session-service.service';

@Component({
    selector: 'app-edit-session',
    templateUrl: './edit-session.component.html',
    styleUrls: ['./edit-session.component.css'],
    standalone: false
})
export class EditSessionComponent implements OnInit {
  session?: Session;
  formateursString: string = '';
  candidatsString: string = '';

  constructor(
    private activeRoute: ActivatedRoute,
    private sessionService: SessionServiceService,
    private router: Router
  ) {}

  onFormateursInput(event: Event): void {
    this.formateursString = (event.target as HTMLInputElement).value;
  }

  onCandidatsInput(event: Event): void {
    this.candidatsString = (event.target as HTMLInputElement).value;
  }

  ngOnInit(): void {
    this.activeRoute.params.subscribe(params => {
      this.sessionService.getSessionById(params['id']).subscribe(
        (session) => {
          this.session = session;

          if (this.session) {
            this.formateursString = this.session.formateurs.join(', ');
            this.candidatsString = this.session.candidats.join(', ');
          }
        }
      );
    });
  }

  editSession(f: NgForm): void {
    if (this.session) {
      this.session.formateurs = this.formateursString.split(',').map(formateur => formateur.trim());
      this.session.candidats = this.candidatsString.split(',').map(candidat => candidat.trim());

      this.sessionService.editSession(this.session).subscribe(
        () => this.router.navigate(['/admin-space/formations',this.session?.formationId])
      );
    }
  }
}
