import { MMSRequestBody } from "../../../interfaces/send/mms/MMSRequestBody";

/**
 * 클래스: MMSRequestBodyBuilder
 * 설명: MMS(LMS) 발송을 위한 MMSRequestBody 빌더 클래스입니다.
 */
export class MMSRequestBodyBuilder {
    private mmsRequestBody: MMSRequestBody;
  
    constructor() {
        this.mmsRequestBody = {
            from: '',
            to: '',
            text: '',
        };
    }

    /** 발신번호 설정 */
    setFrom(from: string): this {
        this.mmsRequestBody.from = from;
        return this;
    }

    /** 수신번호 설정 */
    setTo(to: string): this {
        this.mmsRequestBody.to = to;
        return this;
    }

    /** 메시지 내용 설정 (최대 2000 바이트) */
    setText(text: string): this {
        const textByteLength = new TextEncoder().encode(text).length;
        if (textByteLength > 2000) {
            throw new Error('Text length exceeds the maximum limit of 2000 bytes.');
        }
        this.mmsRequestBody.text = text;
        return this;
    }

    /** 메시지 제목 설정 (선택 사항, 최대 40 바이트) */
    setTitle(title?: string): this {
        if (title) {
            const titleByteLength = new TextEncoder().encode(title).length;
            if (titleByteLength > 40) {
                throw new Error('Title length exceeds the maximum limit of 40 bytes.');
            }
            this.mmsRequestBody.title = title;
        }
        return this;
    }

    /** 파일 키 설정 (선택 사항, 최대 3개) */
    setFileKey(fileKey?: string[]): this {
        if (fileKey && fileKey.length > 3) {
            throw new Error('You can only add up to 3 file keys.');
        }
        this.mmsRequestBody.fileKey = fileKey;
        return this;
    }

    /** 참조필드 설정 (선택 사항, 최대 200 바이트) */
    setRef(ref?: string): this {
        if (ref) {
            const refByteLength = new TextEncoder().encode(ref).length;
            if (refByteLength > 200) {
                throw new Error('Ref length exceeds the maximum limit of 200 bytes.');
            }
            this.mmsRequestBody.ref = ref;
        }
        return this;
    }

    /** 최초 발신사업자 식별코드 설정 (선택 사항, 최대 9 바이트) */
    setOriginCID(originCID?: string): this {
        if (originCID) {
            const originCIDByteLength = new TextEncoder().encode(originCID).length;
            if (originCIDByteLength > 9) {
                throw new Error('OriginCID length exceeds the maximum limit of 9 bytes.');
            }
            this.mmsRequestBody.originCID = originCID;
        }
        return this;
    }

    build(): MMSRequestBody {
        return this.mmsRequestBody;
    }
}
