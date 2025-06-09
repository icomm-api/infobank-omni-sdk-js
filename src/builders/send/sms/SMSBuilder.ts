import { SMS } from "../../../interfaces/send/sms/SMS";

/**
 * 클래스: SMSBuilder
 * 설명: OMNI 통합 발송과 FORM 등록/수정을 위한 SMS 빌더 클래스입니다.
 */
export class SMSBuilder {
    private sms: Partial<SMS> = {};

    /** 발신번호 설정 */
    setFrom(from: string): this {
        this.sms.from = from;
        return this;
    }

    /** SMS 메시지 내용 설정 (최대 90바이트) */
    setText(text: string): this {
        this.sms.text = text;
        return this;
    }

    /** 메시지 유효 시간 설정 (초), 기본값: 86400 */
    setTtl(ttl?: string): this {
        this.sms.ttl = ttl;
        return this;
    }

    /** 최초 발신사업자 식별코드 설정 (최대 길이 9) */
    setOriginCID(originCID?: string): this {
        this.sms.originCID = originCID;
        return this;
    }

    /** SMS 객체 생성 */
    build(): SMS {
        return this.sms as SMS;
    }
}
