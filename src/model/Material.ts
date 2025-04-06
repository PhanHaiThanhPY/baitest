export class MaterialNeeded {
  id: number = 0;
  name: string = "";
  type: number = 0;
  code: string = "";
  unit: string = "";
  quantity: number = 0;
  constructor(data?: Partial<MaterialNeeded>) {
    Object.assign(this, data);
  }
}
