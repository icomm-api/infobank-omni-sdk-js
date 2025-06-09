/**
 * Interface: ReportResponse
 * Description: 리포트 API 호출의 응답을 나타냅니다.
 */
export interface ReportResponseBody {
  /** API 호출 결과 코드 (4자리 문자열) */
  code: string;
  /** API 호출 결과 설명 (문자열) */
  result: string;
  /** API 호출 데이터 (객체) */
  data: ReportData;
}

/**
 * Interface: ReportData
 * Description: 리포트의 데이터 구조를 나타냅니다.
 */
interface ReportData {
  /** 리포트 ID */
  reportId: string;
  /** 리포트 정보 배열 */
  report: ReportDetail[];
}

/**
 * Interface: ReportDetail
 * Description: 리포트의 세부 사항을 나타냅니다.
 */
interface ReportDetail {
  /** 메시지 키 */
  msgKey: string;
  /** 서비스 타입 */
  serviceType: string;
  /** 메시지 타입 */
  msgType: string;
  /** 전송 처리 일시 (ISO 8601, yyyy-MM-dd'T'HH:mm:ssXXX) */
  sendTime: string;
  /** 리포트 일시 (ISO 8601, yyyy-MM-dd'T'HH:mm:ssXXX) */
  reportTime: string;
  /** 리포트 종류 */
  reportType: string;
  /** 리포트 코드 */
  reportCode: string;
  /** 리포트 상세 */
  reportText: string;
  /** 이통사 코드 */
  carrier: string;
  /** 국제 메시지 분할 수 */
  resCnt: string;
  /** 참조 필드 */
  ref: string;
}
