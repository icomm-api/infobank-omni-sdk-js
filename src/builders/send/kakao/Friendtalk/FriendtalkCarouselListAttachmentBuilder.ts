import { CarouselListAttachment, Commerce, Coupon, Image } from "../../../../interfaces/send/kakao/Friendtalk/Friendtalk";
import { KakaoButton } from "../../../../interfaces/send/kakao/KakaoButton";

/**
 * 클래스: FriendtalkCarouselListAttachmentBuilder
 * 설명: 카카오 비즈메시지 친구톡 캐로셀의 리스트 상세 첨부 정보를 나타냅니다.
 */
export class FriendtalkCarouselListAttachmentBuilder {
    private attachment: Partial<CarouselListAttachment> = {};

    /** 버튼 목록 (msgType이 FT, FI일 때 coupon을 적용할 경우 최대 4개, 그 외 최대 5개) */
    setButton(button: KakaoButton[]): this {
        this.attachment.button = button;
        return this;
    }

    /** 캐로셀 썸네일 이미지 */
    setImage(image: Image): this {
        this.attachment.image = image;
        return this;
    }

    /** 쿠폰 요소 (캐로셀 최하단 노출) */
    setCoupon(coupon: Coupon): this {
        this.attachment.coupon = coupon;
        return this;
    }

     /** 커머스 요소 (msgType이 FA인 경우 필수, FC인 경우 사용 불가) */
    setCommerce(commerce: Commerce): this {
        this.attachment.commerce = commerce;
        return this;
    }

    build(): CarouselListAttachment {
        return this.attachment as CarouselListAttachment;
    }
}
