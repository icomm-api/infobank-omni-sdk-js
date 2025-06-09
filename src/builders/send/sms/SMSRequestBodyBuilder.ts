import { SMSRequestBody } from "../../../interfaces/send/sms/SMSRequestBody";


/**
 * 클래스: SMSRequestBodyBuilder
 * 설명: 국내 문자 발송을 위한 SMSRequestBody 빌더 클래스입니다.
 */
export class SMSRequestBodyBuilder {
    private smsRequestBody: SMSRequestBody;
  
    constructor() {
      this.smsRequestBody = {
        from: '',
        to: '',
        text: '',
      };
    }
  
    /** 발신번호 설정 */
    setFrom(from: string): this {
      this.smsRequestBody.from = from;
      return this;
    }
  
    /** 수신번호 설정 */
    setTo(to: string): this {
      this.smsRequestBody.to = to;
      return this;
    }
  
    /** 메시지 내용 설정 (최대 90자) */
    setText(text: string): this {
      this.smsRequestBody.text = text;
      return this;
    }
  
    /** 참조필드 설정 (선택 사항, 최대 200자) */
    setRef(ref?: string): this {
      this.smsRequestBody.ref = ref;
      return this;
    }
  
    /** 최초 발신사업자 식별코드 설정 (선택 사항, 최대 9자) */
    setOriginCID(originCID?: string): this {
      this.smsRequestBody.originCID = originCID;
      return this;
    }
  
    /** SMSRequestBody 객체 생성 */
    build(): SMSRequestBody {
      return this.smsRequestBody;
    }
  }