export class CustomerData {
    id: number = 0;
    name: string = "";
    data: number[] = [];
    year: number = 0;
    constructor(data?: Partial<CustomerData>) {
      Object.assign(this, data);
    }
  }
  