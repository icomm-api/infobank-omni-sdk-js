import axios, { AxiosInstance } from 'axios';
import { DefaultOptions } from '../../../interfaces/config/Config';
import { WebhookRequestBody, WebhookPathParameter} from '../../../interfaces/report/webhook/WebhookRequestBody';
import { WebhookResponseBody } from '../../../interfaces/report/webhook/WebhookResponseBody';
/**
 * Class: Webhook
 * Description: 리포트를 Webhook방식으로 고객서버에 전달합니다.
 */
export class Webhook {
  private client: AxiosInstance;

  /**
   * Constructor: Webhook
   * Description: 인증 헤더로 Axiox client 를 초기화 합니다.
   * @param options - baseURL, token
   */
  constructor(options: DefaultOptions = { baseURL: '', token: '' }) {
    this.client = axios.create({
      baseURL: options.baseURL,
      headers: {
        'Authorization': `Bearer ${options.token}`,
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
    });
  }

  /**
   * Method: getWebhook
   * Description: 리포트 데이터를 Webhook 방식으로 사용자URL에  전달합니다.
   * @param webhookPathParameter - 계정에 등록된 사용자 URL
   * @param webhookRequest - 리포트 정보
   * @returns
   */
  public async getWebhook(webhookPathParameter: WebhookPathParameter, webhookRequest: WebhookRequestBody): Promise<WebhookResponseBody> {
    try {
      const response = await this.client.post<WebhookResponseBody>(webhookPathParameter.userURL, webhookRequest);
      return response.data;
    } catch (error) {
      this.handleError(error);
      throw error;
    }
  }

  /**
   * Method: handleError
   * Description: 오류 세부 정보를 기록하여 API 오류를 처리합니다.
   * @param error
   */
  private handleError(error: any): void {
    if (error.response) {
      console.error(`[API error]: ${error.response.status} ${error.response.statusText}`);
      console.error(error.response.data);
    } else {
      console.error('[API error]:', error.message);
    }
  }
}
