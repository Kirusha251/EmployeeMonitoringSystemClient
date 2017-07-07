export class TableRow {
  id: number;
  fio: string;
  state: boolean;
  textState: string;
  lastTimeStateChanged: Date;
  filterDate: string;

  constructor(id: number, fio: string, state: boolean, lastTimeStateChanged: Date) {
    this.id = id;
    this.fio = fio;
    this.state = state;
    this.lastTimeStateChanged = lastTimeStateChanged;
  }
}
