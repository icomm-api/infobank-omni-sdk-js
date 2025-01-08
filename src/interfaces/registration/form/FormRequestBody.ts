import { MessageForm } from "./MessageForm";

  /**
   * Interface: FormRequest
   * Description: form 요청 구조를 나타냅니다.
   */
  export interface FormRequestBody {
    /** form ID */
    formId?: string;
    /** 메시지 form 세부 사항 (sms, mms, rcs, alimtalk, friendtalk) */
    messageForm?: MessageForm[];
  }
  