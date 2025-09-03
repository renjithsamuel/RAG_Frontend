export interface IDocument {
  document_id: string;
  filename: string;
}

export class DocumentModel implements IDocument {
  readonly document_id: string;
  readonly filename: string;

  constructor(data: IDocument) {
    this.document_id = data.document_id;
    this.filename = data.filename;
  }
}
