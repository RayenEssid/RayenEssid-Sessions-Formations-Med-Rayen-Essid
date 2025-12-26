import { Component, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'app-search-module',
    imports: [],
    templateUrl: './search-module.component.html',
    styleUrl: './search-module.component.css'
})
export class SearchModuleComponent {
  searchValue: string = '';
  @Output() recherche = new EventEmitter <string>();
  ModifierSearchValue(event: Event): void {
    const target = event.target as HTMLInputElement;
    this.searchValue = target.value;
    this.recherche.emit(this.searchValue);
  }
}
