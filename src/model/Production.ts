export class ProductionProgress {
  id: number = 0;
  groupName: string = "";
  completed: number = 0;
  total: number = 0;
  color: string = "";
  status: number = 0;
  constructor(data?: Partial<ProductionProgress>) {
    Object.assign(this, data);
  }
}
export class Production {
  id: number = 0;
  name: string = "";
  data: number[] = [];
  type: number = 0;
  constructor(data?: Partial<Production>) {
    Object.assign(this, data);
  }
}
