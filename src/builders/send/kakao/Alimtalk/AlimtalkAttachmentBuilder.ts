import { Attachment, Item, ItemHighlight } from "../../../../interfaces/send/kakao/Alimtalk/Alimtalk";
import { KakaoButton } from "../../../../interfaces/send/kakao/KakaoButton";

export class AlimtalkAttachmentBuilder {
    private attachment: Partial<Attachment> = {};

    /** 알림톡 버튼 정보 */
    setButton(button?: KakaoButton[]): this {
        this.attachment.button = button;
        return this;
    }

    /** 알림톡 아이템 정보 */
    setItem(item?: Item): this {
        this.attachment.item = item;
        return this;
    }

    /** 알림톡 아이템 하이라이트 정보 */
    setItemHighlight(itemHighlight?: ItemHighlight): this {
        this.attachment.itemHighlight = itemHighlight;
        return this;
    }

    build(): Attachment {
        return this.attachment as Attachment;
    }
}
