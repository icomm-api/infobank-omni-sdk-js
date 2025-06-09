import { KakaoButton } from "../KakaoButton";

/**
 * Interface: Alimtalk 
 * Description: messageForm, messageFlow의 Alimtalk 세부 정보를 나타냅니다.
 */
export interface Alimtalk {
  /** 카카오 비즈메시지 발신 프로필 키 */
  senderKey: string;

  /** 카카오 비즈메시지 타입 */
  msgType: string;

  /** 알림톡 템플릿 코드 */
  templateCode: string;

  /** 알림톡 내용 (최대 1000자) */
  text: string;

  /** 알림톡 제목 (강조표기형 템플릿) */
  title?: string;
  
  /** 메세지 상단에 표기할 제목 */
  header? :string;

  /** 첨부 정보 */
  attachment?: Attachment;

  /** 부가 정보 */
  supplement?: Supplement;

  /** 메시지에 포함된 가격/금액/결제금액 */
  price?: string;

  /** 메시지에 포함된 가격/금액/결제금액의 통화 단위 (국제 통화 코드 - KRW, USD, EUR) */
  currencyType?: string;
}

/**
 * Interface: Attachment
 * Description: interface Alimtalk의 첨부 세부 정보를 나타냅니다.
 */
export interface Attachment {
  /** 버튼 정보 */
  button?: KakaoButton[];

  /** 아이템 정보 */
  item?: Item;

  /** 아이템 하이라이트 정보 */
  itemHighlight?: ItemHighlight;
}



/**
 * Interface: Item
 * Description: interface Alimtalk의 아이템 정보를 나타냅니다.
 */
export interface Item {
  /** 아이템 리스트(2~10 개) */
  list: ItemList[];

  /** 아이템 요약정보 */
  summary?: Summary;

}


/**
 * Interface: ItemList
 * Description: interface Alimtalk의 아이템 리스트를 나타냅니다.
 */
export interface ItemList {
  /** 타이틀 (최대 길이 6) */
  title: string;

  /** 부가정보 (최대 길이 23) */
  description?: string;

}

/**
 * Interface: Summary
 * Description: interface Alimtalk의 아이템 요약정보입니다.
 */
export interface Summary {
  /** 타이틀 (최대 길이 6) */
  title: string;
  /** 가격정보 허용되는 문자: 통화기호(유니코드 통화기호, 元, 円, 원), 통화코드(ISO 4217), 숫자, 콤마, 소 수점, 공백 소수점 2 자리까지 허용*/
  description: string;

}

/**
 * Interface: ItemHighlight
 * Description: interface Alimtalk의 아이템 하이라이트 정보를 나타냅니다.
 */
export interface ItemHighlight {
  /** 타이틀 (이미지가 있는 경우 최대 21 자) */
  title?: string;
  /** 부가정보(이미지가 있는 경우 최대 13 자) */
  description?: string;
}

/**
 * Interface: Supplement
 * Description: interface Alimtalk의 카카오 비즈메시지 부가정보입니다.
 */
export interface Supplement {
  /** 바로연결 정보 */
  quickReply?: QuickReply[];
  
}

/**
 * Interface: QuickReply
 * Description: interface Alimtalk의 카카오 비즈메시지 바로연결 정보를 나타냅니다.
 */
export interface QuickReply {
  /** 바로연결 제목 (최대 14자) */
  name: string;

  /** 바로연결 타입 */
  type: string;

  /** PC 환경에서 버튼 클릭 시 이동할 URL */
  urlPC?: string;

  /** 모바일 환경에서 버튼 클릭 시 이동할 URL */
  urlMobile?: string;

  /** iOS 환경에서 버튼 클릭 시 실행할 커스텀 scheme */
  schemeIOS?: string;

  /** Android 환경에서 버튼 클릭 시 실행할 커스텀 scheme */
  schemeAndroid?: string;

  /** 봇/상담톡 전환 시 전달할 메타정보 */
  chatExtra?: string;

  /** 봇/상담톡 전환 시 연결할 봇 이벤트명 */
  chatEvent?: string;

  /** 비즈폼 ID */
  bizFormId?: string;
}
