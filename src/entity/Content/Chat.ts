export interface IChat {
  answer: string;
}

export class Chat implements IChat {
  readonly answer: string;

  constructor(chat: IChat) {
    this.answer = chat.answer;
  }
}
