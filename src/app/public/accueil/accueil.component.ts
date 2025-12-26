import { Component, OnInit } from '@angular/core';
import { Formation } from '../../Models/formation';
import { FormationServiceService } from '../../Services/formation-service.service';

@Component({
    selector: 'app-accueil',
    templateUrl: './accueil.component.html',
    styleUrl: './accueil.component.css',
    standalone: false
})
export class AccueilComponent implements OnInit{
  formations: Formation[] = [];
  categories: string[] = [];

  constructor(private formationService: FormationServiceService) { }
  ngOnInit(): void {
    this.formationService.getFormations().subscribe({
      next: (res) => {
        this.formations = res;
        this.formations.map(formation => {
          formation.categories.map(category => {
            if (!this.categories.includes(category)) {
              this.categories.push(category);
            }
          });
        });
      }
    })
  }
}
