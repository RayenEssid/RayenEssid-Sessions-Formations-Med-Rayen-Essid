import { Component, OnInit } from '@angular/core';
import { Formation } from '../../Models/formation';
import { Session } from '../../Models/session';
import { FormationServiceService } from '../../Services/formation-service.service';
import { SessionServiceService } from '../../Services/session-service.service';
import { FormateurServiceService } from '../../Services/formateur-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Candidat } from '../../Models/candidat';

@Component({
    selector: 'app-details-formation',
    templateUrl: './details-formation.component.html',
    styleUrl: './details-formation.component.css',
    standalone: false
})
export class DetailsFormationComponent implements OnInit {
  // Initialisation pour éviter les erreurs "undefined"
  formation = new Formation("", "", "", 0, "", "débutant", [], []);
  sessions: Session[] = [];
  //nomFormateurs?: string;
  //nomCandidat: string = '';
  //prenomCandidat: string = '';
  //emailCandidat: string = '';

  constructor(
    private activeRoute: ActivatedRoute,
    private formationService: FormationServiceService,
    private sessionService: SessionServiceService,
    private formateurService: FormateurServiceService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.activeRoute.params.subscribe((params) => {
      this.formationService.getFormationById(params['id']).subscribe((formation) => {
        this.formation = formation;
  
        this.sessionService.getSessionsByFormationId(formation.id).subscribe((sessions) => {
          this.sessions = sessions
          //this.sessions = sessions.map((session) => ({
            //nomsFormateurs: this.getNomsFormateurs(session.formateurs),
          //}));
        });
      });
    });
  }
  redirectToInscription(idsession: string): void {
    this.router.navigate(['/public-space/inscription',idsession]);
  }
  

}
