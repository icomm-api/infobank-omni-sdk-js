/**
 * Interface: FileUploadPathParameter
 * Description: File Upload 경로 요청을 나타냅니다.
 */
export interface FileUploadPathParameter {
    /**  이미지를 사용될 서비스 타입(MMS, RCS, FRIENDTALK) */
    serviceType: string;
    /** 상세 메시지 타입 (카카오 친구톡 이미지 업로드 시 필수) */
    msgType?: string; 
    
    /** 
      FI: 친구톡 이미지
      FW: 친구톡 와이드 이미지
      FL: 친구톡 와이드 아이템 리스트 이미지
      FC: 친구톡 캐러셀 이미지 
    */
  }
  
  /**
   * Interface: FileUploadRequest
   * Description: File Upload 요청을 나타냅니다.
   */
  export interface FileRequestBody {
    /** 이미지 파일 바이너리 */
    file: Blob | File;
  }
  