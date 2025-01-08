/**
 * Interface: SMSRequestBody
 * Description: SMS 요청의 본문을 나타냅니다.
 */
export interface SMSRequestBody {
  /** 발신번호 */
  from: string;
  /** 수신번호 */
  to: string;
  /** 메시지 내용 (최대 90자) */
  text: string;
  /** 참조필드 (선택 사항, 최대 200자) */
  ref?: string;
  /** 최초 발신사업자 식별코드 (선택 사항, 최대 9자) */
  originCID?: string;
}