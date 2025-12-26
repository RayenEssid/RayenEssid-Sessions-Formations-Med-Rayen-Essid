import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { SessionServiceService } from '../../../Services/session-service.service';

@Component({
    selector: 'app-add-session',
    templateUrl: './add-session.component.html',
    styleUrls: ['./add-session.component.css'],
    standalone: false
})
export class AddSessionComponent implements OnInit {
  formationId!: string;

  constructor(
    private route: ActivatedRoute,
    private sessionService: SessionServiceService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.formationId = params['fid'] || '';
    });
  }

  addSession(f: NgForm): void {
    const formateursArray = f.value.formateurs
      ? f.value.formateurs.split(',').map((formateur: string) => formateur.trim())
      : [];
    const candidatsArray = f.value.candidats
      ? f.value.candidats.split(',').map((candidat: string) => candidat.trim())
      : [];

    this.sessionService
      .addSession(
        this.formationId,
        formateursArray,
        f.value.dateDeb,
        f.value.dateFin,
        f.value.description,
        candidatsArray
      )
      .subscribe(() => this.router.navigate(['/admin-space/formations',this.formationId]));
  }
}
