import { Destination } from "./Destination";
import { MessageFlow } from "./MessageFlow";

/**
 * Interface: OMNIRequestBody
 * Description: 통합메세지(OMNI) 요청 본문을 나타냅니다.
 */
export interface OMNIRequestBody {
  /** 수신 정보 리스트 (최대 10개) */
  destinations: Destination[];

  /** 메시지 정보 리스트 */
  messageFlow?: MessageFlow[];

  /** 메시지 폼 ID */
  messageForm?: string;

  /** 정산용 부서 코드 (최대 20자) */
  paymentCode?: string;

  /** 참조 필드 (최대 200자) */
  ref?: string;
}
