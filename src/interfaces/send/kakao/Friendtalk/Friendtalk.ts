import { KakaoButton } from "../KakaoButton";

/**
 * Interface: Friendtalk
 * Description: messageForm, messageFlow의 Friendtalk 세부 정보를 나타냅니다.
 */
export interface Friendtalk {
  /** 카카오 비즈메시지 발신 프로필 키 */
  senderKey: string;

  /** 카카오 비즈메시지 타입 */
  msgType: string;

  /** 친구톡 내용 (최대 1000자) */
  text: string;

  /** 부가 정보 (msgType이 FM인 경우 사용) */
  additionalContent?: string;

  /** 광고성 메시지 필수 표기 사항 노출 여부 (Y/N, 기본값: Y) */
  adFlag?: string;

  /** 성인용 메시지 여부 (Y/N, 기본값: N) */
  adult?: string;

  /** 첨부 정보 */
  attachment?: Attachment;

  /** 헤더 정보 (msgType이 FL인 경우 필수, FP인 경우 옵션) */
  header?: string;

  /** 캐로셀 정보 (msgType이 FC, FA인 경우 필수) */
  carousel?: Carousel;

  /** 그룹태그 등록으로 받은 그룹태그 키 */
  groupTagKey?: string;

  /** 메시지 푸시 알람 발송 여부 (Y/N, 기본값: Y) */
  pushAlarm?: string;
}

/**
 * Interface: Attachment
 * Description: 카카오 친구톡 메시지의 첨부 정보를 나타냅니다.
 */
export interface Attachment {
  /** 버튼 목록 (msgType이 FT, FI이고 coupon을 적용할 경우 최대 4개, 그 외 최대 5개) */
  button?: KakaoButton[];

  /** 이미지 (msgType이 FM인 경우 필수) */
  image?: Image;

  /** 와이드 리스트 요소 */
  item?: Item;

  /** 쿠폰 요소 (메시지 최하단 노출) */
  coupon?: Coupon;

  /** 커머스 요소 */
  commerce?: Commerce;

  /** 비디오 요소 */
  video?: Video;
}


/**
 * 
 * Interface: Image
 * Description: OMNI 요청의 이미지를 나타냅니다.
 */
export interface Image {
  /** 등록한 이미지 URL */
  imgUrl: string;
  /** 이미지 클릭 시 이동할 URL, 미 설정 시 카카오 톡 내 이미지 뷰어 사용 */
  imgLink?: string;
}


/**
 * Interface: Item
 * Description: 카카오 비즈메시지 친구톡 아이템정보입니다.
 */
export interface Item {
  /** 와이드 리스트(최소:3, 최대:4) */
  list: ItemList[];
}

/**
 * Interface: ItemList
 * Description: 카카오 친구톡 아이템 리스트 정보를 나타냅니다.
 */
export interface ItemList {
  /** 아이템 제목 */
  title: string;
  
  /** 아이템 이미지 URL */
  imgUrl: string;

  /** 모바일 Android 환경에서 이미지 클릭 시 실행할 application custom scheme */
  schemeAndroid?: string;

  /** 모바일 iOS 환경에서 이미지 클릭 시 실행할 application custom scheme */
  schemeIos?: string;

  /** 모바일 환경에서 이미지 클릭 시 이동할 URL */
  urlMobile: string;

  /** PC 환경에서 이미지 클릭 시 이동할 URL */
  urlPc?: string;
}

/**
 * Interface: Coupon
 * Description: 카카오 비즈메시지 친구톡 쿠폰 요소를 나타냅니다.
 */
export interface Coupon {
  /** 쿠폰 이름 (지원 형식: ${숫자}원 할인 쿠폰, ${숫자}% 할인 쿠폰, 배송비 할인 쿠폰, ${7자 이내} 무료 쿠폰, ${7자 이내} UP 쿠폰) */
  title: string;

  /** 쿠폰 상세 설명 (chat_bubble_type에 따라 WIDE, WIDE_ITEM_LIST, PREMIUM_VIDEO는 18자 제한, 그 외 12자 제한) */
  description: string;

  /** PC 환경에서 쿠폰 클릭 시 이동할 URL */
  urlPc?: string;

  /** 모바일 환경에서 쿠폰 클릭 시 이동할 URL */
  urlMobile?: string;

  /** 모바일 Android 환경에서 쿠폰 클릭 시 실행할 application custom scheme */
  schemeAndroid?: string;

  /** 모바일 iOS 환경에서 쿠폰 클릭 시 실행할 application custom scheme */
  schemeIos?: string;
}


/**
 * Interface: Commerce
 * Description: 카카오 비즈메시지 친구톡 커머스 요소를 나타냅니다.
 */
export interface Commerce {
  /** 상품 제목 (최대 30자) */
  title: string;

  /** 정상 가격 (0 ~ 99,999,999) */
  regularPrice: number;

  /** 할인가격 (0 ~ 99,999,999) */
  discountPrice?: number;

  /** 할인율 (0 ~ 100, 할인가격 존재 시 할인율 또는 정액할인가격 중 하나 필수) */
  discountRate?: number;

  /** 정액 할인가격 (0 ~ 999,999, 할인가격 존재 시 할인율 또는 정액할인가격 중 하나 필수) */
  discountFixed?: number;
}

/**
 * Interface: Video
 * Description: 카카오 비즈메시지 친구톡 비디오 요소를 나타냅니다.
 */
export interface Video {
  /** 카카오TV 동영상 URL */
  videoUrl: string;

  /** 동영상 썸네일 이미지 URL (없는 경우 동영상 기본 썸네일 사용) */
  thumbnailUrl?: string;
}

/**
 * Interface: Carousel
 * Description: 카카오 비즈메시지 친구톡 캐로셀 정보를 나타냅니다.
 */
export interface Carousel {
  /** 캐로셀 인트로 정보 (msgType이 FC인 경우 사용 불가) */
  head?: CarouselHead;

  /** 캐로셀 아이템 리스트 (최소 2, 최대 10) */
  list?: CarouselList[];

  /** 더보기 버튼 정보 */
  tail?: CarouselTail;
}

/**
 * Interface: CarouselHead
 * Description: 카카오 비즈메시지 친구톡 캐로셀의 인트로 정보를 나타냅니다.
 */
export interface CarouselHead {
  /** 캐로셀 인트로 헤더 (최대 20자) */
  header: string;

  /** 캐로셀 인트로 내용 (최대 50자) */
  content: string;

  /** 캐로셀 인트로 이미지 주소 */
  imageUrl: string;

  /** 모바일 환경에서 인트로 클릭 시 이동할 URL (URL 필드 중 하나라도 값이 있으면 필수) */
  urlMobile?: string;

  /** PC 환경에서 인트로 클릭 시 이동할 URL */
  urlPc?: string;

  /** 모바일 Android 환경에서 인트로 클릭 시 실행할 application custom scheme */
  schemeAndroid?: string;

  /** 모바일 iOS 환경에서 인트로 클릭 시 실행할 application custom scheme */
  schemeIos?: string;
}


/**
 * Interface: CarouselList
 * Description: 카카오 비즈메시지 친구톡 캐로셀의 아이템 리스트 정보를 나타냅니다.
 */
export interface CarouselList {
  /** 캐로셀 아이템 제목 (msgType이 FC인 경우 필수, FA인 경우 사용 불가, 최대 20자) */
  header: string;

  /** 캐로셀 아이템 메시지 (msgType이 FC인 경우 필수, FA인 경우 사용 불가, 최대 180자) */
  message: string;

  /** 부가 정보 (msgType이 FC인 경우 사용 불가, 최대 34자) */
  additionalContent: string;

  /** 캐로셀 첨부 정보 */
  attachment?: CarouselListAttachment;
}


/**
 * Interface: CarouselListAttachment
 * Description: 카카오 비즈메시지 친구톡 캐로셀의 아이템 리스트의 첨부정보를 나타냅니다.
 */
export interface CarouselListAttachment {
  /** 버튼 목록 (msgType이 FT, FI일 때 coupon을 적용할 경우 최대 4개, 그 외 최대 5개) */
  button?: KakaoButton[];

  /** 캐로셀 썸네일 이미지 */
  image: Image;

  /** 쿠폰 요소 (캐로셀 최하단 노출) */
  coupon?: Coupon;

  /** 커머스 요소 (msgType이 FA인 경우 필수, FC인 경우 사용 불가) */
  commerce?: Commerce;
}


/**
 * Interface: CarouselTail
 * Description: 카카오 비즈메시지 친구톡 캐로셀의 더보기 버튼 정보를 나타냅니다.
 */
export interface CarouselTail {
  /** PC 환경에서 버튼 클릭 시 이동할 URL */
  urlPc: string;

  /** 모바일 환경에서 버튼 클릭 시 이동할 URL */
  urlMobile?: string;

  /** 모바일 iOS 환경에서 버튼 클릭 시 실행할 application custom scheme */
  schemeIos?: string;

  /** 모바일 Android 환경에서 버튼 클릭 시 실행할 application custom scheme */
  schemeAndroid?: string;
}
