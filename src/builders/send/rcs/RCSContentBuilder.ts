import { CarouselContent, RCSContent, StandaloneContent, TemplateContent } from "../../../interfaces/send/rcs/RCSContent";

export class RCSContentBuilder {
    private rcsContent: Partial<RCSContent> = {};

    /** RCS 내용 standalone (content/body 중 하나는 필수 입력)  */
    setStandaloneContent(standalone: StandaloneContent): this {
        this.rcsContent.standalone = standalone;
        return this;
    }

    /** RCS 내용 carousel (content/body 중 하나는 필수 입력)  */
    setCarouselContent(carousel: CarouselContent[]): this {
        this.rcsContent.carousel = carousel;
        return this;
    }

    /** RCS 내용 template (content/body 중 하나는 필수 입력)   */
    setTemplateContent(template: TemplateContent): this {
        this.rcsContent.template = template;
        return this;
    }

    build(): RCSContent {
        return this.rcsContent as RCSContent;
    }
}
