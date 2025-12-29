import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';  // Pour Template-driven forms
import { SessionServiceService } from '../../../Services/session-service.service';

@Component({
    selector: 'app-add-session',
    templateUrl: './add-session.component.html',
    styleUrls: ['./add-session.component.css'],
    standalone: false
})
export class AddSessionComponent implements OnInit {
    // ID de la formation (reçu depuis l'URL)
  formationId!: string;  // Le "!" signifie "je promets qu'il sera initialisé"

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
    //  Transforme la chaîne de formateurs en tableau
    const formateursArray = f.value.formateurs
      ? f.value.formateurs.split(',').map((formateur: string) => formateur.trim())
      : [];// Tableau vide si pas de valeur
    const candidatsArray = f.value.candidats
      ? f.value.candidats.split(',').map((candidat: string) => candidat.trim())
      : [];
  //  Appelle le service pour créer la session
    this.sessionService
      .addSession(
        this.formationId,
        formateursArray,
        f.value.dateDeb,
        f.value.dateFin,
        f.value.description,
        candidatsArray
      )
      .subscribe(() => 
        //  Redirige vers les détails de la formation après succès
        this.router.navigate(['/admin-space/formations',this.formationId]));
  }
}
