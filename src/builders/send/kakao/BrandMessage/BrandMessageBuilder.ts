import { BrandMessage } from "../../../../interfaces/send/kakao/BrandMessage/BrandMessage";
import { Attachment, Carousel } from "../../../../interfaces/send/kakao/Friendtalk/Friendtalk";


/**
 * 클래스: BrandMEssageBuilder
 * 설명: OMNI 통합 발송과 FORM 등록/수정을 위한 BrandMessage 빌더 클래스입니다.
 */
export class BrandMessageBuilder {
    private brandMessage: Partial<BrandMessage> = {};

    /** 카카오 비즈메시지 발신 프로필 키 */
    setSenderKey(senderKey: string): this {
        this.brandMessage.senderKey = senderKey;
        return this;
    }
    
    /** 카카오 브랜드 메시지 타입 (basic: 기본형, free: 자유형) */
    setSendType(sendType: string): this {
        this.brandMessage.sendType = sendType;
        return this;
    }

    /** 카카오 비즈메시지 타입 */
    setMsgType(msgType: string): this {
        this.brandMessage.msgType = msgType;
        return this;
    }

    /** 친구톡 내용 */
    setText(text: string): this {
        this.brandMessage.text = text;
        return this;
    }

        /** 친구톡 내용 */
    setCarousel(carousel: Carousel): this {
        this.brandMessage.carousel = carousel;
        return this;
    }

     /** 첨부 정보 */
    setAttachment(attachment?: Attachment): this {
        this.brandMessage.attachment = attachment;
        return this;
    }
    
    /** 헤더 정보
        (msgType 이 FL 인  경우 필수, FP인 경우 옵션) */
    setHeader(header?: string): this {
        this.brandMessage.header = header;
        return this;
    }

      /** 헤더 정보
        (msgType 이 FL 인  경우 필수, FP인 경우 옵션) */
    setTargeting(targeting?: string): this {
        this.brandMessage.targeting = targeting;
        return this;
    }

          /** 헤더 정보
        (msgType 이 FL 인  경우 필수, FP인 경우 옵션) */
    setTemplateCode(templateCode?: string): this {
        this.brandMessage.templateCode = templateCode;
        return this;
    }
            /** 헤더 정보
        (msgType 이 FL 인  경우 필수, FP인 경우 옵션) */
    setAddtionalContent(addtionalContent?: string): this {
        this.brandMessage.addtionalContent = addtionalContent;
        return this;
    }

    setGroupTagKey(groupTagKey?: string): this {
        this.brandMessage.groupTagKey = groupTagKey;
        return this;
    }

    setAdult(adult?: string): this {
        this.brandMessage.adult = adult;
        return this;
    }

    setPushAlarm(pushAlarm?: string): this {
        this.brandMessage.pushAlarm = pushAlarm;
        return this;
    }

    setAdFlag(adFlag?: string): this {
        this.brandMessage.adFlag = adFlag;
        return this;
    }

    setMessageVariable(messageVariable?: object): this {
        this.brandMessage.messageVariable = messageVariable;
        return this;
    }

    setButtonVariable(buttonVariable?: object): this {
        this.brandMessage.buttonVariable = buttonVariable;
        return this;
    }

    setCouponVariable(couponVariable?: object): this {
        this.brandMessage.couponVariable = couponVariable;
        return this;
    }

    setImageVariable(imageVariable?: object): this {
        this.brandMessage.imageVariable = imageVariable;
        return this;
    }

    setVideoVariable(videoVariable?: object): this {
        this.brandMessage.videoVariable = videoVariable;
        return this;
    }


    setCommerceVariable(commerceVariable?: object): this {
        this.brandMessage.commerceVariable = commerceVariable;
        return this;
    }


    setCarouselVariable(carouselVariable?: object): this {
        this.brandMessage.carouselVariable = carouselVariable;
        return this;
    }

    setOriginCID(originCID?: string): this {
        this.brandMessage.originCID = originCID;
        return this;
    }

    setUnsubscribePhoneNumber(unsubscribePhoneNumber?: string): this {
        this.brandMessage.unsubscribePhoneNumber = unsubscribePhoneNumber;
        return this;
    }

    setUnsubscribeAuthNumber(unsubscribeAuthNumber?: string): this {
        this.brandMessage.unsubscribeAuthNumber = unsubscribeAuthNumber;
        return this;
    }

    build(): BrandMessage {
        return this.brandMessage as BrandMessage;
    }
}
