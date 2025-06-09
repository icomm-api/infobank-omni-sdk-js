import { MMS } from "../../../interfaces/send/mms/MMS";

/**
 * 클래스: MMSBuilder
 * 설명: OMNI 통합 발송과 FORM 등록/수정을 위한 MMS 빌더 클래스입니다.
 */
export class MMSBuilder {
    private mms: Partial<MMS> = {};

    /** 발신번호 설정 */
    setFrom(from: string): this {
        this.mms.from = from;
        return this;
    }

    /** MMS 메시지 내용 설정 (최대 2000바이트) */
    setText(text: string): this {
        const textByteLength = new TextEncoder().encode(text).length;
        if (textByteLength > 2000) {
            throw new Error('Text length exceeds the maximum limit of 2000 bytes.');
        }
        this.mms.text = text;
        return this;
    }

    /** MMS 메시지 제목 설정 (최대 40바이트) */
    setTitle(title?: string): this {
        if (title) {
            const titleByteLength = new TextEncoder().encode(title).length;
            if (titleByteLength > 40) {
                throw new Error('Title length exceeds the maximum limit of 40 bytes.');
            }
            this.mms.title = title;
        }
        return this;
    }

    /** 파일 키 설정 (최대 3개) */
    setFileKey(fileKey?: string[]): this {
        if (fileKey && fileKey.length > 3) {
            throw new Error('You can only add up to 3 file keys.');
        }
        this.mms.fileKey = fileKey;
        return this;
    }

    /** 메시지 유효 시간 설정 (초), 기본값: 86400 */
    setTtl(ttl?: string): this {
        this.mms.ttl = ttl;
        return this;
    }

    /** 최초 발신사업자 식별코드 설정 (최대 길이 9) */
    setOriginCID(originCID?: string): this {
        if (originCID && originCID.length > 9) {
            throw new Error('OriginCID length exceeds the maximum limit of 9 characters.');
        }
        this.mms.originCID = originCID;
        return this;
    }

    /** MMS 객체 생성 */
    build(): MMS {
        return this.mms as MMS;
    }
}
