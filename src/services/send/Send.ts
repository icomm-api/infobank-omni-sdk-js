import axios, { AxiosInstance } from 'axios';
import { InternationalRequestBody } from '../../interfaces/send/international/InternationalRequestBody';
import { IResponseBody } from '../../interfaces/send/IResponseBody';
import { AlimtalkRequestBody } from '../../interfaces/send/kakao/Alimtalk/AlimtalkRequestBody';
import { BrandMessageRequestBody } from '../../interfaces/send/kakao/BrandMessage/BrandMessageRequestBody';
import { FriendtalkRequestBody } from '../../interfaces/send/kakao/Friendtalk/FriendtalkRequestBody';
import { MMSRequestBody } from '../../interfaces/send/mms/MMSRequestBody';
import { OMNIRequestBody } from '../../interfaces/send/omni/OMNIRequestBody';
import { RCSRequestBody } from '../../interfaces/send/rcs/RCSRequestBody';
import { SMSRequestBody } from '../../interfaces/send/sms/SMSRequestBody';

const API_VERSION = "/v1";

/**
 * Interface: SendOption
 * Description: 메세지 전송 Header
 */
interface SendOption {
  baseURL: string; 
  token: string;
}

/**
 * Class: Send
 * Description: 메세지 전송 API
 */
export class Send {
  private client: AxiosInstance;

  /**
   * Constructor: Send
   * Description: 인증 헤더로 Axios client 를 초기화 합니다.
   * @param options - baseURL, token
   */
  constructor(options: SendOption) {
    
    this.client = axios.create({
      baseURL: options.baseURL,
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${options.token}`,
        'Accept': 'application/json',
      },
    });
  }

  /**
   * Method: SMS
   * Description: 국내 문자(SMS) 메시지 발송 규격입니다.
   * SMS 최대 90byte, MMS 최대 2,000byte(제목 20byte) 까지 전송 가능 합니다.
   * OMNI Gitbook 상세 Response 내용은 코드표를 참조해주시기 바랍니다.
   * 
   * @param body - SMS Request
   * @returns
   */
  public async SMS(req: SMSRequestBody): Promise<IResponseBody> {
    return this.sendRequest(`${API_VERSION}/send/sms`, req);
  }

  /**
   * Method: MMS
   * Description: 국내 문자(LMS, MMS) 메시지 발송 규격입니다.
   * MMS 이미지 메시지를 전송할 경우 사전에 이미지 파일 등록이 필요 합니다.
   * OMNI Gitbook 상세 Response 내용은 코드표를 참조해주시기 바랍니다.
   * 
   * @param body - MMS Request
   * @returnsparam
   */
  public async MMS(req: MMSRequestBody): Promise<IResponseBody> {
    return this.sendRequest(`${API_VERSION}/send/mms`, req);
  }

  /**
   * Method: International
   * Description: 국제 문자(SMS) 메시지 발송 규격입니다.
   * 장문 메시지를 보낼 경우 Concatenated SMS(분할 전송)로 전송됩니다.
   * 요청 시 DLR 정보를 수신 받을 수 있습니다. (영업담당자 문의)
   * 
   * @param body - International Request
   * @returnsparam
   */
  public async International(req: InternationalRequestBody): Promise<IResponseBody> {
    return this.sendRequest(`${API_VERSION}/send/international`, req);
  }

  /**
   * Method: RCS
   * Description: RCS 메시지 발송 규격입니다.
   * 미디어메시지 종류에 따라 3가지(standalone, carousel, template)로 전송 요청 할 수 있습니다.
   * 요청할 메시지 종류에 맞는 format ID(RCS messagebaseId)입력이 필요합니다.
   * 
   * @param body - RCS Request
   * @returnsparam
   */
  public async RCS(req: RCSRequestBody): Promise<IResponseBody> {
    return this.sendRequest(`${API_VERSION}/send/rcs`, req);
  }

  /**
   * Method: Alimtalk
   * Description: 카카오 비즈메시지 알림톡 발송 규격입니다.
   * @param body - Alimtalk Request
   * @returnsparam
   */
  public async Alimtalk(body: AlimtalkRequestBody): Promise<IResponseBody> {
    return this.sendRequest(`${API_VERSION}/send/alimtalk`, body);
  }

  /**
   * Method: Friendtalk
   * Description: 카카오 비즈메시지 친구톡 발송 규격입니다.
   * 채널이 등록 되어있는 수신자에게만 친구톡 전송이 가능합니다.
   * 친구톡 이미지 메시지를 전송할 경우 사전에 이미지 파일 등록(카카오 비즈메시지 센터)이 필요 합니다.
   * 
   * @param body - Friendtalk Request
   * @returnsparam
   */
  public async Friendtalk(body: FriendtalkRequestBody): Promise<IResponseBody> {
    return this.sendRequest(`${API_VERSION}/send/friendtalk`, body);
  }

   /**
   * Method: BrandMessage
   * Description: 카카오 비즈메시지 브랜드메세지지 발송 규격입니다.
   * 채널이 등록 되어있는 수신자에게만 친구톡 전송이 가능합니다.
   * 친구톡 이미지 메시지를 전송할 경우 사전에 이미지 파일 등록(카카오 비즈메시지 센터)이 필요 합니다.
   * 
   * @param body - Friendtalk Request
   * @returnsparam
   */
  public async BrandMessage(body: BrandMessageRequestBody): Promise<IResponseBody> {
    return this.sendRequest(`${API_VERSION}/send/brandmessage`, body);
  }

  /**
   * Method: OMNI
   * Description: 메시지 별로 Fallback을 순차적으로 처리해주는 통합메시지 발송 규격입니다.
   * 메시지 관련 상세 옵션필드를 모두 사용할 수 있는 전문가 방식 입니다.
   * 요청 당 최대 10개의 수신번호를 함께 전송할 수 있습니다.
   * 메시지 내용, 제목, 버튼 등에 치환문구를 활용하여 전송 할 수 있습니다.
   * 전체 메시지 정보를 입력하는 방식 또는 사전에 등록한 메시지 폼을 이용하는 방식, 총 2가지 방식 중 선택하여 전송하실 수 있습니다.
   * 
   * @param body - OMNI (통합 메세지) Request
   * @returnsparam
   */
  public async OMNI(body: OMNIRequestBody): Promise<IResponseBody> {
    return this.sendRequest(`${API_VERSION}/send/omni`, body);
  }

  /**
   * Method: sendRequest
   * Description: 지정된 본문과 함께 지정된 URL로 요청을 보냅니다.
   * @param url - URL
   * @param body
   * @returnsparam
   */
  private async sendRequest(url: string, body: any): Promise<IResponseBody> {
    try {
      const response = await this.client.post<IResponseBody>(url, JSON.stringify(body));
      return response.data;
    } catch (error) {
      this.handleError(error);
      throw error;
    }
  }

  /**
   * Method: handleError
   * Description: 오류 세부 정보를 기록하여 API 오류를 처리합니다.
   * @param error - AxiosError 또는 일반 오류
   */
  private handleError(error: any): void {
    if (axios.isAxiosError(error)) {
      if (error.response) {
        console.error(`[API error]: ${error.response.status} ${error.response.statusText}`);
        console.error("Response data:", JSON.stringify(error.response.data, null, 2));
        console.error("Response headers:", JSON.stringify(error.response.headers, null, 2));
      } else if (error.request) {
        console.error("No response received:", error.request);
      } else {
        console.error('[API error]:', error.message);
      }
    } else {
      console.error('Unexpected error:', error);
    }
  }
}
