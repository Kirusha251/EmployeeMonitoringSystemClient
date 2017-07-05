export class TableRow {
  id: number;
  fio: string;
  state: boolean;
  textState: string;
  lastTimeStateChanged: string;

  constructor(id: number, fio: string, state: boolean, lastTimeStateChanged: string) {
    this.id = id;
    this.fio = fio;
    this.state = state;
    this.lastTimeStateChanged = lastTimeStateChanged;
  }
}
