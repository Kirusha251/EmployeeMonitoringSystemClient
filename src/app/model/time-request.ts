export class TimeRequest {
  fio: string;
  date: Date;

  constructor(fio: string, date: Date) {
    this.fio = fio;
    this.date = date;
  }
}
