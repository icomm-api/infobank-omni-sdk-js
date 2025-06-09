
/**
 * 인터페이스: RCSContent
 * 설명: RCS 메시지의 내용을 나타냅니다.
 */
export interface RCSContent {
  /** RCS 메시지의 독립형 콘텐츠 */
  standalone?: StandaloneContent;
  /** RCS 메시지의 캐러셀 콘텐츠 */
  carousel?: CarouselContent[];
  /** RCS 메시지의 템플릿 콘텐츠 */
  template?: TemplateContent;
}


/**
* 인터페이스: StandaloneContent
* 설명: RCS 메시지의 독립형 콘텐츠를 나타냅니다.
*/
/**
 * Interface: StandaloneContent
 * Description: RCS 메시지의 독립형 콘텐츠를 나타냅니다.
 */
export interface StandaloneContent {
  /** RCS 내용 */
  text: string;

  /** RCS 제목 */
  title: string;

  /** 미디어 파일 경로 (maapfile://) */
  media?: string;

  /** 클릭 시 랜딩 URL (값이 '\'인 경우 이미지 전체보기) */
  mediaUrl?: string;

  /** 버튼 정보 */
  button?: RCSButton[];

  /** 서브 컨텐츠 정보 */
  subContent?: SubContent[];
}

/**
 * Interface: CarouselContent
 * Description: RCS 메시지의 캐러셀 콘텐츠를 나타냅니다.
 */
export interface CarouselContent {
  /** RCS 내용 */
  text: string;

  /** RCS 제목 */
  title: string;

  /** 미디어 파일 경로 (maapfile://) */
  media?: string;

  /** 클릭 시 랜딩 URL (값이 '\'인 경우 이미지 전체보기) */
  mediaUrl?: string;

  /** 버튼 정보 */
  button?: RCSButton[];
}

/**
 * Interface: TemplateContent
 * Description: RCS 메시지의 템플릿 콘텐츠를 나타냅니다.
 */
export interface TemplateContent {
  /** 템플릿 제목 */
  title: string;

  /** 템플릿 본문 */
  description: string;

  /** 서브 컨텐츠 정보 */
  subContent?: SubContent[];

  /** 사전에 등록된 key, value (JSON) */
  [key: string]: string | SubContent[] | undefined;
}


/**
 * Interface: SubContent
 * Description: RCS 메시지의 서브 콘텐츠를 나타냅니다.
 */
export interface SubContent {
  /** 서브 소제목 */
  subTitle: string;

  /** 서브 소본문 */
  subDesc: string;

  /** 서브 이미지 */
  subMedia?: string;

  /** 서브 이미지 URL */
  subMediaUrl?: string;
}



export interface RCSButtonBuilder<T extends RCSButton> {
  build(): T;
}
/**
 * 타입: RCSButton
 * 설명: RCS 메시지의 버튼을 나타냅니다.
 */
export type RCSButton =
  | URLButton
  | MapLocButton
  | MapQryButton
  | MapSendButton
  | CalendarButton
  | CopyButton
  | ComTButton
  | ComVButton
  | DialButton;

/**
 * 인터페이스: URLButton
 * 설명: RCS 메시지의 URL 버튼을 나타냅니다.
 */
export interface URLButton {
  type: 'URL';
  name: string;
  url: string;
}

/**
 * 인터페이스: MapLocButton
 * 설명: RCS 메시지의 지도 위치 버튼을 나타냅니다.
 */
export interface MapLocButton {
  type: 'MAP_LOC';
  name: string;
  label: string;
  latitude: string;
  longitude: string;
  fallbackUrl: string;
}

/**
 * 인터페이스: MapQryButton
 * 설명: RCS 메시지의 지도 검색 버튼을 나타냅니다.
 */
export interface MapQryButton {
  type: 'MAP_QRY';
  name: string;
  query: string;
  fallbackUrl: string;
}

/**
 * 인터페이스: MapSendButton
 * 설명: RCS 메시지의 지도 전송 버튼을 나타냅니다.
 */
export interface MapSendButton {
  type: 'MAP_SEND';
  name: string;
}

/**
 * 인터페이스: CalendarButton
 * 설명: RCS 메시지의 캘린더 버튼을 나타냅니다.
 */
export interface CalendarButton {
  type: 'CALENDAR';
  name: string;
  startTime: string; // 형식: yyyy-MM-dd’T’HH:mm:ssXXX
  endTime: string; // 형식: yyyy-MM-dd’T’HH:mm:ssXXX
  title: string;
  description: string;
}

/**
 * 인터페이스: CopyButton
 * 설명: RCS 메시지의 복사 버튼을 나타냅니다.
 */
export interface CopyButton {
  type: 'COPY';
  name: string;
  text: string;
}

/**
 * 인터페이스: ComTButton
 * 설명: RCS 메시지의 통화 버튼을 나타냅니다.
 */
export interface ComTButton {
  type: 'COM_T';
  name: string;
  phoneNumber: string;
  text: string;
}

/**
 * 인터페이스: ComVButton
 * 설명: RCS 메시지의 비디오 통화 버튼을 나타냅니다.
 */
export interface ComVButton {
  type: 'COM_V';
  name: string;
  phoneNumber: string;
}

/**
 * 인터페이스: DialButton
 * 설명: RCS 메시지의 전화 걸기 버튼을 나타냅니다.
 */
export interface DialButton {
  type: 'DIAL';
  name: string;
  phoneNumber: string;
}