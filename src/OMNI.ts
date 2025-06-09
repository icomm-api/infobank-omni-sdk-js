import { Auth } from './index';
import { OMNIOptions } from './interfaces/config/Config';
import { File } from './services/registration/file/File';
import { Form } from './services/registration/form/Form';
import { Polling } from './services/report/polling/Polling';
import { Report } from './services/report/Report';
import { Webhook } from './services/report/webhook/Webhook';
import { Send } from './services/send/Send';

export class OMNI {
  public auth?: Auth;
  public send?: Send;
  public form?: Form;
  public polling?: Polling;
  public webhook?: Webhook;
  public file?: File;
  public report?: Report;
  

  /**
   * OMNI SDK의 인스턴스를 생성합니다.
   * 
   * @param config - 인증, 메시지 전송, 폼 제출 등 설정 옵션입니다.
   */
  constructor(config: OMNIOptions) {
    const { baseURL, token, id, password } = config;

    if (!token) {
      this.auth = new Auth({ baseURL, id, password });
    } else {
      const param = { baseURL, token };
      this.initializeModules(param);
    }
  }

  /**
   * Initializes the modules with the provided parameters.
   * 
   * @param param - The parameters including baseURL and token.
   */
  private initializeModules(param: { baseURL: string; token: string }): void {
    this.file = new File(param);
    this.form = new Form(param);
    this.send = new Send(param);
    this.report = new Report(param);
    this.polling = new Polling(param);
    this.webhook = new Webhook(param);
  }
}
