export class Candidat {
    public get motDePasse(): string {
        return this._motDePasse;
    }
    public set motDePasse(value: string) {
        this._motDePasse = value;
    }
    public get photo(): string {
        return this._photo;
    }
    public set photo(value: string) {
        this._photo = value;
    }
    public get numCIN(): number {
        return this._numCIN;
    }
    public set numCIN(value: number) {
        this._numCIN = value;
    }
    public get email(): string {
        return this._email;
    }
    public set email(value: string) {
        this._email = value;
    }
    public get prenom(): string {
        return this._prenom;
    }
    public set prenom(value: string) {
        this._prenom = value;
    }
    public get nom(): string {
        return this._nom;
    }
    public set nom(value: string) {
        this._nom = value;
    }
    public get id(): string {
        return this._id;
    }
    public set id(value: string) {
        this._id = value;
    }
    constructor(
      private _id: string,
      private _nom: string,
      private _prenom: string,
      private _email: string,
      private _numCIN: number,
      private _photo: string,
      private _motDePasse: string
    ) {}
  }
  