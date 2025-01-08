
/**
 * Interface: Button
 * Description: OMNI 요청의 버튼을 나타냅니다.
 */
export interface KakaoButton {
    /** 카카오 버튼 종류 */
    type: string;
    /** 카카오 버튼 명 */
    name: string;
    /** PC 환경에서 버튼 클릭 시 이동할 URL */
    urlPc?: string;
    /** 모바일 환경에서 버튼 클릭 시 이동할 URL */
    urlMobile?: string;
    /** iOS 환경에서 버튼 클릭 시 실행할 application custom scheme */
    schemeIos?: string;
    /** Android 환경에서 버튼 클릭 시 실행할 application custom scheme */
    schemeAndroid?: string;
    /** 버튼 type이 WL(웹 링크)일 경우 "target":"out" 입력 시 아웃링크 사용 */
    target?: string;
  }
  