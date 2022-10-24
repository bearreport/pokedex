export class Pokepicture {
  constructor(
    public pokeid: number,
    public image_url: string,
    public created_at?: number,
    public updated_at?: number,
    public lastUpdatedBy?: string,
    public id?: number
  ) {}
}
