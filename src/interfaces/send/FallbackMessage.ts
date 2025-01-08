/**
 * Interface: FallbackMessage
 * Description: Fallback 메시지를 나타냅니다.
 */
export interface FallbackMessage {
    /** Fallback 종류 (SMS, MMS) */
    type: string;
    /** Fallback 발신번호 */ 
    from: string;
    /** Fallback 메시지 내용 (최대 2,000 바이트) */
    text: string;
    /** Fallback 메시지 제목 (최대 40 바이트, 선택 사항) */
    title?: string;
    /** Fallback 파일키 (최대 3개, 선택 사항) */
    fileKey?: string[];
    /** Fallback 최초 발신사업자 식별코드 (최대 9 바이트, 선택 사항) */
    originCID?: string;
}