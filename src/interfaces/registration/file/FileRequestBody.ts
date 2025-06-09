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
      [친구톡]
      FI: 친구톡 이미지
      FW: 친구톡 와이드 이미지
      FL: 친구톡 와이드 아이템 리스트이미지
      FC: 친구톡 캐러셀 이미지
      FA: 친구톡 캐러셀 커머스 이미지

      [브랜드 메시지]
      defalut: 이미지
      wide: 와이드 이미지
      wideItemList : 와이드 리스트 이미지 업로드 요청
      carouselFeed : 캐러셀 피드 이미지 업로드 요청
      carouselCommerce : 캐러셀 커머스 이미지 업로드 요청
    */

      subType? : string;
    
    /** [브랜드 메시지]
        first : 와이드 아이템 리스트 첫번째 이미지 
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
  