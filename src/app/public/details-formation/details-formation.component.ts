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
  

  constructor(
    // ActivatedRoute : pour récupérer les paramètres d'URL
    private activeRoute: ActivatedRoute,
    private formationService: FormationServiceService,
    private sessionService: SessionServiceService,
    private formateurService: FormateurServiceService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.activeRoute.params.subscribe((params) => {
      //  Récupère la formation par son ID
      this.formationService.getFormationById(params['id']).subscribe((formation) => {
        this.formation = formation;

        this.sessionService.getSessionsByFormationId(formation.id).subscribe((sessions) => {
          this.sessions = sessions

        });
      });
    });
  }
  // Redirige vers la page d'inscription avec l'ID de session
  redirectToInscription(idsession: string): void {
    this.router.navigate(['/public-space/inscription', idsession]);
  }


}
