import { CarouselContent, RCSButton } from "../../../interfaces/send/rcs/RCSContent";



export class CarouselContentBuilder {
    private carouselContent: Partial<CarouselContent> = {};

    /** RCS 내용 */
    setText(text: string): this {
        this.carouselContent.text = text;
        return this;
    }

    /** RCS 제목 */
    setTitle(title: string): this {
        this.carouselContent.title = title;
        return this;
    }

    /** 미디어(maapfile://) */
    setMedia(media?: string): this {
        this.carouselContent.media = media;
        return this;
    }

    /** 클릭 시 랜딩 URL
        (값이 '\' 경우 이미지 전체보기) */
    setMediaUrl(mediaUrl?: string): this {
        this.carouselContent.mediaUrl = mediaUrl;
        return this;
    }

    /** 버튼 정보 */
    setButton(button?: RCSButton[]): this {
        this.carouselContent.button = button;
        return this;
    }

    build(): CarouselContent {
        return this.carouselContent as CarouselContent;
    }
}
