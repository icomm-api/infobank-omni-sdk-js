import { SubContent } from "../../../interfaces/send/rcs/RCSContent";


export class SubContentBuilder {
    private subContent: Partial<SubContent> = {};

    /** 서브 소제목 */
    setSubTitle(subTitle: string): this {
        this.subContent.subTitle = subTitle;
        return this;
    }

    /** 서브 소본문 */
    setSubDesc(subDesc: string): this {
        this.subContent.subDesc = subDesc;
        return this;
    }

    /** 서브 이미지 */
    setSubMedia(subMedia?: string): this {
        this.subContent.subMedia = subMedia;
        return this;
    }

    /** 서브 이미지 URL */
    setSubMediaUrl(subMediaUrl?: string): this {
        this.subContent.subMediaUrl = subMediaUrl;
        return this;
    }

    build(): SubContent {
        return this.subContent as SubContent;
    }
}
