import { Alimtalk, Attachment, Supplement } from "../../../../interfaces/send/kakao/Alimtalk/Alimtalk";


/**
 * 클래스: AlimtalkBuilder
 * 설명: OMNI 통합 발송과 FORM 등록/수정을 위한 Alimtalk 빌더 클래스입니다.
 */
export class AlimtalkBuilder {
    private alimtalk: Partial<Alimtalk> = {};

    /** 카카오 비즈메시지 발신 프로필 키 */
    setSenderKey(senderKey: string): this {
        this.alimtalk.senderKey = senderKey;
        return this;
    }

    /** 카카오 비즈메시지 타입 */
    setMsgType(msgType: string): this {
        this.alimtalk.msgType = msgType;
        return this;
    }

    /** 알림톡 템플릿 코드 */
    setTemplateCode(templateCode: string): this {
        this.alimtalk.templateCode = templateCode;
        return this;
    }

    /** 알림톡 내용 */
    setText(text: string): this {
        this.alimtalk.text = text;
        return this;
    }

    /** 알림톡 제목(강조표기형 템플릿) */
    setTitle(title?: string): this {
        this.alimtalk.title = title;
        return this;
    }

    /** 첨부 정보 */
    setAttachment(attachment?: Attachment): this {
        this.alimtalk.attachment = attachment;
        return this;
    }

    /** 부가 정보 */
    setSupplement(supplement?: Supplement): this {
        this.alimtalk.supplement = supplement;
        return this;
    }

    /** 메시지 에 포함된 가격/금액/결제금액 */
    setPrice(price?: string): this {
        this.alimtalk.price = price;
        return this;
    }

    /** 메시지에 포함된 가격/금액/결제금액의 통화 단위 (국제 통화 코드 - KRW, USD, EUR) */
    setCurrencyType(currencyType?: string): this {
        this.alimtalk.currencyType = currencyType;
        return this;
    }

    build(): Alimtalk {
        return this.alimtalk as Alimtalk;
    }
}
