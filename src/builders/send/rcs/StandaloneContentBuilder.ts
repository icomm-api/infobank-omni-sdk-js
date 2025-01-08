import { RCSButton, StandaloneContent, SubContent } from "../../../interfaces/send/rcs/RCSContent";

export class StandaloneContentBuilder {
    private standaloneContent: Partial<StandaloneContent> = {};

    /** RCS 내용 */
    setText(text: string): this {
        this.standaloneContent.text = text;
        return this;
    }

    /** RCS 제목 */
    setTitle(title: string): this {
        this.standaloneContent.title = title;
        return this;
    }

    /** 미디어(maapfile://) */
    setMedia(media?: string): this {
        this.standaloneContent.media = media;
        return this;
    }

    /** 클릭 시 랜딩 URL (값이 '\' 경우 이미지 전체보기) */
    setMediaUrl(mediaUrl?: string): this {
        this.standaloneContent.mediaUrl = mediaUrl;
        return this;
    }

    /** 버튼 정보 */
    setButton(button?: RCSButton[]): this {
        this.standaloneContent.button = button;
        return this;
    }

    /** 서브 컨텐트 정보  */
    setSubContent(subContent?: SubContent[]): this {
        this.standaloneContent.subContent = subContent;
        return this;
    }

    build(): StandaloneContent {
        return this.standaloneContent as StandaloneContent;
    }
}
