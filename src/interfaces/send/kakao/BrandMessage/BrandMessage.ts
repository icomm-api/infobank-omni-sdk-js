
import { Attachment, Carousel } from "../Friendtalk/Friendtalk";

/**
 * Interface: BrandMessage (친구톡 Upgrade) 
 * Description: messageForm, messageFlow의 BrandMessage 세부 정보를 나타냅니다.
 */
export interface BrandMessage {
  /** 카카오 비즈메시지 발신 프로필 키 */
  senderKey: string;
  /** 카카오 브랜드 메시지 타입 (basic: 기본형, free: 자유형) */
  sendType: string;
  /** 카카오 비즈메시지 타입 */
  msgType: string;
  /** 친구톡 내용
    (msgType이 FT(1000자), FI(400자), FW(76자) 인 경우 필수
    msgType이 FP(76자)인 경우 선택사항) */
  text: string;
  /** 캐로셀 정보 (msgType이 FC, FA 인 경우 필수) */
  carousel: Carousel;
  /** 첨부 정보 */
  attachment: Attachment;
  /** 헤더 정보 (msgType 이 FL 인  경우 필수, FP인 경우 옵션) */
  header: string;
  /**[basic 변수분리방식] 브랜드 메시지 타겟팅
    광고주 마수동 유저 대상 타겟팅 (화이트리스트 등록된 발신프로필만 사용가능)
    M: 광고주 마수동 유저(카카오톡 수신 동의)
    N: 광고주 마수동 유저(카카오톡 수신 동의) - 채널 친구
    채널 친구 대상 타겟팅
    I: 광고주 발송 요청 대상 ∩ 채널 친구 */
  targeting: string;
  /** [basic 변수분리방식] 카카오 브랜드메시지 템플릿코드 */
  templateCode: string;
  /** 부가정보 (msgType이 FM인 경우 사용) */
  addtionalContent: string;
  /** 그룹태그 등록으로 받은 그룹태그 키 */
  groupTagKey: string;
  /** [free 자유형 방식] 성인용 메시지 여부(Y/N(기본값)) */
  adult: string;
  /** 메시지 푸시 알람 발송 여부(Y(기본값)/N) */
  pushAlarm: string;
  /** [free 자유형 방식] 
    광고성메시지 필수 표기 사항 노출 여부(Y(기본값)/N)
    (msgType이 FL, FC, FA인  경우  Y로만  발송 가능) */
  adFlag: string;
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
}