export interface IDocument {
  id: string;
  filename: string;
}

export class DocumentModel implements IDocument {
  readonly id: string;
  readonly filename: string;

  constructor(data: IDocument) {
    this.id = data.id;
    this.filename = data.filename;
  }
}
