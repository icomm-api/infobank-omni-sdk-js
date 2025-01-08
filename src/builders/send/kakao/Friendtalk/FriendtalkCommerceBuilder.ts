import { Commerce } from "../../../../interfaces/send/kakao/Friendtalk/Friendtalk";

export class FriendtalkCommerceBuilder {
    private commerce: Partial<Commerce> = {};

    /** 상품제목 (최대 30자) */
    setTitle(title: string): this {
        this.commerce.title = title;
        return this;
    }

    /** 정상가격 (0 ~ 99,999,999) */
    setRegularPrice(regularPrice: number): this {
        this.commerce.regularPrice = regularPrice;
        return this;
    }

    /** 할인가격 (0 ~ 99,999,999) */
    setDiscountPrice(discountPrice: number): this {
        this.commerce.discountPrice = discountPrice;
        return this;
    }

    /** 할인율 할인가격 존재시 할인율, 정액할인가격 중 하나는 필수 (0 ~ 100) */
    setDiscountRate(discountRate: number): this {
        this.commerce.discountRate = discountRate;
        return this;
    }

    /** 정액할인가격 할인가격 존재시 할인율, 정액할인가격 중 하나는 필수 (0 ~ 999,999) */
    setDiscountFixed(discountFixed: number): this {
        this.commerce.discountFixed = discountFixed;
        return this;
    }

    build(): Commerce {
        return this.commerce as Commerce;
    }
}
