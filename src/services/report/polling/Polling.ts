import axios, { AxiosInstance } from 'axios';
import { DefaultOptions, CONFIG} from '../../../interfaces/config/Config';
import { PollingResponseBody } from '../../../interfaces/report/polling/PollingResponseBody';
import { PollingPathParameter } from '../../../interfaces/report/polling/PollingRequestBody';


const API_VERSION = CONFIG.API_VERSION;

/**
 * Class: Polling
 * Description: 리포트를 Polling방식으로 수신합니다.
 */
export class Polling {
  private client: AxiosInstance;

  /**
   * Constructor: Polling
   * Description: 인증 헤더로 Axios client 를 초기화 합니다.
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
   * Method: getReport
   * Description: 리포트를 가져옵니다.
   * @returns
   */
  public async getReport(): Promise<PollingResponseBody> {
    return this.makeRequest<PollingResponseBody>('get', `/${API_VERSION}/report/polling`);
  }

  /**
   * Method: deleteReport
   * Description: 리포트 수신 확인합니다.
   * @param pollingPathParameter - reportId
   * @returns
   */
  public async deleteReport(reportId: string): Promise<PollingResponseBody> {
    return this.makeRequest<PollingResponseBody>('delete', `/${API_VERSION}/report/polling/${reportId}`);
  }

  /**
   * Method: makeRequest
   * Description: 지정한 URL로 GET 또는 DELETE 요청을 합니다.
   * @param method - 'get', 'delete'
   * @param url - URL
   * @returns
   */
  private async makeRequest<T>(method: 'get' | 'delete', url: string): Promise<T> {
    try {
      const response = await this.client.request<T>({ method, url });
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
