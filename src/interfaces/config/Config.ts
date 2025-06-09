
/**
   * const: API 버전
   */
export const CONFIG = {
    API_VERSION: "v1"
  };
  
  /**
   * Interface: AuthOptions
   * Description: 인증 토큰 받을 시 필요한 옵션을 나타냅니다.
   */
  export interface AuthOptions {
    /** 요청 baseURL */
    baseURL: string;
    /** OMNI API ID */
    id?: string;
    /** OMNI API Password */
    password?: string;
  }
  
  /**
   * Interface: DefaultOptions
   * Description: 인증 토큰 발급 후, API 사용 시 필요한 옵션을 나타냅니다.
   */
  export interface DefaultOptions {
    /** 요청 baseURL */
    baseURL: string;
    /** 발급받은 token */
    token?: string;
  }
  
  /**
   * Interface: OMNIOptions
   * Description: OMNI API 사용 시, 필요한 모든 옵션들을 나타냅니다.
   */
  export interface OMNIOptions {
    /** 요청 baseURL */
    baseURL: string;
    /** OMNI API ID */
    id?: string;
    /** OMNI API Password */
    password?: string;
    /** 발급받은 token */
    token?: string;
  }
  