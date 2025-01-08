
/**
 * Interface: SMS
 * Description: messageForm, messageFlow의 SMS 세부 정보를 나타냅니다.
 */
export interface SMS {
    /** 발신번호 */
    from: string;
    /** SMS 메시지 내용(90바이트) */
    text: string;
    /** 메시지 유효 시간(초), 기본값:86400 */
    ttl?: string;
    /** 최초 발신사업자 식별코드 (최대 길이 9) */
    originCID?: string;
  }