
/**
  * Interface: FileResponseBody
  * Description: file 응답 구조를 나타냅니다.
  */
export interface FileResponseBody {
  /** API 호출 결과 코드 (4자 문자열) */
  code: string;
  /** API 호출 결과에 대한 설명 */
  result: string;
  /** API 호출 결과 데이터 */
  data: Data;
}

/**
  * Interface: Data
  * Description: file data 구조를 나타냅니다.
*/
export interface Data {
  /** 카카오 친구톡에서 사용하는 이미지 URL 주소 */
  imgUrl?: string;
  /** MMS에서 사용하는 파일 키 */
  fileKey?: string;
  /** RCS에서 사용하는 maapfile 정보 */
  media?: string;
  /** MMS, RCS 파일 키 또는 미디어 만료 일시 (ISO 8601 형식) */
  expired?: string;
}
