export interface ICollection {
  id: string;
  name: string;
}

export class Collection implements ICollection {
  readonly id: string;
  readonly name: string;

  constructor(data: ICollection) {
    this.id = data.id;
    this.name = data.name;
  }
}