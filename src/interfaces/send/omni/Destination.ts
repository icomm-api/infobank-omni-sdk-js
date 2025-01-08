/**
 * Interface: Destinations
 * Description: 통합메세지(OMNI) 최대 10개의 수신 정보를 함께 전송할 수 있는 정보입니다.
 */
export interface Destination {
  /** 수신번호 */
  to: string;

  /** 치환 문구 (JSON) */
  replaceWords?: object;
}
