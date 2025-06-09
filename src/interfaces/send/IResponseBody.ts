
  /**
 * Interface: IResponseBody
 * Description: 응답의 본문을 나타냅니다.
 */
export interface IResponseBody {
  /** API호출 결과 코드 (4자) */
  code: string;
  /** API호출 결과 설명 */
  result: string;
  /** 메시지 키 */
  msgKey: string;
  /** 참조필드 (요청 시 입력한 데이터) */
  ref: string;
}
