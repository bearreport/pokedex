export class Pokepicture {
  constructor(
    public id: number,
    public pokeid: number,
    public imageUrl: string,
    public created_at?: Date,
    public updated_at?: Date,
    public lastUpdatedBy?: string
  ) {}
}
