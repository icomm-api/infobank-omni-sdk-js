import { FallbackMessage } from "../../FallbackMessage";
import { KakaoButton } from "../KakaoButton";

/**
 * Interface: AlimtalkRequestBody
 * Description: Alimtalk 요청의 본문을 나타냅니다.
 */
export interface AlimtalkRequestBody {
  /** 카카오 비즈메시지 발신 프로필 키 */
  senderKey: string;
  /** 카카오 알림톡메시지타입 */
  msgType: string;
  /** 수신번호 */
  to: string;
  /** 알림톡 템플릿 코드 */
  templateCode: string;
  /** 알림톡 내용 */
  text: string;
  /** 카카오 버튼 정보(최대 5개) */
  button?: KakaoButton[];
  /** 참조필드 (최대 200자) */
  ref?: string;
  /** 실패 시 전송될 Fallback 메시지 정보 */
  fallback?: FallbackMessage;
}


