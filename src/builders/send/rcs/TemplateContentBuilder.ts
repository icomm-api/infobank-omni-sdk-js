import { SubContent, TemplateContent } from "../../../interfaces/send/rcs/RCSContent";

export class TemplateContentBuilder {
    private templateContent: Partial<TemplateContent> = {};

    /** 템플릿 제목 */
    setTitle(title: string): this {
        this.templateContent.title = title;
        return this;
    }

    /** 템플릿 본문 */
    setDescription(description: string): this {
        this.templateContent.description = description;
        return this;
    }

    /** 서브 컨텐트 정보 */
    setSubContent(subContent?: SubContent[]): this {
        this.templateContent.subContent = subContent;
        return this;
    }

    /** 사전에  등록된 key, value(JSON) */
    setCustomField(key: string, value: string): this {
        this.templateContent[key] = value;
        return this;
    }

    build(): TemplateContent {
        return this.templateContent as TemplateContent;
    }
}