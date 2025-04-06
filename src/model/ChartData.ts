export class ChartData {
  name: string = "";
  data: number[] = [];
  quarter: number = 0;
  constructor(data?: Partial<ChartData>) {
    Object.assign(this, data);
  }
}
