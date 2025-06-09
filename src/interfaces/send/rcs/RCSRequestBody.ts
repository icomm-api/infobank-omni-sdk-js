import { RCSContent } from "./RCSContent";
import { FallbackMessage } from "../FallbackMessage";


/************************************************
                    RCS 
*************************************************/

/**
 * 인터페이스: RCSRequestBody
 * 설명: RCS 요청의 본문을 나타냅니다.
 */
export interface RCSRequestBody {
  /** RCS 내용 - 인포뱅크 규격 (content/body 중 하나는 필수 입력) */
  content: RCSContent;
  /** RCS 내용 - 이통사 규격 (content/body 중 하나는 필수 입력) */
  body?: object;
  /** RCS 버튼 - 이통사 규격 */
  buttons?: object[];
  /** 발신번호 */
  from: string;
  /** 수신번호 */
  to: string;
  /** RCS 메시지 formatID */
  formatId: string;
  /** RCS 브랜드 키 */
  brandKey?: string;
  /** RCS 브랜드 ID (선택 사항) */
  brandId?: string;
  /** 전송 시간 초과 설정 (1: 24시간, 2: 40초, 3: 3분 10초, 4: 1시간, 선택 사항) */
  expiryOption?: string;
  /** 메시지 상단 ‘광고’ 표출 여부 (0:미표출, 1:표출, 선택 사항) */
  header?: string;
  /** 메시지 하단 수신거부 번호 (최대 100 바이트, 선택 사항) */
  footer?: string;
  /** 참조필드 (최대 200 바이트, 선택 사항) */
  ref?: string;
  /** 실패 시 전송될 Fallback 메시지 정보 (선택 사항) */
  fallback?: FallbackMessage;
}
