export class TimeRequest {
  fio: string;
  since: Date
  until: Date;
  countMode: number;
  constructor(fio: string, since: Date, until: Date, countMode: number) {
    this.fio = fio;
    this.since = since;
    this.until = until;
    this.countMode = countMode;
  }
}
