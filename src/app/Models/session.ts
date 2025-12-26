export class Session {
    public get candidats(): string[] {
        return this._candidats;
    }
    public set candidats(value: string[]) {
        this._candidats = value;
    }
    public get description(): string {
        return this._description;
    }
    public set description(value: string) {
        this._description = value;
    }
    public get dateFin(): Date {
        return this._dateFin;
    }
    public set dateFin(value: Date) {
        this._dateFin = value;
    }
    public get dateDeb(): Date {
        return this._dateDeb;
    }
    public set dateDeb(value: Date) {
        this._dateDeb = value;
    }
    public get formateurs(): string[] {
        return this._formateurs;
    }
    public set formateurs(value: string[]) {
        this._formateurs = value;
    }
    public get formationId(): string {
        return this._formationId;
    }
    public set formationId(value: string) {
        this._formationId = value;
    }
    public get id(): string {
        return this._id;
    }
    public set id(value: string) {
        this._id = value;
    }
    constructor(
      private _id: string,
      private _formationId: string,
      private _formateurs: string[], // Id des deux formateurs
      private _dateDeb: Date,
      private _dateFin: Date,
      private _description: string,
      private _candidats: string[] // IDs des candidats inscrits
    ) {}
  }
  