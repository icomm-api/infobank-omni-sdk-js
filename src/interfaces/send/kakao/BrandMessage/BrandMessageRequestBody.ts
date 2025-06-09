import { FallbackMessage } from "../../FallbackMessage";
import { KakaoButton } from "../KakaoButton";

/**
 * Interface: BrandMessageRequestBody
 * Description: BrandMessage 요청의 본문을 나타냅니다.
 */
export interface BrandMessageRequestBody {
  /** 카카오 비즈메시지 발신 프로필 키 */
  senderKey: string;
  /** 카카오 브랜드 메시지 타입 (basic: 기본형, free: 자유형) */
  sendType: string;
  /** 카카오 브랜드 메시지 타입 */
  msgType: string;
  /** 수신번호 */
  to: string;
  /** 카카오 브랜드 메시지 내용 */
  text: string;
  /** 이미지 URL */
  imgUrl: string;
  /** [basic 변수분리방식] 브랜드 메시지 타겟팅 광고주 마수동 유저 대상 타겟팅 (화이트리스트 등록된 발신프로필만 사용가능)
      M: 광고주 마수동 유저(카카오톡 수신 동의)
      N: 광고주 마수동 유저(카카오톡 수신 동의) - 채널 친구 
      채널 친구 대상 타겟팅
        I: 광고주 발송 요청 대상 ∩ 채널 친구 */
  targeting: string;
  /** 버튼정보 */
  button?: KakaoButton[];
  /** 실패 시 전송될 Fallback 메시지 정보 */
  fallback?: FallbackMessage;
  /** [basic 변수분리방식] 카카오 브랜드메시지 템플릿코드 */
  templateCode: string;
  /** 그룹태그 등록으로 받은 그룹태그 키 */
  groupTagKey: string;
  /** [free 자유형 방식] 성인용 메시지 여부(Y/N(기본값)) */
  adult: string;
  /** 메시지 푸시 알람 발송 여부(Y(기본값)/N) */
  pushAlarm: string;
  /** [basic 변수분리방식] 메시지 영역 변수 */
  messageVariable: object;
  /** [basic 변수분리방식] 버튼영역 변수 */
  buttonVariable: object;
  /** [basic 변수분리방식] 쿠폰영역 변수 */
  couponVariable: object;
  /** [basic 변수분리방식] 이미지영역 변수 */
  imageVariable: object;
  /** [basic 변수분리방식] 비디오영역 변수 */
  videoVariable: object;
  /** [basic 변수분리방식] 커머스영역 변수 */
  commerceVariable: object;
  /** [basic 변수분리방식] 캐로셀영역 변수 */
  carouselVariable: object;
  /** 최초 발신사업자 식별코드 */
  originCID: string;
  /** 무료수신거부 전화번호 ex) 080-1111-2222 */
  unsubscribePhoneNumber: string;
  /** 무료수신거부 인증번호 ex) 12345 */
  unsubscribeAuthNumber: string;
  /** 참조필드 */
  ref: string;
}


