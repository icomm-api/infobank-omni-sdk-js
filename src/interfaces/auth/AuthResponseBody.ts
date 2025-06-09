
/**
 * Interface: DataResponse
 * Description: 토큰 data 응답 구조를 나타냅니다.
 */
export interface DataResponse {
    /** 인증 성공 시, 발행된 토큰값 */
    token: string;
    
    /** 토큰 스키마 (Bearer) */
    schema: string;
    
    /** 토큰 만료 일시 (ISO 8601, yyyy-MM-dd'T'HH:mm:ssXXX)  */
    expires: string;
  }
  
  /**
   * Interface: TokenResponse
   * Description: 인증 응답 구조를 나타냅니다.
   */
  export interface TokenResponseBody {
    /** The received code */
    code: string;
    
    /** The result message or key */
    result: string;
    
    /** The data containing token details */
    data: DataResponse;
  }
  