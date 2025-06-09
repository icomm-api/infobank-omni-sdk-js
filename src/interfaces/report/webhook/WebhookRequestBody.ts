/**
 * Interface: WebhookRequest
 * Description: webhook 요청
 */
export interface WebhookRequestBody {
  /** 메시지 키 */
  msgKey: string;
  /** 리포트 코드 */
  reportCode: string;
  /** 리포트 종류 */
  reportType: string;
  /** 메시지 타입 (선택 사항) */
  msgType?: string;
  /** 서비스 타입 */
  serviceType: string;
  /** 이통사 코드 (선택 사항) */
  carrier?: string;
  /** 리포트 일시 (ISO 8601, yyyy-MM-dd'T'HH:mm:ss.SSS) */
  reportTime: string;
  /** 참조필드 (선택 사항) */
  ref?: string;
  /** 전송 처리 일시 (ISO 8601, yyyy-MM-dd'T'HH:mm:ss.SSS) (선택 사항) */
  sendTime?: string;
  /** 리포트 상세 (선택 사항) */
  reportText?: string;
}

/**
 * Interface: WebhookPathParameter
 * Description: webhook의 경로 매개변수
 */
export interface WebhookPathParameter {
  /** 사용자 URL */
  userURL: string;
}
