import { CarouselTail } from "../../../../interfaces/send/kakao/Friendtalk/Friendtalk";

/**
 * 클래스: FriendtalkCarouselTailBuilder
 * 설명: 카카오 비즈메시지 친구톡 캐로셀의 더보기 정보를 나타냅니다.
 */
export class FriendtalkCarouselTailBuilder {
    private tail: Partial<CarouselTail> = {};

    /** PC 환경에서 버튼 클릭 시 이동할 URL */
    setUrlPc(urlPc: string): this {
        this.tail.urlPc = urlPc;
        return this;
    }

    /** 모바일 환경에서 버튼 클릭 시 이동할 URL */
    setUrlMobile(urlMobile: string): this {
        this.tail.urlMobile = urlMobile;
        return this;
    }

    /** 모바일 iOS 환경에서 버튼 클릭 시 실행할 application custom scheme */
    setSchemeIos(schemeIos: string): this {
        this.tail.schemeIos = schemeIos;
        return this;
    }

    /** 모바일 Android 환경에서 버튼 클릭 시 실행할 application custom scheme */
    setSchemeAndroid(schemeAndroid: string): this {
        this.tail.schemeAndroid = schemeAndroid;
        return this;
    }

    build(): CarouselTail {
        return this.tail as CarouselTail;
    }
}
