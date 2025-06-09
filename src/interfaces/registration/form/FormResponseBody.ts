
  /**
   * Interface: FormResponse
   * Description: form 응답 구조를 나타냅니다.
   */
  export interface FormResponseBody {
    /** 응답 코드 */
    code: string;
    /** form 제출 결과 */
    result: string;
    /** 추가 데이터 */
    data: object;
  }
  