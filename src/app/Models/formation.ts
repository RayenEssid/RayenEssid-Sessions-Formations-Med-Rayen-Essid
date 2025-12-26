export class Formation {
    public get categories(): string[] {
        return this._categories;
    }
    public set categories(value: string[]) {
        this._categories = value;
    }
    public get tags(): string[] {
        return this._tags;
    }
    public set tags(value: string[]) {
        this._tags = value;
    }
    public get niveau(): "débutant" | "intermédiaire" | "avancé" {
        return this._niveau;
    }
    public set niveau(value: "débutant" | "intermédiaire" | "avancé") {
        this._niveau = value;
    }
    public get programme(): string {
        return this._programme;
    }
    public set programme(value: string) {
        this._programme = value;
    }
    public get chargeHoraire(): number {
        return this._chargeHoraire;
    }
    public set chargeHoraire(value: number) {
        this._chargeHoraire = value;
    }
    public get description(): string {
        return this._description;
    }
    public set description(value: string) {
        this._description = value;
    }
    public get titre(): string {
        return this._titre;
    }
    public set titre(value: string) {
        this._titre = value;
    }
    public get id(): string {
        return this._id;
    }
    public set id(value: string) {
        this._id = value;
    }
    constructor(
      private _id: string,
      private _titre: string,
      private _description: string,
      private _chargeHoraire: number, // nombre d'heures pour terminer la formation
      private _programme: string, // lien pdf
      private _niveau: "débutant" | "intermédiaire" | "avancé",
      private _tags: string[],
      private _categories: string[]
    ) {}
  }
  