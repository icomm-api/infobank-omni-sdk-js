import { Attachment, Carousel, Friendtalk } from "../../../../interfaces/send/kakao/Friendtalk/Friendtalk";


/**
 * 클래스: FriendtalkBuilder
 * 설명: OMNI 통합 발송과 FORM 등록/수정을 위한 Friendtalk 빌더 클래스입니다.
 */
export class FriendtalkBuilder {
    private friendtalk: Partial<Friendtalk> = {};

    /** 카카오 비즈메시지 발신 프로필 키 */
    setSenderKey(senderKey: string): this {
        this.friendtalk.senderKey = senderKey;
        return this;
    }

    /** 카카오 비즈메시지 타입 */
    setMsgType(msgType: string): this {
        this.friendtalk.msgType = msgType;
        return this;
    }

    /** 친구톡 내용 */
    setText(text: string): this {
        this.friendtalk.text = text;
        return this;
    }

    /** 부가정보 (msgType이 FM인 경우 사용) */
    setAdditionalContent(additionalContent?: string): this {
        this.friendtalk.additionalContent = additionalContent;
        return this;
    }

    /** 광고성메시지 필수 표기 사항 노출 여부(Y(기본값)/N)
        (msgType이 FL, FC, FA인  경우  Y로만  발송 가능) */
    setAdFlag(adFlag?: string): this {
        this.friendtalk.adFlag = adFlag;
        return this;
    }

    /** 성인용 메시지 여부(Y/N(기본값)) */
    setAdult(adult?: string): this {
        this.friendtalk.adult = adult;
        return this;
    }

    /** 첨부 정보 */
    setAttachment(attachment?: Attachment): this {
        this.friendtalk.attachment = attachment;
        return this;
    }

    /** 헤더 정보
        (msgType 이 FL 인  경우 필수, FP인 경우 옵션) */
    setHeader(header?: string): this {
        this.friendtalk.header = header;
        return this;
    }

    /** 캐로셀 정보 (msgType이 FC, FA 인 경우 필수) */
    setCarousel(carousel?: Carousel): this {
        this.friendtalk.carousel = carousel;
        return this;
    }

    /** 그룹태그 등록으로 받은 그룹태그 키 */
    setGroupTagKey(groupTagKey?: string): this {
        this.friendtalk.groupTagKey = groupTagKey;
        return this;
    }

    /** 메시지 푸시 알람 발송 여부( Y(기본값) / N ) */
    setPushAlarm(pushAlarm?: string): this {
        this.friendtalk.pushAlarm = pushAlarm;
        return this;
    }

    build(): Friendtalk {
        return this.friendtalk as Friendtalk;
    }
}
