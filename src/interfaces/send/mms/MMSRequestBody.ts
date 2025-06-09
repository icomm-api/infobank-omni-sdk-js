/**
 * Interface: MMSRequestBody
 * Description: MMS 요청의 본문을 나타냅니다.
 */
export interface MMSRequestBody {
  /** 발신번호 */
  from: string;
  /** 수신번호 */
  to: string;
  /** 메시지 내용 (최대 2000 바이트) */
  text: string;
  /** 메시지 제목 (선택 사항, 최대 40 바이트) */
  title?: string;
  /** 파일 키 (선택 사항, 최대 3개) */
  fileKey?: string[];
  /** 참조필드 (선택 사항, 최대 200 바이트) */
  ref?: string;
  /** 최초 발신사업자 식별코드 (선택 사항, 최대 9 바이트) */
  originCID?: string;
}