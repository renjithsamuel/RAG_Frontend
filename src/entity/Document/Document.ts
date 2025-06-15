export interface IDocument {
  id: string;
  name: string;
}

export class DocumentModel implements IDocument {
  readonly id: string;
  readonly name: string;

  constructor(data: IDocument) {
    this.id = data.id;
    this.name = data.name;
  }
}
