import axios, { AxiosInstance } from 'axios';
import { AuthOptions, CONFIG } from '../../interfaces/config/Config';
import { TokenResponseBody } from '../../interfaces/auth/AuthResponseBody';


const API_VERSION = CONFIG.API_VERSION;

/**
 * Class: Auth
 * Description: OMNI 인증 token 을 발급합니다.
 */
export class Auth {
  private client: AxiosInstance;

  /**
   * Constructor: Auth
   * Description: 인증 헤더로 Axiox client 를 초기화 합니다.
   * @param options - baseURL, id, password.
   */
  constructor(options: AuthOptions) {
    this.client = axios.create({
      baseURL: options.baseURL,
      headers: {
        'X-IB-Client-Id': options.id,
        'X-IB-Client-Passwd': options.password,
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
    });
  }

  /**
   * Method: getToken
   * Description: 계정의 Token을 발급합니다.
   * @returns
   */
  public async getToken(): Promise<TokenResponseBody> {
    try {
      
      const response = await this.client.post<TokenResponseBody>(`/${API_VERSION}/auth/token`);
      
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
