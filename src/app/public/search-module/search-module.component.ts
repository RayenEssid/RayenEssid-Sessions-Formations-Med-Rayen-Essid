import { Component, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
    selector: 'app-search-module',
    imports: [CommonModule],
    templateUrl: './search-module.component.html',
    styleUrl: './search-module.component.css'
})
export class SearchModuleComponent {
  searchValue: string = '';
  @Output() recherche = new EventEmitter<string>();
  
  // Référence à l'élément input
  @ViewChild('searchInput') searchInput!: ElementRef<HTMLInputElement>;
  
  ModifierSearchValue(event: Event): void {
    const target = event.target as HTMLInputElement;
    this.searchValue = target.value;
    this.recherche.emit(this.searchValue);
  }
  
  clearSearch(): void {
    // 1. Vide la variable TypeScript
    this.searchValue = '';
    
    // 2. Vide VISUELLEMENT l'input HTML
    this.searchInput.nativeElement.value = '';
    
    // 3. Remet le focus sur l'input
    this.searchInput.nativeElement.focus();
    
    // 4. Émet l'événement vide vers le parent
    this.recherche.emit('');
  }
}