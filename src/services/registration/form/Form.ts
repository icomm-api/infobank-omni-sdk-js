import axios, { AxiosInstance } from 'axios';
import { FormRequestBody } from '../../../interfaces/registration/form/FormRequestBody';
import { FormResponseBody } from '../../../interfaces/registration/form/FormResponseBody';
import { DefaultOptions, CONFIG } from '../../../interfaces/config/Config';

const API_VERSION = CONFIG.API_VERSION;


/**
 * Class: Form
 * Description: 사전에 자주 전송하는 메시지 형태를 등록합니다. 통합메시지 전송 시 메시지폼 ID를 입력하여 전송할 수 있습니다.
 */
export class Form {
  private client: AxiosInstance;

  /**
   * Constructor: Form
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
   * Method: registForm
   * Description: 메세지 폼을 등록합니다.
   * @param formRequest - formData
   * @returns
   */
  public async registForm(formRequest: FormRequestBody): Promise<FormResponseBody> {
    return this.requestWithPayload('post', `/${API_VERSION}/form`, formRequest);
  }

  /**
   * Method: getFormData
   * Description: 메세지 폼을 조회합니다.
   * @param formId - formId
   * @returns
   */
  public async getFormData(formId: string): Promise<FormResponseBody> {
    return this.requestWithoutPayload('get', `/${API_VERSION}/form/${formId}`);
  }

  /**
   * Method: modifyForm
   * Description: 메세지 폼을 수정합니다.
   * @param formId - formId
   * @param formRequest - formData
   * @returns
   */
  public async modifyForm(formId: string, formRequest: FormRequestBody): Promise<FormResponseBody> {
    return this.requestWithPayload('put', `/${API_VERSION}/form/${formId}`, formRequest);
  }

  /**
   * Method: deleteForm
   * Description: 메세지 폼을 삭제합니다.
   * @param formId - formId
   * @returns
   */
  public async deleteForm(formId: string): Promise<FormResponseBody> {
    return this.requestWithoutPayload('delete', `/${API_VERSION}/form/${formId}`);
  }

  /**
   * Method: requestWithPayload
   * Description: POST, PUT 을 호출합니다.
   * @param method - 'post' or 'put'
   * @param url - URL
   * @param formRequest - formData
   * @returns
   */
  private async requestWithPayload(method: 'post' | 'put', url: string, formRequest: FormRequestBody): Promise<FormResponseBody> {
    try {
      const response = await this.client[method]<FormResponseBody>(url, JSON.stringify(formRequest));
      return response.data;
    } catch (error) {
      this.handleError(error);
      throw error;
    }
  }

  /**
   * Method: requestWithoutPayload
   * Description: GET, DELETE 를 호출합니다.
   * @param method -'get' or 'delete'
   * @param url - URL
   * @returns
   */
  private async requestWithoutPayload(method: 'get' | 'delete', url: string): Promise<FormResponseBody> {
    try {
      const response = await this.client[method]<FormResponseBody>(url);
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
      const safeResponse = JSON.parse(JSON.stringify(error.response, getCircularReplacer()));
      console.error(`[API error]: ${safeResponse.status} ${safeResponse.statusText}`);
    } else if (error.request) {
      console.error('[API error]: No response received', error.request);
    } else {
      console.error('[API error]:', error.message);
    }
      console.error("Config data:", error.config);
  }
}

function getCircularReplacer() {
  const seen = new WeakSet();
  return (key: string, value: any) => {
    if (typeof value === "object" && value !== null) {
      if (seen.has(value)) {
        return;
      }
      seen.add(value);
    }
    return value;
  };
}
