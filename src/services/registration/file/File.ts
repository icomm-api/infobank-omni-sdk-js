import axios, { AxiosInstance } from 'axios';
import { CONFIG, DefaultOptions } from '../../../interfaces/config/Config';
import { FileRequestBody, FileUploadPathParameter } from "../../../interfaces/registration/file/FileRequestBody";
import { FileResponseBody } from "../../../interfaces/registration/file/FileResponseBody";


const API_VERSION = CONFIG.API_VERSION;

/**
 * Class: FileUpload
 * Description: 메시지 발송에 필요한 이미지 파일을 관리 합니다.
 */
export class File {
  private client: AxiosInstance;

  /**
   * Constructor: FileUpload
   * Description: 인증 헤더로 Axios client 를 초기화 합니다.
   * @param options - baseURL, token
   */
  constructor(options: DefaultOptions = { baseURL: '', token: '' }) {
    this.client = axios.create({
      baseURL: options.baseURL,
      headers: {
        'Authorization': `Bearer ${options.token}`,
        'Content-Type': 'multipart/form-data',
        'Accept': 'application/json',
      },
    });
  }

  /**
   * Method: uploadFile
   * Description: 이미지 파일을 업로드 합니다.
   * @param fileUploadPathParameter - serviceType, msgType
   * @param fileUploadRequest - fileData
   * @returns
   */
  public async uploadFile(fileUploadPathParameter: FileUploadPathParameter, fileUploadRequest: FileRequestBody): Promise<FileResponseBody> {
    try {
      const response = await this.client.post<FileResponseBody>(
       `/v1/file/${fileUploadPathParameter.serviceType}${fileUploadPathParameter.msgType ? `/${fileUploadPathParameter.msgType}` : ''}`,
        fileUploadRequest
      );
      return response.data;
    } catch (error) {
      this.handleError(error);
      throw error;
    }
  }

  /**
   * Method: handleError
   * Description: 오류 세부 정보를 기록하여 API 오류를 처리합니다.
   * @param error
   */
private handleError(error: any): void {
  if (error.response) {
    console.error(`[API error]: ${error.response.status} ${error.response.statusText}`);
    console.error(error.response.data);
  } else {
    console.error('[API error]:', error.message);
  }
}
}
