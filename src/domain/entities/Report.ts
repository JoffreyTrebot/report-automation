export default class Report {
  id?: number;
  name: string;
  created_at?: Date;

  constructor(name: string, id?: number, created_at?: Date) {
    this.id = id;
    this.name = name;
    this.created_at = created_at;
  }
}