import { Injectable } from '@angular/core';

@Injectable()
export class MessageService {
  private static staticMessage = "static";
  private nonStaticMessage;

  constructor() {
    this.nonStaticMessage = "non static";
  }

  public static getStaticMessageByStaticMethod(): string{
    return MessageService.staticMessage;
  }

  public static getStaticMessage(): string{
    return MessageService.staticMessage;
  }

  public getMessageByStaticMethod(): string{
    return this.nonStaticMessage;
  }

  public getMessage(): string{
    return this.nonStaticMessage;
  }

}
