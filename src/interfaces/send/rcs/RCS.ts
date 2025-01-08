import { RCSContent } from "./RCSContent";

/**
 * Interface: RCS
 * Description: messageForm, messageFlow의 RCS 세부 정보를 나타냅니다.
 */
export interface RCS {
    /** 발신번호 */
    from: string;
    /** RCS 내용 - 인포뱅크 규격 (content/body 중 하나는 필수 입력) */
    content: RCSContent;
    /** RCS 내용 - 이통사 규격 (content/body 중 하나는 필수 입력) */
    body?: object;
    /** RCS 버튼 - 이통사 규격 */
    buttons?: object[];
    /** RCS 메시지 formatID */
    formatId: string;
    /** RCS 브랜드 키 */
    brandKey: string;
    /** RCS 브랜드 ID */
    brandId?: string;
    /** RCS 메시지 그룹ID */
    groupId?: string;
    /** 전송 시간 초과 설정 (기본값: 1) */
    expiryOption?: string;
    /** 메시지 복사 허용 여부(기본값:0) */
    copyAllowed?: string;
    /** 메시지 상단 ‘광고’ 표출 여부 (기본값: 0) */
    header?: string;
    /** 메시지 하단 수신거부 번호 */
    footer?: string;
    /** 대행사ID (기본값: infobank) */
    agencyId?: string;
    /** 대행사 키 */
    agencyKey?: string;
    /** 메시지 유효 시간(초)(기본값:86400) */
    ttl?: string;
}
