export interface ISource {
  content: string;
  source: string;
  page: number;
  score: number;
}

export interface IChat {
  answer: string;
  sources: ISource[];
  elapsed?: number;
}

export class Chat implements IChat {
  readonly answer: string;
  readonly sources: ISource[];
  readonly elapsed?: number;

  constructor(chat: IChat) {
    this.answer = chat.answer;
    this.sources = chat.sources;
    this.elapsed = chat.elapsed;
  }
}
