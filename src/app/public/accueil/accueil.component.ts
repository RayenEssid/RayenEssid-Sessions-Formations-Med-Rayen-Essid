// OnInit : Interface pour le cycle de vie (ngOnInit)
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
   // Injection de dépendance : Angular donne le service
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
categoryImages: { [key: string]: string } = {
  'Informatique':'https://www.weodeo.com/wp-content/uploads/2021/12/reseau-informatique-scaled-1-e1762420803612.jpeg',
  'Développement_web': 'https://images.unsplash.com/photo-1498050108023-c5249f4df085',
  'Génie Civil': 'https://www.etudestech.com/wp-content/uploads/2022/11/adobestock_195053884-scaled.jpeg',
  'Construction': 'https://www.oracle.com/a/ocom/img/rc24-bsa-construction-scheduling.jpg',
  'Réseaux Informatiques':'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-An56BbxbGSZNvw18TIizLeBbCeCbCBZ31Q&s',
  'Base de données': 'https://www.dimo-crm.fr/wp-content/uploads/gestion-de-base-de-donnees-clients.jpg',
  'Sécurité': 'https://www.id-interactive.fr/_next/image?url=%2Fapi%2Fmedia%2Ffile%2Fcybersecurite-conseils.jpg%3Fv%3D1745333384843&w=3840&q=80',
  'Systèmes Embarqués': 'https://94fa3c88.delivery.rocketcdn.me/wp-content/uploads/2024/06/systemes-embarques-datascientest-1024x585.jpg',
  'Électronique': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHgHqE6jpF0pWud2hF_zUgcxIqKvDI3OCvfQ&s'
};

}
