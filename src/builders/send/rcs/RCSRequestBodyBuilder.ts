import { RCSContent } from "../../../interfaces/send/rcs/RCSContent";
import { RCSRequestBody } from "../../../interfaces/send/rcs/RCSRequestBody";
import { FallbackMessage } from "../../../interfaces/send/FallbackMessage";

/**
 * 클래스: RCSRequestBodyBuilder
 * 설명: RCSRequestBody 객체 생성을 위한 빌더 클래스입니다.
 */
export class RCSRequestBodyBuilder {
    private rcsRequestBody: Partial<RCSRequestBody> = {};

    /** RCS 메시지 JSON 객체 설정 */
    setContent(content: RCSContent): this {
        this.rcsRequestBody.content = content;
        return this;
    }

    /** 발신번호 설정 */
    setFrom(from: string): this {
        this.rcsRequestBody.from = from;
        return this;
    }

    /** 수신번호 설정 */
    setTo(to: string): this {
        this.rcsRequestBody.to = to;
        return this;
    }

    /** RCS 메시지 formatID 설정 */
    setFormatId(formatId: string): this {
        this.rcsRequestBody.formatId = formatId;
        return this;
    }

    /** Body 설정 */
    setBody(body: object): this {
        this.rcsRequestBody.body = body;
        return this;
    }

    /** Buttons 설정 */
    setButtons(buttons: object[]): this {
        this.rcsRequestBody.buttons = buttons;
        return this;
    }

    /** RCS 브랜드 키 설정 */
    setBrandKey(brandKey: string): this {
        this.rcsRequestBody.brandKey = brandKey;
        return this;
    }

    /** RCS 브랜드 ID 설정 (선택 사항) */
    setBrandId(brandId?: string): this {
        this.rcsRequestBody.brandId = brandId;
        return this;
    }

    /** 전송 시간 초과 설정 (선택 사항) */
    setExpiryOption(expiryOption?: string): this {
        this.rcsRequestBody.expiryOption = expiryOption;
        return this;
    }

    /** 메시지 상단 ‘광고’ 표출 여부 설정 (선택 사항) */
    setHeader(header?: string): this {
        this.rcsRequestBody.header = header;
        return this;
    }

    /** 메시지 하단 수신거부 번호 설정 (선택 사항) */
    setFooter(footer?: string): this {
        const footerByteLength = new TextEncoder().encode(footer || '').length;
        if (footerByteLength > 100) {
            throw new Error('Footer length exceeds the maximum limit of 100 bytes.');
        }
        this.rcsRequestBody.footer = footer;
        return this;
    }

    /** 참조필드 설정 (선택 사항, 최대 200 바이트) */
    setRef(ref?: string): this {
        const refByteLength = new TextEncoder().encode(ref || '').length;
        if (refByteLength > 200) {
            throw new Error('Ref length exceeds the maximum limit of 200 bytes.');
        }
        this.rcsRequestBody.ref = ref;
        return this;
    }

    /** 실패 시 전송될 Fallback 메시지 설정 (선택 사항) */
    setFallback(fallback?: FallbackMessage): this {
        this.rcsRequestBody.fallback = fallback;
        return this;
    }

    /** RCSRequestBody 객체 생성 */
    build(): RCSRequestBody {
        return this.rcsRequestBody as RCSRequestBody;
    }
}