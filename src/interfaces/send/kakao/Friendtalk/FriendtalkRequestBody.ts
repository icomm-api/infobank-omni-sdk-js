
import { FallbackMessage } from "../../FallbackMessage";
import { KakaoButton } from "../KakaoButton";

/**
 * Interface: FriendtalkRequestBody
 * Description: Friendtalk 요청의 본문을 나타냅니다.
 */
export interface FriendtalkRequestBody {
  /** 카카오 비즈메시지 발신 프로필 키 */
  senderKey: string;
  /** 카카오 친구톡 메시지타입 */
  msgType: string;
  /** 수신번호 */
  to: string;
  /** 친구톡 내용 (최대 90자) */
  text: string;
  /** 친구톡 이미지 URL */
  imgUrl?: string;
  /** 친구톡 버튼정보 */
  button?: KakaoButton[];
  /** 참조필드 (최대 200자) */
  ref?: string;
  /** 실패 시 전송될 Fallback 메시지 정보 */
  fallback?: FallbackMessage;
}


