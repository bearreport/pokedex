export class Pokemon {
  constructor(
    public id: number,
    public name: string,
    public tattooed: boolean,
    public created_at?: Date,
    public updated_at?: Date,
    public lastUpdatedBy?: string
  ) {}
}
