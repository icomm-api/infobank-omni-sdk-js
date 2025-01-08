/**
 * Interface: MMS
 * Description: messageForm, messageFlow의 MMS 세부 정보를 나타냅니다.
 */
export interface MMS {
    /** 발신번호 */
    from: string;
    /** MMS 메시지 내용(2000바이트) */
    text: string;
    /** MMS 메시지 제목(40바이트) */
    title?: string;
    /** 파일 키(최대 3개) */
    fileKey?: string[];
    /** 메시지 유효 시간(초), 기본값:86400 */
    ttl?: string;
    /** 최초 발신사업자 식별코드 (최대 길이 9) */
    originCID?: string;
  }