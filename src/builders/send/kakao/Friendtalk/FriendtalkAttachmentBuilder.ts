import { Attachment, Commerce, Coupon, Image, Item, Video } from "../../../../interfaces/send/kakao/Friendtalk/Friendtalk";
import { KakaoButton } from "../../../../interfaces/send/kakao/KakaoButton";

export class FriendtalkAttachmentBuilder {
    private attachment: Partial<Attachment> = {};

    /** 버튼 목록
        msgType이 FT, FI이고 coupon을 적용할 경우 최대 4개 그 외 최대 5개  */
    setButton(button?: KakaoButton[]): this {
        this.attachment.button = button;
        return this;
    }

    /** 이미지 msgType이 FM인 경우 필수  */
    setImage(image?: Image): this {
        this.attachment.image = image;
        return this;
    }

    /** 와이드 리스트 요소  */
    setItem(item?: Item): this {
        this.attachment.item = item;
        return this;
    }

    /** 쿠폰 요소 메세지 최하단 노출  */
    setCoupon(coupon?: Coupon): this {
        this.attachment.coupon = coupon;
        return this;
    }

    /** 커머스 요소  */
    setCommerce(commerce?: Commerce): this {
        this.attachment.commerce = commerce;
        return this;
    }

    /** 비디오 요소  */
    setVideo(video?: Video): this {
        this.attachment.video = video;
        return this;
    }

    build(): Attachment {
        return this.attachment as Attachment;
    }
}
